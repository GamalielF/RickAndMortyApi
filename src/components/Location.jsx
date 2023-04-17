import React from 'react'

const Location = ({location}) => {
    
  return (
    <section>
        <h2 className='font-bold'>{location?.name}</h2>
        <ul>
            <li className='text-lg font-medium'> Type: {location?.type}</li>
             <li className='text-lg font-medium'> Dimension: {location?.dimension}</li>
              <li className='text-lg font-medium'> Population: {location?.residents.length}</li>
        </ul>
    </section>
  )
}

export default Location