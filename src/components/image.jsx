import React from 'react'

const image = ({img}) => {
  return (
    <div>
      <img className="object-cover w-full h-auto"
      src={img}
      alt=""
      />
    </div>
  )
}

export default image