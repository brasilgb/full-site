import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ICategory } from '@/types/app'
import { useForm } from '@inertiajs/react'
import { Save } from 'lucide-react';
import React, { SyntheticEvent } from 'react'
import Select from 'react-select'

interface CategoryProps {
    initialData: ICategory;
    categories: any;
}

export default function FormCategory({ initialData, categories }: CategoryProps) {
    const isEdit = !!initialData;
    const { data, setData, post, patch, processing, reset, errors } = useForm({
        category_id: initialData?.category_id || "",
        name: initialData?.name ?? "",
        slug: initialData?.slug ?? "",
        description: initialData?.description ?? "",
        thumbnail: initialData?.thumbnail ?? "",
        featured: initialData?.featured ?? "",
        type: initialData?.type ?? "",
        active: initialData?.active ?? "",
        menu: initialData?.menu ?? "",
        home: initialData?.home ?? "",
        parent: initialData?.parent ?? "",
    })

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-3'>
                    <div className='grid gap-2'>
                        <Label>Categoria</Label>
                        <Input value={data.name} onChange={e => setData("name", e.target.value)} />
                        <InputError message={errors.name} />
                    </div>

                            <div className="grid gap-2">
          <Label>Garantia</Label>
          <Select
            value={selectedWarranty}
            options={warrantyOptions}
            onChange={changeWarranty}
            isClearable
            styles={selectStyles}
            placeholder="Selecione ou defina a garantia"
            className="shadow-xs p-0 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-9"
          />
          <InputError message={errors.warranty} />
        </div>
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        <Save className="mr-2" />
                        {isEdit ? "Atualizar" : "Salvar"}
                    </Button>
                </div>

            </form>
        </Card>
    )
}
