import FilterBtns from "./components/FilterBtns";
import HeadResults from "./components/HeadResults";
import GalleryResults from "./components/GalleyResults";


export default function Results() {



      return (
            <section className=" pt-40 w-full m-auto px-6 xl:px-6 max-w-350  ">
                  <HeadResults />
                  <FilterBtns />
                  <GalleryResults />
            </section>
      )
}
