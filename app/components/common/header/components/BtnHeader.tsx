import Link from "next/link";

export default function BtnHeader({
  text,
  mobile,
  contact,
}: {
  text: string;
  mobile?: boolean;
  contact?: boolean;
}) {
  return (
    <Link href={contact ? "/contact" : " /results "}>
      {" "}
      {/* cambiaremos results por la interfaz de sesion */}
      <button
        className={` 
                  ${mobile ? "w-full" : " w-max "}            
                  py-2 px-4 
                  ${contact ? "bg-accentAlert hover:bg-accentAlert/90" : " hover:border-accent hover:text-accent "}
                  border border-borders 
                  uppercase italic font-inter font-black 
                  text-xs tracking-tighter 
                  transition-colors duration-150 `}
      >
        {text}
      </button>
    </Link>
  );
}
