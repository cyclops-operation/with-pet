import FindForm from './src/ui/find-form'
import Header from './src/ui/header'
import Navigation from './src/ui/navigation'
import { FindWrapper } from './index.style'

const Find = () => {
  return (
    <FindWrapper>
      <Navigation />
      <Header />
      <FindForm />
    </FindWrapper>
  )
}

export default Find
