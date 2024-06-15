"use client";

import { useTheme } from "next-themes";

import { FaSun, FaMoon } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

export default () => {
  const { theme, setTheme } = useTheme();

  return (
    <Dropdown showArrow>
      <DropdownTrigger>
        <Button color="success" variant="flat">
          {theme ? (
            theme === "light" ? (
              <FaSun />
            ) : theme === "system" ? (
              <FaGear />
            ) : (
              <FaMoon />
            )
          ) : (
            <FaGear />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection={true}
        variant="flat"
        selectionMode="single"
        // @ts-ignore
        selectedKeys={new Set([theme])}
        // @ts-ignore
        onAction={(key: string) => setTheme(key)}
        aria-label="Actions"
      >
        <DropdownItem
          key="light"
          className="text-slate-800 dark:text-white"
          startContent={
            <FaSun className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
          }
        >
          สว่าง
        </DropdownItem>
        <DropdownItem
          key="dark"
          className="text-slate-800 dark:text-white"
          startContent={
            <FaMoon className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
          }
        >
          มืด
        </DropdownItem>
        <DropdownItem
          key="system"
          className="text-slate-800 dark:text-white"
          startContent={
            <FaGear className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
          }
        >
          ตามระบบ
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
