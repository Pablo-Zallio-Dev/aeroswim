import Image, { StaticImageData } from "next/image";
import BadgeTitle from "../../components/common/layout/BadgeTitle";
import Titles from "../../components/common/layout/Titles";
import Paragraph from "../../components/common/layout/Paragraph";
import Link from "next/link";


export default function CardModulsHome({ date, title, text, image, link }: { date: string, title: string, text: string, image: string | StaticImageData, link: string }) {
      return (
            <Link className=" w-full " href={link}>
                  <section className=" relative w-full h-100 lg:h-120 border border-borders overflow-hidden ">
                        <Image
                              src={image}
                              alt={title}
                              fill
                              sizes="
    (max-width: 639px) 100vw,
    (max-width: 1279px) 50vw,
    33vw
  "
                              className="object-cover hover:scale-105 transition-all duration-500"
                        />

                  </section>
                  <section className=" flex flex-col gap-1.5 mt-4 ">
                        <BadgeTitle text={date} accent />
                        <Titles text={title} titleSize={"medium"} />
                        <Paragraph text={text} textSize={"small"} />
                  </section>
            </Link>
      )
}


/* 

 <Image src={image} alt={"Imagenes sobre natacion en la pagina principal"} fill className=" hidden lg:block object-cover hover:scale-105 transition-all duration-500 " />
                        <Image src={imageMobile} alt={"Imagenes sobre natacion en la pagina principal"} fill className=" lg:hidden object-cover hover:scale-105 transition-all duration-500 " />



*/