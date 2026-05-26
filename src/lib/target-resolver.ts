import { prisma } from '@/lib/prisma';

export async function resolveTargetValues(targets: any[]) {
    const dict: Record<string, string> = {};
    return dict;
}

export function formatTargetValue(target_type: string, target_value: any, dict: any) {
    if (!target_value || target_value === 'all') return 'ทุกคน';
    return String(target_value);
}
