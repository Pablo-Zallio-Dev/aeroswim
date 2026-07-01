"use client";
import { useBtnMenuMobile } from "@/app/store/menuMobile.store";
import BtnAccentAlert from "../../layout/BtnAccentAlert";
import BtnPrimary from "../../layout/BtnPrimary";
import BtnNav from "./BtnNav";

export default function MenuMobile() {
  const links = [
    {
      number: "[ 01 ]",
      text: "inicio",
      link: "/",
    },
    {
      number: "[ 02 ]",
      text: "el club",
      link: "/club",
    },
    {
      number: "[ 03 ]",
      text: "Horarios",
      link: "/timetables",
    },
    {
      number: "[ 04 ]",
      text: "resultados",
      link: "/results",
    },
    {
      number: "[ 05 ]",
      text: "contacto",
      link: "/contact",
    },
  ];

  const isOpen = useBtnMenuMobile((state) => state.isOpen);

  return (
    <section
      className={`
            absolute top-22.25 left-0 lg:relative lg:top-0
            flex flex-col gap-4 xl:gap-8 lg:flex-row lg:items-center lg:justify-end
            w-full
            p-6 lg:p-0 
            border-b border-borders lg:border-none
            bg-background
            lg:opacity-100    
            ${
              isOpen
                ? " translate-x-0 opacity-100 "
                : " -translate-x-full  opacity-0  "
            }
            transition-all duration-250
            `}
    >
      {links.map((link) => (
        <BtnNav
          key={link.text}
          number={link.number}
          text={link.text}
          link={link.link}
        />
      ))}

      <section className=" flex gap-4 xl:pl-8 ">
        <BtnPrimary link={"/"} text={"iniciar sesión"} />
        <BtnAccentAlert text={"unete"} link={"/contact"} />
      </section>
    </section>
  );
}
