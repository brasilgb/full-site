import AppLayout from '@/layouts/app-layout'
import { slider } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import { ImagesIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: slider(),
  },
];
function Slider() {
  
  const SliderHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <ImagesIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Slider</h1>
      </div>
    )
  }

  return (
    <AppLayout 
    breadcrumbs={breadcrumbs}
    headerTitle={<SliderHeader />}
    >
      <Head title="Slider" />
      <div>Slider</div>
    </AppLayout>
  )
}

export default Slider