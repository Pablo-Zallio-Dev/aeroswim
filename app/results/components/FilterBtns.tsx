import FilterCategory from "./FilterCategory";
import FilterSeason from "./FilterSeason";

export default function FilterBtns(){
      return(
            <>
            <section className=" flex flex-wrap justify-around gap-6 p-6 mb-10 bg-backgroundSecondary border border-borders ">
                  <FilterCategory />
                  <FilterSeason />
            </section>
            </>
      )
}