import { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../../../utils/components/layout-utils";

function SideNavigationItem(props: {
  name: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  const { name, href, Icon } = props;

  const router = useRouter();
  const current = router.pathname === href;

  return (
    <Link href={href} key={name}>
      <button
        type="button"
        className={classNames(
          current
            ? "bg-white text-primary"
            : "text-textColor hover:bg-secondary hover:text-textColor",
          "flex flex-row items-center px-5 py-4 text-lg font-semibold transition-all duration-200 focus:outline-none",
        )}
        aria-current={current ? "page" : undefined}>
        <Icon
          className={classNames(
            current ? "text-primary" : "text-textColor",
            "mr-3 h-7 w-7",
          )}
          aria-hidden="true"
        />

        {name}
      </button>
    </Link>
  );
}

export default SideNavigationItem;
