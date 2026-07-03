import Paragraph from "../../components/common/layout/Paragraph";
import SubtitlePage from "../../components/common/layout/SubtitlePage";
import Titles from "../../components/common/layout/Titles";
import CardModulsHome from "./CardModulsHome";
import imagePool from '@/public/images/club-pool-CD2MAIkC.webp'
import imageEquipament from '@/public/images/club-equipment-D6GBcV9a.webp'
import imageCoach from '@/public/images/club-coach-BAYkhZYY.webp'


export default function SectionModuls() {

      const infoCards = [
            {
                  image: imagePool,
                  date: '01/03',
                  title: 'el club',
                  text: 'Infraestructura, equipo y filosofía técnica.',
                  link: '/club'
            },
            {
                  image: imageEquipament,
                  date: '02/03',
                  title: 'horarios',
                  text: 'Sesiones por categoría y cupo en tiempo real.',
                  link: '/timertable'
            },
            {
                  image: imageCoach,
                  date: '03/03',
                  title: 'resultados',
                  text: 'Marcas y medallas de la temporada vigente.',
                  link: '/results'
            },
      ]


      return (
            <section className="">
                  <section className=" flex flex-col md:flex-row md:justify-between gap-6 ">
                        <section className=" flex flex-col gap-4 w-full md:w-1/2 ">
                              <SubtitlePage text={" [ nav_index ] "} />
                              <Titles text={"explora el sistema"} titleSize={"large"} />
                        </section>
                        <section className=" w-full md:w-1/4 ">
                              <Paragraph text={"Cada módulo del club opera de forma independiente. Selecciona una ruta para profundizar."} textSize={"medium"} />
                        </section>
                  </section>
                  <section className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14 justify-items-center my-10 ">
                        {
                              infoCards.map((card) => (
                                    <CardModulsHome key={card.title} date={card.date} title={card.title} text={card.text} image={card.image} link={card.link} />
                              ))
                        }
                  </section>
            </section>
      )
}


/* 


date={""} title={""} text={""} image={""}*/


