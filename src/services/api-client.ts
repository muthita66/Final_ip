/**
 * A generic API client wrapper for Next.js 
 * Automatically handles JSON parsing and standard error throwing
 */

type ApiEnvelope<T> = {
    success?: boolean;
    message?: string;
    error?: string;
    errors?: unknown;
    data?: T;
};

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
}

export async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
    const defaultOptions: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
            ...(options?.headers || {}),
        },
        ...options,
    };

    const response = await fetch(url, defaultOptions);

    const text = await response.text();
    let data: unknown = null;

    try {
        data = text ? JSON.parse(text) : null;
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown JSON parse error';
        console.error(`[fetchApi] Failed to parse JSON from ${url}. Status: ${response.status}`);
        console.error(`[fetchApi] Response body starts with: ${text.substring(0, 500)}`);
        throw new Error(`Invalid JSON response from ${url}: ${message}`);
    }

    const envelope = isRecord(data) ? (data as ApiEnvelope<T>) : null;

    if (!response.ok || envelope?.success === false) {
        const errorMsg = envelope?.message || envelope?.error || response.statusText || `HTTP error! status: ${response.status}`;
        const detailedError = envelope?.errors ? JSON.stringify(envelope.errors) : '';
        throw new Error(detailedError ? `${errorMsg} (${detailedError})` : errorMsg);
    }

    if (envelope && 'success' in envelope && envelope.success === true) {
        return envelope.data as T;
    }

    return data as T;
}
