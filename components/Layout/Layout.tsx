import SideNavigation from "./navigation/SideNavigation";

function Layout(props: any) {
  return (
    <div className="flex h-full flex-col bg-secondary md:flex-row">
      <SideNavigation />
      <main className="w-full">{props.children}</main>
    </div>
  );
}

export default Layout;
