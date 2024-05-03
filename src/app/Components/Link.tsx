import { ComponentProps } from 'react'

export function Link(props: ComponentProps<'a'>) {
  return (
    <a
      className="border-[8px] border-[#244D0C] block py-2 px-12 rounded-full w-fit text-xl sm:text-2xl md:text-4xl mx-auto text-green-800 bg-white cursor-pointer"
      {...props}
    />
  )
}
