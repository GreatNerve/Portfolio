
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const useNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const subMenuToggle = useCallback(function subMenuToggle(ref: any) {
    if (ref && ref.getAttribute("aria-expanded") === "true") ref.click();
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    setIsMenuOpen(false);
    subMenuToggle(projectsRef.current);
  }, [pathname, subMenuToggle]);

  const handleMenuToggle = useCallback(
    (action = "") => {
      subMenuToggle(servicesRef.current!);
      if (action === "close") return setIsMenuOpen(false);
      setIsMenuOpen(!isMenuOpen);
    },
    [isMenuOpen, subMenuToggle, servicesRef]
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isMenuOpen,navRef, servicesRef, projectsRef, handleMenuToggle };
};

export { useNavbar };
