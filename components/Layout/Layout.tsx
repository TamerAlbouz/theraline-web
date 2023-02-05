import { useRouter } from "next/router";
import TopBar from "./topbar/topbar";
import SideNavigation from "./navigation/SideNavigation";

function Layout(props: any) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div
      className={`flex min-h-screen flex-col ${
        path === "/auth/signin" || path === "/auth/signup"
          ? "justify-center"
          : ""
      } bg-secondary md:flex-row`}
    >
      <SideNavigation />
      <section className="w-full">
        <TopBar />
        <main className="flex h-full flex-wrap items-start justify-center p-5">
          {props.children}
        </main>
      </section>
    </div>
  );
}

export default Layout;
