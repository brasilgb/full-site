import { Breadcrumbs } from '@/components/breadcrumbs';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { AppLayoutProps } from '@/types';
const AppLayout = ({ children, breadcrumbs = [], headerTitle }: AppLayoutProps) => (
    <AppLayoutTemplate>
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl md:p-4 p-2">
            <div className='flex items-center justify-between w-full'>
                <div>{headerTitle}</div>
                <div><Breadcrumbs breadcrumbs={breadcrumbs} /></div>
            </div>
            <div>
                {children}
            </div>
        </div>
    </AppLayoutTemplate>
);
export default AppLayout
