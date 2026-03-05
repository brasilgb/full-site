import { SidebarTrigger } from '@/components/ui/sidebar';
import { NavUser } from './nav-user';

export function AppSidebarHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex flex-1 items-center justify-between">
                <div><SidebarTrigger className="ml-1" /></div>
                <div><NavUser /></div>
            </div>
        </header>
    );
}
