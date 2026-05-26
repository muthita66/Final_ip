import './globals.css';
import Providers from '@/components/Providers';

export const metadata = {
    title: 'WinAI School',
    description: 'ระบบจัดการโรงเรียน WinAI - ตรวจสอบเกรด ตารางเรียน สุขภาพ และอื่นๆ',
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'WinAI School',
    },
};

export const viewport = {
    themeColor: '#059669',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="th">
            <body className="bg-slate-50 min-h-screen text-slate-800">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
