'use client'
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'



export function DropDown({setCatagory}) {

 
  const catagoryTitles = ["Men","Women","Electronic","jewelery"]

  
  return <>

<Menu>
      <Menu.Button>Catagories</Menu.Button>
      <Menu.Items className='bg-slate-400 p-4 flex flex-col gap-5'>
        {catagoryTitles.map((title) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={title} as={Fragment}>
            {({ active }) => (
              <span
                onClick={()=>setCatagory(title)}
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-red-400  text-black'
                }`}
              >
               {title}
              </span>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
    </>
};



