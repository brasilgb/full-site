import AppLayout from '@/layouts/app-layout'
import { product } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import { MonitorSmartphoneIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: product(),
  },
];
function Product() {
  
  const ProductHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <MonitorSmartphoneIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Produtos</h1>
      </div>
    )
  }

  return (
    <AppLayout 
    breadcrumbs={breadcrumbs}
    headerTitle={<ProductHeader />}
    >
      <Head title="Produtos" />
      <div>Product</div>
    </AppLayout>
  )
}

export default Product