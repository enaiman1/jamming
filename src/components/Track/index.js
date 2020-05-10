import React,{ Component } from "react";
import './track.css'

class Track extends Component{
    renderAction(){
// if (isRemoval === true){
//     return <button>-</button>
// } else{
//     return <button>+</button>
// }
    }

    render(){
        return(
            <div className="Track">
            <div className="Track-information">
              {/* <h3><!-- track name will go here --></h3> */}
              {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
            </div>
        <button className="Track-action">{this.renderAction}</button>
          </div>  
        )
    }
}

export default Track;