import React from "react";
import Links from "./Links";
import RenderP from "./RenderP";



function About(props) {

  // function EpmtyBioRender(){
  //   return(
  //     <div id="about">
  //       <h2>About Me</h2>
  //       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //       <Links github ={props.links.github} linkedin ={props.links.linkedin}/>
  //       {/* add your <Links /> component here */}
  //     </div>
  //   )
  // }
  
  // function BioRender(){
  //   return(
  //     <div id="about">
  //     <h2>About Me</h2>
  //     <p>{props.bio}</p>
  //     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  //     <Links github ={props.links.github} linkedin ={props.links.linkedin}/>
  //     {/* add your <Links /> component here */}
  //   </div>
  
  //   )
  
  // }



    // if (props.bio===""){
    //   return(
    //     <EpmtyBioRender links = {user.links} />
    //   )
    // } else{
    //   return(
    //     <BioRender bio = {user.bio} links = {user.links}/>
    //   )
    // }





  // console.log("props",props);





  return (
    <div id="about">
      <h2>About Me</h2>
      <RenderP bio= {props.bio}/>
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github ={props.links.github} linkedin ={props.links.linkedin}/>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
