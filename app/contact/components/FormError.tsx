
export default function FormError( {error}: {error: string} ){

    
      return(
            <p className={` absolute -bottom-5 font-jetBrainsMono text-xs text-accent `}> {error} </p>
      )
}