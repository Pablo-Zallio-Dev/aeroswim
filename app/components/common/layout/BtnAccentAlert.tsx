import Link from "next/link";

export default function BtnAccentAlert({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className=" 
                  w-full min-w-max
                  py-2 px-4 
                  border border-borders 
                  bg-accentAlert
                  uppercase italic font-inter font-black 
                  text-xs tracking-tighter text-center
                  hover:bg-accentAlert/90
                  transition-colors duration-150 "
    >
      {text}
    </Link>
  );
}
