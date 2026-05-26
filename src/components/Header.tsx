import { getSession } from '@/lib/auth';
import UserMenu from './UserMenu';
import SidebarToggleBtn from './SidebarToggleBtn';

export default async function Header() {
    const session = await getSession();

    return (
        <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200 flex items-center justify-between px-4 md:px-6 transition-all duration-300">
            <div className="flex items-center gap-2 md:gap-3">
                <SidebarToggleBtn />
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md flex items-center justify-center text-white font-bold text-lg shrink-0">
                    W
                </div>
                <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-600 tracking-tight whitespace-nowrap">
                    WinAI School
                </span>
            </div>

            <UserMenu session={session} />
        </header>
    );
}
