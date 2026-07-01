"use client";
import { useBtnMenuMobile } from "@/app/store/menuMobile.store";

export default function BtnMobileMenu() {
  const btnToggle = useBtnMenuMobile((state) => state.toggleMenu);
  const isOpen = useBtnMenuMobile((state) => state.isOpen);


  return (
    <button
      className=" 
      flex flex-col justify-center items-center gap-1.5 
      w-10 h-10 
      p-3 
      border border-borders
      "
      onClick={btnToggle}
    >
      <div
        className={` w-4 h-px border border-whiteText ${isOpen ? " rotate-45 translate-y-1 " : " "} transition-all duration-150 `}
      ></div>
      <div
        className={` w-4 h-px border border-whiteText ${isOpen ? " -rotate-45 -translate-y-1 " : " "} transition-all duration-150  `}
      ></div>
    </button>
  );
}
