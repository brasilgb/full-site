import AppLayout from '@/layouts/app-layout'
import React from 'react'
import CategoryHeader from './header'
import { Head } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import category from '@/routes/category';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Categorias',
    href: category.index(),
  },
  {
    title: 'Nova categoria',
    href: '',
  },
];

function CreateCategory() {
  return (
        <AppLayout
      breadcrumbs={breadcrumbs}
      headerTitle={<CategoryHeader />}
    >
      <Head title="Nova Categoria" />

      </AppLayout>
  )
}

export default CreateCategory