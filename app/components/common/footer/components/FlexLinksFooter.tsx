import BadgeTitle from "../../layout/BadgeTitle";
import LinksFooter from "./LinksFooter";


export default function FlexLinksFooter() {

      const linkFooter = {
            footer: [
                  {
                        titulo: "CLUB",
                        enlaces: [
                              { text: "sobre nosotros", link: "/sobre-nosotros" },
                              { text: "instalaciones", link: "/instalaciones" },
                              { text: "equipo", link: "/equipo" },
                        ],
                  },
                  {
                        titulo: "REDES",
                        enlaces: [
                              { text: "instagram", link: "https://instagram.com/" },
                              { text: "strava", link: "https://strava.com/" },
                              { text: "x/twitter", link: "https://x.com/" },
                        ],
                  },
                  {
                        titulo: "LEGAL",
                        enlaces: [
                              { text: "privacidad", link: "/privacidad" },
                              { text: "términos", link: "/terminos" },
                              { text: "cookies", link: "/cookies" },
                        ],
                  },
            ],
      };
      return (
            <section className=" flex flex-wrap gap-12 ">
                  {linkFooter.footer.map((link) => (
                        <section key={link.titulo} className="  ">
                              <BadgeTitle accent text={link.titulo} />
                              <section className=" flex flex-col gap-1 pt-1.5 ">
                                    {
                                          link.enlaces.map((links) => (
                                                <LinksFooter key={links.text} text={links.text} link={links.link} />
                                          ))
                                    }
                              </section>
                        </section>
                  ))}
            </section>
      )
}