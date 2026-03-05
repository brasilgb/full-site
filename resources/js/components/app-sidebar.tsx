import { Link } from '@inertiajs/react';
import { ContactIcon, FactoryIcon, FolderGit2, ImagesIcon, InfoIcon, LayoutGrid, LayoutPanelTopIcon, MonitorSmartphoneIcon, SlidersHorizontalIcon, UserIcon, WrenchIcon } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { about, category, dashboard, manufacturer, product, service, setting, slider, user } from '@/routes';
import type { NavItem } from '@/types';

const primaryNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Categorias',
        href: category(),
        icon: LayoutPanelTopIcon,
    },
    {
        title: 'Fabricantes',
        href: manufacturer(),
        icon: FactoryIcon,
    },
    {
        title: 'Produtos',
        href: product(),
        icon: MonitorSmartphoneIcon,
    },
    {
        title: 'Serviços',
        href: service(),
        icon: WrenchIcon,
    },
    {
        title: 'Sliders',
        href: slider(),
        icon: ImagesIcon,
    },
];

const secundaryNavItems: NavItem[] = [
    {
        title: 'Sobre',
        href: about(),
        icon: InfoIcon,
    },
];

const terciaryNavItems: NavItem[] = [
    {
        title: 'Configurações',
        href: setting(),
        icon: SlidersHorizontalIcon,
    },
    {
        title: 'Usuários',
        href: user(),
        icon: UserIcon,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    }
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className='gap-4'>
                <NavMain items={primaryNavItems} label='' />
                <NavMain items={secundaryNavItems} label="Páginas" />
                <NavMain items={terciaryNavItems} label="Configurações" />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
            </SidebarFooter>
        </Sidebar>
    );
}
