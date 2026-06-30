import BtnNav from "./components/BtnNav"

export default function Header() {

      const links = [
                  {
                        number: '[ 01 ]',
                        text: 'inicio',
                        link: '/'
                  },
                  {
                        number: '[ 02 ]',
                        text: 'el club',
                        link: '/club'
                  }
            ]
      

            
  return (
      <section className="">
            {
                        links.map((link) => (
                              <BtnNav key={link.text} number={link.number} text={link.text} link={link.link} />
                        ))
                  }
      </section>
  )
}
