import React from 'react'

const image = ({img, img2}) => {
  return (
    <div>
      <img className="object-cover w-full h-auto hidden sm:block"
      src={img}
      alt=""
      />
      <img className="object-cover w-full h-auto sm:hidden"
      src={img2}
      alt=""
      />
    </div>
  )
}

export default image