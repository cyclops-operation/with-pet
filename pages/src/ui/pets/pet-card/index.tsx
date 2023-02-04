import { HTMLAttributes } from 'react'

import { PetCardWrapper } from './index.style'

interface PetCardProps extends HTMLAttributes<HTMLDivElement> {}

const PetCard = () => {
  return <PetCardWrapper></PetCardWrapper>
}

export default PetCard
