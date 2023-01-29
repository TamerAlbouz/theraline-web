import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { classNames, navigation } from "./sideBarUtils";
import SideNavigationList from "./SideNavigationList";
import ProfileMenu from "./ProfileMenu";
import { BiHelpCircle } from "react-icons/bi";

function SideNavigation() {
  return (
    <Disclosure as="nav" className="bg-primary md:w-60 lg:w-72">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:h-full md:px-0">
            <div className="relative flex h-16 items-center justify-between md:h-full md:flex-col">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-secondary hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logo & Items */}
              <div className="flex w-full flex-1 items-center justify-center md:flex-col md:items-start md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* Mobile Logo */}
                  <img
                    className="block h-8 w-auto md:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                  />
                  {/* Web Logo */}
                  <div className="flex items-center gap-3 p-3 py-5">
                    <img
                      className="hidden h-9 w-auto md:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt="Your Company"
                    />
                    <h1 className="hidden text-2xl font-bold text-white md:block">
                      Theraline
                    </h1>
                  </div>
                </div>
                <div className="hidden w-full md:block">
                  <div className="flex space-x-4 md:flex-col md:space-x-0">
                    <SideNavigationList />
                  </div>
                </div>
              </div>
              {/* Notification & Profile */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:w-full md:flex-col md:justify-start md:gap-5 md:py-5 md:pr-0">
                <button
                  type="button"
                  className="block rounded-full bg-secondary p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary md:hidden"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Link href="/help">
                  <a className="hidden w-full flex-row items-center justify-start gap-2 px-5 py-3 md:flex">
                    <BiHelpCircle className="text-3xl text-secondary" />
                    <p className="text-xl font-semibold text-secondary">
                      Help?
                    </p>
                  </a>
                </Link>
                <div className="hidden h-0.5 w-full bg-secondary md:block"></div>
                <ProfileMenu />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                >
                  <a
                    className={classNames(
                      item.current
                        ? "bg-white text-primary"
                        : "text-white hover:bg-secondary",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default SideNavigation;
