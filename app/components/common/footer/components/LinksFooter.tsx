import Link from "next/link";

export default function LinksFooter( {text, link}: {text: string, link: string} ){
      return(
            <Link href={link} className=" uppercase text-xs hover:text-accent "> {text} </Link>
      )
}