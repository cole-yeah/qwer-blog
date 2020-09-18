import React, { useEffect } from 'react'

import css from './index.module.scss'

const Index = ({
  icon,
  onClick,
  children,
}) => {
  
  useEffect(() => {

  }, [])

  return (
    <div 
      className={css.btn}
      onClick={onClick}>
      
      <div 
        className={css.icon}
        style={{
          display: icon ? 'block':'none'
        }}
      >{icon || '3'}</div>
      {
        children
      }
    </div>
  )
}

export default Index