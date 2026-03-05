import AppLayout from '@/layouts/app-layout'
import { manufacturer } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import { FactoryIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: manufacturer(),
  },
];
function Fabricantes() {
  
  const FabricanteHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <FactoryIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Fabricantes</h1>
      </div>
    )
  }

  return (
    <AppLayout 
    breadcrumbs={breadcrumbs}
    headerTitle={<FabricanteHeader />}
    >
      <Head title="Fabricantes" />
      <div>Fabricantes</div>
    </AppLayout>
  )
}

export default Fabricantes