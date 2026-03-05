import AppLayout from '@/layouts/app-layout'
import { setting } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import { SlidersHorizontalIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: setting(),
  },
];
function Setting() {
  
  const SettingHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <SlidersHorizontalIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Configurações</h1>
      </div>
    )
  }

  return (
    <AppLayout 
    breadcrumbs={breadcrumbs}
    headerTitle={<SettingHeader />}
    >
      <Head title="Configurações" />
      <div>Setting</div>
    </AppLayout>
  )
}

export default Setting