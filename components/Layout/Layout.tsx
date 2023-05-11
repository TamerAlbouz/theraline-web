import { ReactNode } from "react";
import { useRouter } from "next/router";
import SideNavigation from "./navigation/SideNavigation";
import TopBar from "./Topbar/Topbar";

function Layout(props: { children: ReactNode }) {
  const { children } = props;
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="flex min-h-screen flex-col bg-secondary md:flex-row">
      <SideNavigation />
      <main className="w-full text-textColor">
        <TopBar />
        <section
          className={` w-full flex-col items-center justify-center p-5 ${
            path === "/auth/signin" ? "flex h-full " : ""
          } `}>
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
