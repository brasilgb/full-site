import AppLayout from '@/layouts/app-layout'
import React from 'react'
import CategoryHeader from './header'
import { Head, Link } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import category from '@/routes/category';
import FormCategory from './form-category';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Categorias',
    href: category.index(),
  },
  {
    title: 'Editar categoria',
    href: '',
  },
];

function EditCategory({ page, search }: any) {
  return (
    <AppLayout
      breadcrumbs={breadcrumbs}
      headerTitle={<CategoryHeader />}
    >
      <Head title="Editar Categoria" />
      <Link href={category.index({ query: { page: page, search: search  } })}>
        Voltar
      </Link>

      <FormCategory />
    </AppLayout>
  )
}

export default EditCategory