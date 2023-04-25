import { useRouter } from "next/router";
import { navigation } from "../../../utils/components/layout-utils";

function TopBar() {
  const router = useRouter();
  const path = router.pathname;

  const navigationItem: any = navigation.find((item) => item.href === path);

  // for paths like sign-in
  // alternatively, could define a list of excluded paths for which the header won't be shown
  if (navigationItem === undefined) {
    return <div />;
  }

  return (
    <header className="hidden w-full flex-row items-center justify-between border-b-2 border-b-white p-5 md:flex">
      <div className="flex flex-row items-center gap-3 text-2xl text-textColor">
        <navigationItem.icon className="text-4xl" />
        <h1 className="font-semibold">{navigationItem.name}</h1>
      </div>
    </header>
  );
}

export default TopBar;
