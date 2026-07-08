import Image, { StaticImageData } from "next/image";
import BadgeTitle from "../../components/common/layout/BadgeTitle";
import Titles from "../../components/common/layout/Titles";
import Paragraph from "../../components/common/layout/Paragraph";


export default function CardModulsClub( {date, title, text, image, }: {date:string, title:string, text?:string, image:string | StaticImageData } ){
      return(
            <section className=" w-full ">
                  <section className=" relative w-full h-100 lg:h-120 border border-borders overflow-hidden ">
                        <Image src={image} alt={'Imagenes sobre el club'} fill className="  object-cover hover:scale-105 transition-all duration-500 "/>
                  </section>
                  <section className=" flex flex-col gap-1.5 mt-4 ">
                        <BadgeTitle text={date} accent />
                        <Titles text={title} titleSize={"medium"} />
                        <Paragraph text={text} textSize={"small"} />
                  </section>
            </section>
      )
}
