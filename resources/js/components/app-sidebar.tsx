import { Link } from '@inertiajs/react';
import { ContactIcon, FactoryIcon, FolderGit2, ImagesIcon, LayoutGrid, LayoutPanelTopIcon, MegaphoneIcon, MonitorSmartphoneIcon, SlidersHorizontalIcon, UserIcon, WrenchIcon } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const primaryNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Fabricantes',
        href: dashboard(),
        icon: FactoryIcon,
    },
    {
        title: 'Categorias',
        href: dashboard(),
        icon: LayoutPanelTopIcon,
    },
    {
        title: 'Produtos',
        href: dashboard(),
        icon: MonitorSmartphoneIcon,
    },
    {
        title: 'Serviços',
        href: dashboard(),
        icon: WrenchIcon,
    },
    {
        title: 'Sliders',
        href: dashboard(),
        icon: ImagesIcon,
    },
];

const secundaryNavItems: NavItem[] = [
    {
        title: 'Sobre',
        href: dashboard(),
        icon: MegaphoneIcon,
    },
    {
        title: 'Contato',
        href: dashboard(),
        icon: ContactIcon,
    },
];

const terciaryNavItems: NavItem[] = [
    {
        title: 'Ajustes',
        href: dashboard(),
        icon: SlidersHorizontalIcon,
    },
    {
        title: 'Usuários',
        href: dashboard(),
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
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
