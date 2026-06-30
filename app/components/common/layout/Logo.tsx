import Link from "next/link";

export default function Logo( {light}: {light?: boolean} ) {
  return (
    <>
      <Link  className={` uppercase tracking-tighter font-black font-inter ${light ? ' text-whiteText italic text-base ' : ' text-accent text-xl '}  `} href={"/"}>
        <span className={` italic text-whiteText `}>aero</span>swim
      </Link >
    </>
  );
}
