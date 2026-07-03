
export default function BadgeInfoHome( {title, info}: {title:string, info: string} ) {
      return (
            <section className=" flex flex-col items-center uppercase font-jetBrainsMono  text-xs ">
                  <h3 className=" text-grayText ">{title}</h3>
                  <h3 className=" text-whiteText "> {info} </h3>
            </section>
      )
}