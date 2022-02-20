import React from 'react'
import { useRouter } from 'next/router'
import MOCK_DATA from '../MOCK_DATA.json'
import ListingHeader from '../src/components/ListingHeader';
import ListingInfo from '../src/components/ListingInfo';
import ListingDetails from '../src/components/ListingDetails';

export default function Listing() {
   const router = useRouter();
   const rid = router.query;
   const id: number = +rid?.id;
   let data;
   MOCK_DATA.some((d) => {
      if (d.id === id) {
         data = d;
      }
   });
   console.log('zzzz', data)
   return (
      <main>
         <ListingHeader data={data} />
         <ListingInfo data={data} />
         <ListingDetails data={data} />
      </main>
   )
}
