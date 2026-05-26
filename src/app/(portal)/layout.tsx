import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PortalLayoutWrapper from '@/components/PortalLayoutWrapper';

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PortalLayoutWrapper header={<Header />} sidebar={<Sidebar />}>
            {children}
        </PortalLayoutWrapper>
    );
}
