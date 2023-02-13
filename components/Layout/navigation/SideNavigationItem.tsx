import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../utils";

function SideNavigationItem(props: any) {
  const { name, href } = props;

  const router = useRouter();
  const current = router.pathname === href;

  return (
    <Link href={href} key={name}>
      <a
        className={classNames(
          current
            ? "bg-white text-primary"
            : "text-textColor hover:bg-secondary hover:text-textColor",
          "flex flex-row items-center px-5 py-4 text-lg font-semibold transition-all duration-200 focus:outline-none"
        )}
        aria-current={current ? "page" : undefined}
      >
        <props.icon
          className={classNames(
            current ? "text-primary" : "text-textColor",
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
