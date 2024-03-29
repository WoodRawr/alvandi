import React, { Component } from 'react';
import style from '../App.css';

class AccordionGallery extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg"/>
                        <div class="card__head">Plotting Cat</div>
                </div>
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg"/>
                        <div class="card__head">Angry Cat</div>
                </div>
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG"/>
                        <div class="card__head">Curious Cat</div>
                </div>
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg"/>
                        <div class="card__head">Prowling Cat</div>
                </div>
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg"/>
                        <div class="card__head">Sleepy Cat</div>
                </div>
            </div>
        );
    }

}

export default AccordionGallery;