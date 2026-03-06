import { Card, CardFooter } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react'
import { PlusIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AppPagination } from "@/components/app-pagination";
import cat from '@/routes/category';
import InputSearch from '@/components/input-search';
import CategoryHeader from './header';
import category from '@/routes/category';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: '',
    href: category.index(),
  },
];

function Category({ categories, search }: any) {

  return (
    <AppLayout
      breadcrumbs={breadcrumbs}
      headerTitle={<CategoryHeader />}
    >
      <Head title="Categorias" />
      <div className='flex items-center justify-between mb-4'>
        <div className='flex-1'>
          <InputSearch placeholder='Pesquisar categoria' url={category.index()} />
        </div>
        <div className='flex-1 flex items-center justify-end'>
          <Button
            asChild
            variant={'secondary'}
          >
            <Link
              href={cat.create()}
            >
              <PlusIcon className='w-4 h-4' />
              Nova categoria
            </Link>
          </Button>
        </div>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">#</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Categoria Pai</TableHead>
              <TableHead>Ativa</TableHead>
              <TableHead>Menu</TableHead>
              <TableHead>Home</TableHead>
              <TableHead>Criação</TableHead>
              <TableCell></TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories?.data.map((cat: any) => (
              <TableRow key={cat.id}>
                <TableCell className="font-medium">{cat.id}</TableCell>
                <TableCell className="font-semibold">{cat.name}</TableCell>

                <TableCell>
                  {cat.parent ? (
                    <span className="text-muted-foreground">
                      {cat.parent.name}
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground italic">Principal</span>
                  )}
                </TableCell>

                <TableCell>
                  <Badge
                    variant={cat.active === 1 ? "default" : "destructive"}
                    className={cat.active === 1 ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                  >
                    {cat.active === 1 ? "Ativo" : "Inativo"}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Badge variant="secondary" className={cat.menu === 1 ? "opacity-100" : "opacity-30"}>
                    {cat.menu === 1 ? "Sim" : "Não"}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Badge variant="secondary" className={cat.visiblehome === 1 ? "opacity-100" : "opacity-30"}>
                    {cat.visiblehome === 1 ? "Sim" : "Não"}
                  </Badge>
                </TableCell>

                <TableCell>
                  {cat.created_at ? format(new Date(cat.created_at), "dd/MM/yyyy") : "--/--/----"}
                </TableCell>
                <TableCell className='flex items-center justify-end gap-2'>
                  <Button
                    asChild
                    variant={'default'}
                  >
                    <Link
                      replace
                      href={category.edit(cat.id, { query: { page: categories.current_page, search: search } })}>
                      <SquarePenIcon className='w-4 h-4' />
                    </Link>
                  </Button>

                  <Button
                    variant={'destructive'}
                  >
                    <Trash2Icon className='w-4 h-4' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
        <CardFooter className='flex items-center justify-center'>
          <AppPagination data={categories} />
        </CardFooter>
      </Card>
    </AppLayout>
  )
}

export default Category