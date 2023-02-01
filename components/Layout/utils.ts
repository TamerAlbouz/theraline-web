import { AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { RiCalendarTodoLine, RiDashboard2Line } from "react-icons/ri";

export var navigation = [
  {
    name: "Overview",
    href: "/",
    icon: RiDashboard2Line,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: RiCalendarTodoLine,
  },
  {
    name: "Patient List",
    href: "/patient-list",
    icon: HiOutlineClipboardList,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: AiOutlineMessage,
  },
  {
    name: "Payment Info",
    href: "/payment-info",
    icon: MdOutlinePayments,
  },
  { name: "Settings", href: "/settings", icon: FiSettings },
];

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
