import { useEffect } from 'react'

import { API } from '~/common/apis'
import { API_DOMAIN, API_ENCODE_KEY } from '~/common/env'

import FindForm from './src/ui/find-form'
import Header from './src/ui/header'
import Navigation from './src/ui/navigation'
import { FindWrapper } from './index.style'

const Find = () => {
  const fetch = async () => {
    const { data } = await API.get(
      `${API_DOMAIN}/sido?serviceKey=${API_ENCODE_KEY}&numOfRows=3&pageNo=1&_type=json`
    )
    console.log(data)
    return data
  }

  useEffect(() => {
    fetch()
  }, [])
  return (
    <FindWrapper>
      <Navigation />
      <Header />
      <FindForm />
    </FindWrapper>
  )
}

export default Find
