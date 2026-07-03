
export type TitlesSize = 'small' | 'medium' | 'large'

const textSizeTitles: Record<TitlesSize, string> = {
      small: 'text-xl ',
      medium: 'text-base',
      large: 'text-2xl sm:text-5xl '
}

export type TitlesProps = {
      text: string,
      titleSize: TitlesSize
}

export default function Titles( {text, titleSize }: TitlesProps ){
      return(
            <h2 className={`  italic uppercase font-black font-inter ${textSizeTitles[titleSize]}  `}> {text} </h2>
      )
}