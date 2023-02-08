import React from "react";
import Nav from "./Nav";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {whoweserve} from "./data";
import './whoweserve.css'
import Footer from './Footer'
import ConstructionFooter from "../construction/ConstructionFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
// export default function Whoweserve() {
//   return (
//     <div>
//         <Nav />
//       <div></div>
//     </div>
//   )
// }

export default function RowAndColumnSpacing() {
  return (
    <main>
      <Nav />
      <div>
        <h2 className='projectss'>
          Those We Serve
        </h2>
        </div>
      <div className="completeblue" style={{marginTop:'5rem', marginBottom:'10rem'}}>
        <Box
        className="boxx"
          sx={{ width: "80%", background: "#009DB9", px: 5, py: 4, mx: "auto" }}
        >
          <Grid
            sx={{ width: "100%", mx: "auto" }}
            alignItems="center"
            justify="center"
            container
            rowSpacing={4}
            columnSpacing={{ xs: 2, sm: 4, md: 6 }}
          >
           
            {whoweserve.map((item) => (
              <Grid
                key={item.id}
                item
                xs={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Card sx={{ width: '100%' }}>
                 
                  <CardContent className="caard">
                    <Typography sx={{fontSize:100}} color={item.color} classname='dtypo' gutterBottom variant="h5" component="div">
                        <span className="dlogo">{item.logo}</span>
                    
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <span className="dtext"> {item.Text}</span>
                     
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Footer />
    </main>
  );
}

// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
