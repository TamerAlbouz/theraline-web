import { useRouter } from "next/router";
import TopBar from "./topbar/topbar";
import SideNavigation from "./navigation/SideNavigation";

function Layout(props: any) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div
      className={`flex min-h-screen flex-col bg-secondary md:flex-row`}
    >
      <SideNavigation />
      <main className="w-full">
        <TopBar />
        <section
          className={`flex p-5 ${
            path === "/auth/signin" ||
            path === "/auth/signup"
              ? "h-full items-center justify-center"
              : ""
          } `}
        >
          {props.children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
