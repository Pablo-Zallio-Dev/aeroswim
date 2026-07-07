
export default function BtnFilter( {title, isActive, onSelect}: {title:string, isActive: boolean, onSelect: () => void} ){

    
      return(
            <button className={` py-2 px-3 uppercase border ${ isActive ? 'border-accent' :'border-borders' } hover:border-whiteText bg-transparent font-jetBrainsMono text-[10px] ${ isActive ? 'text-accent' :'text-grayText' } hover:text-whiteText transition-colors duration-200 `} onClick={onSelect} > {title} </button>
      )
}