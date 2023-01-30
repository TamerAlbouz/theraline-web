import { navigation } from "./sideBarUtils";
import SideNavigationItem from "./SideNavigationItem";

function SideNavigationList(): any {
  return navigation.map((item: any) => (
    <SideNavigationItem
      key={item.name}
      name={item.name}
      href={item.href}
      icon={item.icon}
    />
  ));
}

export default SideNavigationList;
