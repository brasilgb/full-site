import AppLayout from '@/layouts/app-layout'
import { user } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'
import { UserIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: user(),
  },
];
function User() {

  const UserHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <UserIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Usuários</h1>
      </div>
    )
  }

  return (
    <AppLayout
      breadcrumbs={breadcrumbs}
      headerTitle={<UserHeader />}
    >
      <Head title="Sobre" />
      <div>User</div>
    </AppLayout>
  )
}

export default User