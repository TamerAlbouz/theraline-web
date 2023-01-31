import { useRouter } from "next/router";
import { HiBell, HiPlus, HiSearch } from "react-icons/hi";
import { navigation } from "../utils";

function Header() {
  const router = useRouter();
  const path = router.pathname;
  const navigationItem: any = navigation.find((item) => item.href === path);

  return (
    <header className="hidden flex-row items-center justify-between border-b-2 border-b-white p-5 md:flex">
      <div className="flex flex-row items-center gap-3 text-2xl text-white">
        <navigationItem.icon className="text-4xl" />
        <h1 className="font-semibold">{navigationItem.name}</h1>
      </div>
      <div className="flex w-1/5 flex-row justify-end gap-5">
        <button className="flex w-full items-center gap-2 rounded-full border-2 border-white bg-primary p-1 pl-3 text-gray-400  focus:outline-none">
          <HiSearch />
          <p>Search</p>
        </button>
        <button className="rounded-full bg-white p-2 text-secondary hover:bg-primary hover:text-white">
          <HiPlus className="text-xl " />
        </button>
        <button className="rounded-full bg-white p-2 text-secondary  hover:bg-primary hover:text-white">
          <HiBell className="text-xl " />
        </button>
      </div>
    </header>
  );
}

export default Header;
