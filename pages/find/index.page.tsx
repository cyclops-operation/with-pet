import { useGetCityQuery } from '~/api/queries'

import FindForm from './src/ui/find-form'
import Header from './src/ui/header'
import Navigation from './src/ui/navigation'
import { FindWrapper } from './index.style'

const Find = () => {
  const { data } = useGetCityQuery({ params: { numOfRows: 3, pageNo: 1 } })

  console.log(data)

  return (
    <FindWrapper>
      <Navigation />
      <Header />
      <FindForm />
    </FindWrapper>
  )
}

export default Find
