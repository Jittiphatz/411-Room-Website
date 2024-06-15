import NextLink from "next/link";

import ToggleTheme from "@/components/ToggleTheme";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default () => {
  const menuItems = [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "กิจกรรมภายในห้อง",
      href: "/activity",
    },
    {
      label: "เกี่ยวกับเรา",
      href: "/about",
    },
    {
      label: "ติดต่อเรา",
      href: "/contact",
      
    },
    {
      label: "Website Status",
      href: "https://status.mannez.site",
    },
    {
      label: "Source Code",
      href: "https://github.com/MANNEZ4966/411-Room-Website",
    },
  ];

  return (
    <Navbar shouldHideOnScroll={true} className="text-black dark:text-white">
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={"Open/Close menu"} />
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarBrand>
          <NextLink href="/" className="font-bold text-slate-800 text-inherit uppercase dark:text-white">
            4/11 Room Website
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleTheme />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              size="lg"
              href={item.href}
              as={NextLink}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
