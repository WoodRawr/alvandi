import React, {Component} from 'react';
import style from '../App.css';

class GallerySample extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){

    }

    render() {
        return(

        <div>
            <div class="gallery">
                  <div class="gallery__column">
                    {/* <a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Jessica Felicio</figcaption>
                      </figure>
                    </a> */}
                    <div className="h-20">

                    </div>

                    <a href="https://unsplash.com/@oladimeg" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
                      </figure>
                    </a>

                    <a href="https://unsplash.com/@a2eorigins" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Alex Perez</figcaption>
                      </figure>
                    </a>

                  </div>

                  <div class="gallery__column">
                    <a href="https://unsplash.com/@noahbuscher" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/AR7aumwKr2s/300x300" alt="Portrait by Noah Buscher" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Noah Buscher</figcaption>
                      </figure>
                    </a>

                    <a href="https://unsplash.com/@von_co" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Ivana Cajina</figcaption>
                      </figure>
                    </a>

                    <a href="https://unsplash.com/@samburriss" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/tV_1sC603zA/300x500" alt="Portrait by Sam Burriss" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Sam Burriss</figcaption>
                      </figure>
                    </a>
                  </div>

                  <div class="gallery__column">
                    <a href="https://unsplash.com/@marilezhava" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Mari Lezhava</figcaption>
                      </figure>
                    </a>

                    <a href="https://unsplash.com/@ethanhaddox" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Ethan Haddox</figcaption>
                      </figure>
                    </a>

                    <a href="https://unsplash.com/@mr_geshani" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/2JH8d3ChNec/300x300" alt="Portrait by Amir Geshani" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Amir Geshani</figcaption>
                      </figure>
                    </a>
                  </div>

                  <div class="gallery__column">

                    <a href="https://unsplash.com/@majestical_jasmin" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Jasmin Chew</figcaption>
                      </figure>
                    </a>

                    <a href="https://unsplash.com/@dimadallacqua" target="_blank" class="gallery__link">
                      <figure class="gallery__thumb">
                        <img src="https://source.unsplash.com/XZkEhowjx8k/300x500" alt="Portrait by Dima DallAcqua" class="gallery__image"/>
                        <figcaption class ="gallery__caption">Portrait by Dima DallAcqua</figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
        </div>

        );
    }
}

export default GallerySample;