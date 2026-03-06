import { LayoutPanelTopIcon } from "lucide-react"

  const CategoryHeader = () => {
    return (
      <div className='flex items-center gap-2'>
        <LayoutPanelTopIcon className='w-8 h-8' />
        <h1 className='text-2xl font-medium'>Categorias</h1>
      </div>
    )
  }
  export default CategoryHeader