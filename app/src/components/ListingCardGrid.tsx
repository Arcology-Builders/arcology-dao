import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material'
import ListingCard from './ListingCard'
import { margin } from '@mui/system';
import { Router } from 'next/router';
import { useRouter } from 'next/router';

export default function ListingCardGrid({ data }) {
   const router = useRouter();

   const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
   }));

   return (
      <div>
         <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
            {data.map((dat: any) => (
               <>
                  <Grid item xs={4}>
                     <Item onClick={() => { router.push(`/${dat?.id}`) }}>
                        <ListingCard data={dat} />
                     </Item>
                  </Grid>
               </>
            ))}
         </Grid>
      </div>
   )
}
