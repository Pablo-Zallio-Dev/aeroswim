import Paragraph from "../../components/common/layout/Paragraph";
import SubtitlePage from "../../components/common/layout/SubtitlePage";
import Titles from "../../components/common/layout/Titles";
import imagePool from '@/public/images/club-pool-CD2MAIkC.webp'
import imageEquipament from '@/public/images/club-equipment-D6GBcV9a.webp'
import imageCoach from '@/public/images/club-coach-BAYkhZYY.webp'
import CardModulsClub from "./CardsModulsClub";


export default function ModulsClub() {

      const infoCards = [
            {
                  image: imagePool,
                  date: '01/03',
                  title: 'tecnologia de flujo',
            },
            {
                  image: imageEquipament,
                  date: '02/03',
                  title: 'Análisis Biomecánico',
            },
            {
                  image: imageCoach,
                  date: '03/03',
                  title: 'Staff Certificado',
            },
      ]


      return (
            <section className="">
                  <section className=" flex flex-col md:flex-row md:justify-between gap-6 ">
                        <section className=" flex flex-col gap-4 w-full md:w-1/2 ">
                              <SubtitlePage text={" [ data_log: el_club ] "} />
                              <Titles text={"Infraestructura de Clase Mundial"} titleSize={"large"} />
                        </section>
                        <section className=" w-full md:w-1/4 ">
                              <Paragraph text={"Desde 1994 forjamos campeones combinando análisis de video, biomecánica acuática y metodologías de natación nórdica. Salud, técnica y comunidad bajo el agua."} textSize={"medium"} />
                        </section>
                  </section>
                  <section className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-14 justify-items-center my-10 ">
                        {
                              infoCards.map((card) => (
                                    <CardModulsClub key={card.title} date={card.date} title={card.title} image={card.image}  />
                              ))
                        }
                  </section>
            </section>
      )
}
