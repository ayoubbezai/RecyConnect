import React from 'react'

const CategoriesSmallCard = ({icon, title}) => {
  return (
    <div className="flex gap-5 mt-5">
    <div>{icon}</div>
    <div>{title}</div>
  </div>
  )
}

export default CategoriesSmallCard
