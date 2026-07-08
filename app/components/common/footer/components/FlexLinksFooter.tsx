import BadgeTitle from "../../layout/BadgeTitle";
import LinksFooter from "./LinksFooter";


export default function FlexLinksFooter() {

      const linkFooter = {
            footer: [
                  {
                        titulo: "CLUB",
                        enlaces: [
                              { text: "sobre nosotros", link: "/contact", target: ""  },
                              { text: "instalaciones", link: "/club", target: ""  },
                              { text: "equipo", link: "/timetables", target: ""  },
                        ],
                  },
                  {
                        titulo: "REDES",
                        enlaces: [
                              { text: "instagram", link: "https://instagram.com/", target: "_blank" },
                              { text: "strava", link: "https://strava.com/", target: "_blank" },
                              { text: "x/twitter", link: "https://x.com/", target: "_blank" },
                        ],
                  },
                  {
                        titulo: "LEGAL",
                        enlaces: [
                              { text: "privacidad", link: "/privacidad", target: "_blank"  },
                              { text: "términos", link: "/terminos", target: "_blank"  },
                              { text: "cookies", link: "/cookies", target: "_blank"  },
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
                                                <LinksFooter key={links.text} text={links.text} link={links.link} target={links.target} />
                                          ))
                                    }
                              </section>
                        </section>
                  ))}
            </section>
      )
}