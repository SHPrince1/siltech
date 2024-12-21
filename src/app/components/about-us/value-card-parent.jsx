import React from 'react'
import ValuesCard from '../about-us/values-card'
import style from '../about-us/styles/value-card-parent.module.scss'
const ValueCardParent = () => {
  return (
    <div>
        <div className={style.container}>
        <div className={style.header}><h4>Our Core Values</h4></div>
            <div className={style.containerContent}>

            <ValuesCard />
            <ValuesCard />
            <ValuesCard />
            <ValuesCard />
            <ValuesCard />
            </div>
        </div>
    </div>
  )
}

export default ValueCardParent