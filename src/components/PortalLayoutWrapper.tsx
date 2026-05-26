"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SidebarContext = createContext<{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggle: () => void;
}>({
    isOpen: false,
    setIsOpen: () => { },
    toggle: () => { },
});

export const useSidebar = () => useContext(SidebarContext);

export default function PortalLayoutWrapper({
    header,
    sidebar,
    children,
}: {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const toggle = () => setIsOpen(!isOpen);

    // Close mobile sidebar on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, toggle }}>
            <div className="flex pt-16 h-screen overflow-hidden">
                {header}
                {sidebar}

                {/* Mobile Sidebar Backdrop */}
                {isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300"
                    />
                )}

                {/* Main Content Area */}
                <main className="flex-1 relative min-w-0 overflow-x-hidden md:ml-64 transition-all duration-300">
                    <div className="h-full overflow-y-auto px-4 py-6 md:py-8 custom-scrollbar">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarContext.Provider>
    );
}
