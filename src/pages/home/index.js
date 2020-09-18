import React from 'react'

import Header from '@/components/Header'
import Button from '@/components/Button'

const Index = () => {
  return (
    <div>
      <Header title='home page' />
      <Button onClick={() => window.location.reload()}>
        点击刷新页面
      </Button>
    </div>
  )
}

export default Index