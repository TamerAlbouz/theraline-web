import Header from "./header/Header";
import SideNavigation from "./navigation/SideNavigation";

function Layout(props: any) {
  return (
    <div className="flex min-h-screen flex-col bg-secondary md:flex-row">
      <SideNavigation />
      <section className="w-full">
        <Header />
        <main>{props.children}</main>
      </section>
    </div>
  );
}

export default Layout;
