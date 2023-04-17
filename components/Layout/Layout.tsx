import { ReactNode } from "react";
import { useRouter } from "next/router";
import SideNavigation from "./navigation/SideNavigation";
import TopBar from "./topbar/topbar";
import { useChatSocket } from "../../hooks/queries/useChatSocket";

function Layout(props: { children: ReactNode }) {
  const { children } = props;
  const router = useRouter();
  const path = router.pathname;

    useChatSocket();
  

  return (
    <div className="flex min-h-screen flex-col bg-secondary md:flex-row">
      <SideNavigation />
      <main className="w-full text-textColor">
        <TopBar />
        <section
          className={`flex w-full flex-col items-center justify-center p-5 ${
            path === "/auth/signin" || path === "/auth/signup" ? "h-full " : ""
          } `}>
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
