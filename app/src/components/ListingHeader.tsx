import React from 'react'

export default function ListingHeader({ data }) {
   data.zip = '91769'
   return (
      <div className='listingheader'>
         <h1> {data.address} </h1>
         <h3> {data.city}, {data.state} {data.zip} </h3>
      </div>
   )
}
