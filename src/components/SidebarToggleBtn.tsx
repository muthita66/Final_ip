"use client";

import { useSidebar } from './PortalLayoutWrapper';

export default function SidebarToggleBtn() {
    const { toggle } = useSidebar();

    return (
        <button
            onClick={toggle}
            className="p-2 -ml-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none md:hidden transition-colors duration-200"
            aria-label="Toggle Sidebar"
        >
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    );
}
