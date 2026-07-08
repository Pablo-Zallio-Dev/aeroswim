import FormContact from "./components/FormContact";
import InfoContact from "./components/InfoContact";


export default function Contact() {
  return (
      <section className=" flex flex-col lg:flex-row gap-20 pt-40 mb-20 w-full m-auto px-6 xl:px-6 max-w-350 ">
            <InfoContact />
            <FormContact />
      </section>
  )
}
