import React from 'react'
import { styled } from '@mui/material/styles';
import { Grid, Paper, Divider, Box } from '@mui/material'

export default function ListingDetails({ data }) {
   data.year_built = '1915'
   data.type = 'Single Family'
   data.stories = '2'
   data.bedrooms = '3'
   data.bathrooms = '1'

   const [details, setDetails] = React.useState([
      'detatched garage',
      'gas broiler',
      'radiator heat',
      'attic & basement',
      'brick exterior',
      'plumming',
      'electrical',
      'HVAC',
   ])

   const tl = [
      {
         title: 'Considered',
         value: data.considered
      },
      {
         title: 'Acquired',
         value: data.acquired
      },
      {
         title: 'Renovating',
         value: data.renovating
      },
      {
         title: 'Selling',
         value: data.selling
      }
   ]

   const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      height: '100%',
      color: theme.palette.text.secondary,
   }));

   const Timeline = () => {
      return (
         <Box
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-evenly',
               width: '100%',
               height: 'auto',
               bgcolor: 'background.paper',
               color: 'text.secondary',
            }}
         >
            {tl.map((i, index) => (
               <Grid item xs={3} >
                  <Divider orientation="vertical" />
                  <h3>{i.title}</h3>
                  <br />
                  <h3>{i.value}</h3>
               </Grid>
            ))}
         </Box>
      )
   }

   return (
      <div>
         <Grid container spacing={2}
            minHeight='10vh'
            marginTop='0.25rem'>
            <Grid item xs={4}
               alignItems="center"
               justifyContent="center">
               <Item>
                  <Grid container spacing={1}>
                     <Grid item xs={5.95} textAlign="left">
                        <p>Year Built: {data.year_built}</p> <br />
                        <p>Type: {data.type}</p> <br />
                        <p>Stories: {data.stories}</p> <br />
                        <p>Bedrooms: {data.bedrooms}</p> <br />
                        <p>Bathrooms: {data.bathrooms}</p> <br />
                     </Grid>
                     <Divider orientation="vertical" variant="middle" flexItem />
                     <Grid item xs={5.95} textAlign="right">
                        {details.map((i) => (
                           <p>{i}</p>
                        ))}
                     </Grid>
                  </Grid>
               </Item>
            </Grid>
            <Grid item xs={8} >
               <Item>
                  <Grid container spacing={1} >
                     <Timeline />
                  </Grid>
               </Item>
            </Grid>
         </Grid>

      </div>
   )
}
