"use client";

import React from 'react';
import { useSidebar } from './PortalLayoutWrapper';

export default function SidebarContainer({ children }: { children: React.ReactNode }) {
    const { isOpen } = useSidebar();

    return (
        <aside
            className={`fixed left-0 top-16 bottom-0 w-64 bg-slate-50 border-r border-slate-200 p-4 flex flex-col z-30 transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        >
            {children}
        </aside>
    );
}
