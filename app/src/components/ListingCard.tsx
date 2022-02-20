import React from 'react'

import { Typography, CardContent, CardActions, Button, Box, Card, Paper } from '@mui/material';

export default function ListingCard({ data }) {

   const card = (
      <React.Fragment>
         <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               {data?.address}
            </Typography>
            <img src={'./assets/mockimg.png'} />
         </CardContent>
      </React.Fragment>
   );

   function OutlinedCard() {
      return (
         <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
         </Box>
      );
   }
   return (
      <div>
         <OutlinedCard />
      </div>
   )
}
