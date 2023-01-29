import { Fragment } from "react";
import SideNavigation from "./navigation/SideNavigation";

function Layout(props: any): any {
  return (
    <Fragment>
      <div className="flex h-screen flex-col bg-secondary md:flex-row">
        <SideNavigation />
        <main className="w-full">{props.children}</main>
      </div>
    </Fragment>
  );
}

export default Layout;
