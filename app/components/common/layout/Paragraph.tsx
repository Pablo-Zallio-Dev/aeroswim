
export type ParagraphSize = 'small' | 'medium' | 'large'

const textSizeParagraph: Record<ParagraphSize, string> = {
      small: ' text-xs ',
      medium: ' text-base ',
      large: ' text-base sm:text-lg '
}

export type ParagraphProps = {
      text: string,
      textSize: ParagraphSize
}

export default function Paragraph( {text, textSize}: ParagraphProps ){
      return(
            <p className={` font-inter text-grayText ${ textSizeParagraph[textSize] } `}> {text} </p>
      )
}