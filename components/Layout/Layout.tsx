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
      <main className="w-full">
        <TopBar />
        <section
          className={`flex ${
            path === "/auth/signin" || path === "/auth/signup" ? "h-full" : ""
          } p-5`} // flex-wrap items-start justify-center
        >
          {props.children}
        </section>
      </main>
    </div>
  );
}

export default Layout;
