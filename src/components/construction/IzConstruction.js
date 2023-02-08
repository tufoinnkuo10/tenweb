import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Logo from "../../resources/IZ-Logo.png";
import { Box } from "@mui/system";
import ConstructionA from "../../resources/constructionC.jpg";
import ConstructionFooter from "./ConstructionFooter";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import AutorenewIcon from "@mui/icons-material/Autorenew";
import HomeIcon from "@mui/icons-material/Home";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Construction.css";
import Footer from '../About/Footer'

const navItems = ["Going Live"];

export default function IzConstruction() {
//   let navigate = useNavigate();
//   const routeChange = () => {
    // navigate("/live");
//   };
  return (
    <div>
      {/* <AppBar
        position="fixed"
        color="default"
        sx={{ borderBottom: "1px solid #00d8ff" }}
      >
 0  
      </AppBar> */}
      <br />
      <br />
      <Box sx={{ mt: 5 }}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            md
            lg
            xl
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <Typography variant="h2" component="h4">
              {" "}
              WE ARE UNDER CONSTRUCTION{" "}
            </Typography>
          </Grid>
          <Grid
            item
            xs
            sm
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          >
            <Typography variant="h4" component="h6">
              {" "}
              WE ARE UNDER CONSTRUCTION{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            component="img"
            sx={{
              height: 480,
              width: 730,
              maxHeight: { xs: 230, sm: 280, md: 480 },
              maxWidth: { xs: 370, sm: 420, md: 700 },
            }}
            alt="IZSoftwares Under Construction"
            src={ConstructionA}
          />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}
