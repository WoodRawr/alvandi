import React, {Component} from 'react';
import style from '../App.css';

class Eye extends React.Component {

    componentDidMount(){

        var balls = document.getElementsByClassName("ball");

        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;

        document.addEventListener('mousemove' , (e) => {
            mouseX = e.clientX * 100 / window.innerWidth;
            mouseY = e.clientY * 100 / window.innerHeight;
            // balls[0].style.left = this.mouseX;
            // balls[0].style.top = this.mouseY;
            // balls[0].style.transform = "translate(-"+ this.mouseX +",-"+ this.mouseY +")";

        });

        setInterval(function(){
            xp += ((mouseX - xp)/10);
            yp += ((mouseY - yp)/10);

            balls[0].style.left = xp*2+"px";
            balls[0].style.top  = yp+"px";
            balls[0].style.transform = "translate(-"+ xp +",-"+ yp +")";
          }, 20);

    }

    render() {
        return(
            <div className=" absolute w-screen h-screen">
                    <div className="eye top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                        <div className="ball">
                        </div>
                    </div>
            </div>
        );
    }
}

export default Eye;