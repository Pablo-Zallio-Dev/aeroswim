export default function Logo( {light}: {light?: boolean} ) {
  return (
    <>
      <h2 className={` uppercase tracking-tighter font-black font-inter ${ light ?' text-whiteText italic text-base ' : ' text-accent text-xl ' }  `}>
        <span className={` italic text-whiteText `}>aero</span>swim
      </h2>
    </>
  );
}
