"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BtnNav({
      number,
      text,
      link,
}: {
      number: string;
      text: string;
      link: string;
}) {
      const pathname = usePathname();
      const isActive = pathname === link;

      return (
            <>
                  <Link
                        href={link}
                        className={` tracking-widest uppercase font-jetBrainsMono text-xs lg:text-[11px] ${isActive ? "text-accent" : " text-whiteText "}  `}
                  >
                        {number} {text}
                  </Link>
            </>
      );
}
