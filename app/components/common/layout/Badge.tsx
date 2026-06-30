
export default function Badge( {text} : { text: string } ){
      return(
            <section className=" w-max py-1 px-3 border border-accent ">
                  <p className=" uppercase font-jetBrainsMono tracking-widest text-[10px] text-accent "> {text} </p>
            </section>
      )
}