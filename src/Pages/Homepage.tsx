import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const backgroundImage =
  "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${backgroundImage})`,
      bacgrounRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '100vh'
    },
  }))
  



function Homepage() {

  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <div className="text-center">
        <h1 style={PrincipalText}>CREATIVE SOLUTIONS</h1>
        <p style={PrincipalParragraph}>Created by Nicolás Marsili</p>
        
        <Link to="/">
        <Button variant="light" style={ButtonLearnMore}>Learn More <ArrowForwardIosIcon style={{fontSize: '17px'}} /> </Button>
        </Link>

      </div>
    </div>

    <div>
      <h3>Hello</h3>
    </div>
    </>
  )
}

export default Homepage;


const PrincipalText: CSSProperties = {
  color: '#376B0C',
  paddingTop: '180px',
  fontSize: '65px',
  fontFamily: "Myriad Pro Regular",
},
PrincipalParragraph: CSSProperties ={
  fontSize: '16px',
  color: 'grey',
  marginTop: '15px',
  fontStyle: "oblique",
},
ButtonLearnMore: CSSProperties = {
  marginTop: '75px',
  width: '175px',
  height: '60px',
  fontSize: '20px',
  fontStyle: "oblique",
}
