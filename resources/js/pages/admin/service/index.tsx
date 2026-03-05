import AppLayout from '@/layouts/app-layout'
import { service } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import { WrenchIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: service(),
  },
];

function Service() {
  
  const ServiceHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <WrenchIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Serviços</h1>
      </div>
    )
  }

  return (
    <AppLayout 
    breadcrumbs={breadcrumbs}
    headerTitle={<ServiceHeader />}
    >
      <Head title="Serviços" />
      <div>Service</div>
    </AppLayout>
  )
}

export default Service