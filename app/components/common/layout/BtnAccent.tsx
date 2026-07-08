import Link from "next/link";

export default function BtnAccent({ accent, text, link }: { accent?: boolean, text: string, link: string }) {
      return (
                  <Link className={` w-full min-w-max py-4 px-10 uppercase ${accent ? 'bg-accent hover:bg-whiteText ' : ' bg-whiteText hover:bg-accent'} text-darkText text-center transition-colors duration-150  font-inter font-black italic text-lg `} href={link}>
                        {text}
                  </Link>
      )
}