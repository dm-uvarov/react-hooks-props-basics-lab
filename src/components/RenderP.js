import React from "react";


function RenderP(props){
    return(
       (props.bio === undefined) | 
       (props.bio === "") | (props.bio === null) ? <></> : <><p>{props.bio}</p> </>
    )
}

export default RenderP;