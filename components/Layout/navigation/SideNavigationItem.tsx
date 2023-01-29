import Link from "next/link";
import { classNames } from "./sideBarUtils";

function SideNavigationItem(props: any) {
  const { name, href, current } = props;

  return (
    <Link href={href} key={name}>
      <a
        className={classNames(
          current
            ? "bg-white text-primary"
            : "text-white hover:bg-secondary hover:text-white",
          "flex flex-row items-center px-5 py-4 text-lg font-semibold"
        )}
        aria-current={current ? "page" : undefined}
      >
        <props.icon
          className={classNames(
            current ? "text-primary" : "text-white",
            "mr-3 h-7 w-7"
          )}
          aria-hidden="true"
        />

        {name}
      </a>
    </Link>
  );
}

export default SideNavigationItem;
