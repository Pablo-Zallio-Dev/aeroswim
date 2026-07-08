'use client'
import { useBtnMenuMobile } from "@/app/store/menuMobile.store";
import Link from "next/link";

export default function BtnPrimary({
      text,
      link,
      large
}: {
      text: string;
      link: string;
      large?: boolean
}) {

      const btnToggle = useBtnMenuMobile((state) => state.toggleMenu);
      return (
            <Link
                  href={link}
                  onClick={() => btnToggle()}
                  className={` 
            w-full min-w-max
                   px-4 
                  border border-borders 
                  uppercase italic font-inter font-black 
                  ${large ? 'text-lg py-4' : ' text-xs py-2'}
                  tracking-tighter text-center
                  hover:border-accent hover:text-accent
                  transition-colors duration-150 
            `}
            >
                  {text}
            </Link>
      );
}
