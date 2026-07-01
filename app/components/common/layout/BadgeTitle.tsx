
export default function BadgeTitle( {accent, text}: { accent?: boolean, text: string} ){
      return(
            <p className={` uppercase font-jetBrainsMono text-[10px] ${ accent ?'text-accent' :'text-grayText' } `}> {text} </p>
      )
}