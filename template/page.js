const templateJs = () => {
  return `
import React, { memo, useState, useEffect } from 'react'
import css from './index.scss'

export default memo((props) => {

  const [state, setState] = useState(false)
  
  useEffect(() => {
    //do someting
  }, [])
  
  return (
    <div className={css.box}></div>
  )
})
`
}

module.exports = templateJs
