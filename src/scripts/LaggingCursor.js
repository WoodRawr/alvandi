import React, {Component} from 'react';
import style from '../App.css';

class LaggingCursor extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){

        var cursors = document.getElementsByClassName("laggingCursor");
        
        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;

        document.addEventListener('mousemove',(e)=>{
            mouseX = e.pageX - 30;
            mouseY = e.pageY - 30; 
        })

        setInterval(function(){
            xp += ((mouseX - xp)/6);
            yp += ((mouseY - yp)/6);

            cursors[0].style.left = xp+"px";
            cursors[0].style.top  = yp+"px";
            cursors[0].style.transform = "translate(-"+ xp +",-"+ yp +")";
          }, 15);
    }

    render() {
        return(

        <div className="laggingCursor">
            
        </div>

        );
    }
}

export default LaggingCursor;