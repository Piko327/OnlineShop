
import { Fragment } from "react";
import { Menu } from "@headlessui/react";

export default function Dropdown({ setCatagory }) {
  const catagoryTitles = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
    "All",
  ];

  return (<div>
      <Menu>
        <Menu.Button className="bg-rose-950 self-start  text-gray-100  text-right p-2 m-2 ml-10 md:ml-20">
          Catagories
        </Menu.Button>
        <Menu.Items className="bg-gray-100 p-4 flex flex-col  shadow-lg absolute   top-52 left-12 gap-5">
          {catagoryTitles.map((title) => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={title} as={Fragment}>
              {({ active }) => (
                <span
                  onClick={() => setCatagory(title)}
                  className={`${
                    active ? "cursor-pointer text-gray-900" : "  text-gray-700"
                  }`}
                >
                  {title}
                </span>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}
