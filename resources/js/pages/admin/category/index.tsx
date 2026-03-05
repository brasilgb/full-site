import AppLayout from '@/layouts/app-layout'
import { category } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import { LayoutPanelTopIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: category(),
  },
];
function Category() {

   const CategoryHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <LayoutPanelTopIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Categorias</h1>
      </div>
    )
  }

  return (
    <AppLayout 
    breadcrumbs={breadcrumbs}
    headerTitle={<CategoryHeader />}
    >
      <Head title="Categorias" />
      <div>Category</div>
    </AppLayout>
  )
}

export default Category