import Link from "next/link";

export default function LinksFooter( {text, link, target}: {text: string, link: string, target?: string} ){
      return(
            <Link href={link} className=" uppercase text-xs hover:text-accent " target={target} > {text} </Link>
      )
}