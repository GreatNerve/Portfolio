import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";


import { Button } from "@nextui-org/button";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@nextui-org/dropdown";

export function ModeToggle() {
  const {theme, setTheme } = useTheme();
  return (
    <Dropdown
      showArrow
      className="bg-background border border-border rounded-md min-w-32"
    >
      <DropdownTrigger>
        <Button
          isIconOnly
          variant="ghost"
          radius="sm"
        >
          <FiSun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Theme selector"
        itemClasses={{
          base: ["rounded-sm w-fit-content"],
        }}
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={new Set([theme!])}
        onSelectionChange={(selectedKeys) => {
          setTheme(Array.from(selectedKeys)[0] as string);
          
        }}
      >
        <DropdownItem key="light" >
          Light
          </DropdownItem>
        <DropdownItem  key="dark" >
          Dark
          </DropdownItem>
        
        <DropdownItem key="system">
          System
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ModeToggle;
