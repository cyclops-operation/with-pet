import { ReactNode } from 'react'

export interface HintTextProps extends HTMLParagraphElement {
  text?: ReactNode
}

const HintText = ({ text = '' }: HintTextProps) => {
  return typeof text === 'string' ? <p>{text}</p> : text
}

export default HintText
