import { Input } from '@/components/ui/input'

export function Search() {
  return (
    <div>
      <Input
        type='search'
        placeholder='Search...'
        className='w-[150px] md:w-[300px]'
      />
    </div>
  )
}
