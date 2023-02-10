import { useRouter } from "next/router";
import TopBar from "./topbar/topbar";
import SideNavigation from "./navigation/SideNavigation";
import { Tab } from "@headlessui/react";

function Layout(props: any) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div
      className={`flex min-h-screen flex-col bg-secondary md:flex-row ${
        path === "/auth/signin" || path === "/auth/signup"
          ? "justify-center"
          : ""
      } `}
    >
      <SideNavigation />
      <main className="w-full">
        <TopBar />
        <section
          className={`flex ${
            path === "/auth/signin" || path === "/auth/signup" ? "h-full" : ""
          }  flex-wrap items-start justify-center p-5`}
        >
          {props.children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
