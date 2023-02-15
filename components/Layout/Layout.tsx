import { useRouter } from "next/router";
import TopBar from "./topbar/topbar";
import SideNavigation from "./navigation/SideNavigation";
import { Tab } from "@headlessui/react";

function Layout(props: any) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="flex min-h-screen flex-col bg-secondary md:flex-row">
      <SideNavigation />
      <main className="w-full text-textColor">
        <TopBar />
        <section
          className={`flex flex-col items-center justify-center p-5 ${
            path === "/auth/signin" || path === "/auth/signup" ? "h-full " : ""
          } `}
        >
          {props.children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
