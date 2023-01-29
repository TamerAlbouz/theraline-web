import { AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { RiCalendarTodoLine, RiDashboard2Line } from "react-icons/ri";

export const navigation = [
  { name: "Overview", href: "/", current: true, icon: RiDashboard2Line },
  {
    name: "Calendar",
    href: "/",
    current: false,
    icon: RiCalendarTodoLine,
  },
  {
    name: "Patient List",
    href: "/",
    current: false,
    icon: HiOutlineClipboardList,
  },
  { name: "Messeges", href: "/", current: false, icon: AiOutlineMessage },
  { name: "Payment Info", href: "/", current: false, icon: MdOutlinePayments },
  { name: "Settings", href: "/", current: false, icon: FiSettings },
];

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
