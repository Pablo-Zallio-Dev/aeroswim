import Link from "next/link";

export default function BtnPrimary({
  text,
  link,
  large
}: {
  text: string;
  link: string;
  large?:boolean
}) {
  return (
    <Link
      href={link}
      className={` 
            w-full min-w-max
                   px-4 
                  border border-borders 
                  uppercase italic font-inter font-black 
                  ${ large ?'text-lg py-4' :' text-xs py-2' }
                  tracking-tighter text-center
                  hover:border-accent hover:text-accent
                  transition-colors duration-150 
            `}
          >
      {text}
    </Link>
  );
}
