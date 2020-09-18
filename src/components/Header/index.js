import React, { useEffect } from 'react'

import css from './index.module.scss'

const Index = ({
  title
}) => {
  
  useEffect(() => {

  }, [])

  return (
    <h3 className={css.header}>
      {title}
    </h3>
  )
}

export default Index