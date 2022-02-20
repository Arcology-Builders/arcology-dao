import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid, Paper, Button, Divider, TextField, Stack, InputAdornment } from '@mui/material'

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { AlignVerticalCenter, VerticalAlignCenter } from '@mui/icons-material';


export default function ListingInfo({ data }) {
   const percentage = data.price / data.raised

   const [amount, setAmount] = React.useState(0);

   const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      height: '100%',
      color: theme.palette.text.secondary,
   }));

   const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
      height: 75,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
         backgroundColor: theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.grey[500],
      },
      [`& .${linearProgressClasses.bar}`]: {
         borderRadius: 5,
         backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : '#308fe8',
      },
   }));

   console.log(amount);

   function handleChange(e) {
      console.log(e.target.type)
      console.log(e)
      if (e.target.type != 'number') {
         e.preventDefault()
      } else {
         setAmount(e.target.value)
      }
   }

   return (
      <div>
         <Grid container spacing={2}
            alignItems="center"
            justifyContent="center"
            minHeight='10vh'>
            <Grid item xs={4}>
               <Item>
                  <img src={'./assets/mockimg.png'} />
               </Item>
            </Grid>
            <Grid item xs={6} minHeight='100%'>
               <Item className='listinginfoheader' >
                  <h1>${data.raised} / ${data.price}</h1>
                  <h2>{percentage.toFixed()}%</h2>
                  <p>{data.co_owners} co-owners have invested.</p>
                  <BorderLinearProgress variant="determinate" value={percentage}>
                     <p>{percentage.toFixed()}%</p>
                  </BorderLinearProgress>
                  <p>{data.remaining_time} days left.</p>
               </Item>
            </Grid>
            <Grid item xs={2}>
               <Item>
                  <Button variant='outlined' color='secondary' sx={{ marginTop: '1rem' }}>
                     View Budget
                  </Button>
                  <Divider sx={{ margin: '2.5rem auto' }} />
                  <Button variant='contained' sx={{ marginBottom: '1rem' }} color='primary'>
                     Invest
                  </Button>
                  <TextField id="outlined-basic" variant="outlined" value={amount} autoFocus InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} type="number" onChange={handleChange} />
               </Item>
            </Grid>
         </Grid>
      </div>
   )
}
