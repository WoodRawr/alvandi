/*
Library Imports
*/
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { css } from "@emotion/react";
import React, { Component } from 'react';

/*
Media Imports
 */
import kazumi from './img/aboutMeImg.png'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import WRLOGO from './img/WRLogo.png'
import DOTS from './img/dots.jpg'

/*
Component Imports
*/
import ModelViewer from './scripts/ModelViewer';
import Eye from './scripts/Eye';
import LaggingCursor from './scripts/LaggingCursor'
import Signature from './scripts/Signature'
import YoutubeEmbed from './scripts/YoutubeEmbed';
import GallerySample from './scripts/GallerySample';

/*
Animation Imports
*/
import Zoom from 'react-reveal/Bounce';
import AccordionGallery from './scripts/AccordionGallery';

function App() {

  var screenHeight = window.screen.height;

  //Parallax States
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => { setOffsetY(window.pageYOffset); }

  const [transition, setTransition] = useState(document.getElementById("transition"));

  //Loading Screen Loading States
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    /*Loading Screen
    */
    //Set the next line to true to see the loading screen
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000)

    window.addEventListener("scroll", () => {

      const mainNavLinks = document.querySelectorAll(".dot");
      const mainSections = document.querySelectorAll(".slide");
      const stickyHeader = document.getElementById("stickyHeader");
      const transition = document.getElementById("transition");

      /* From top variable to show how far down the page is
      */
      let fromTop = window.scrollY;

      /*
      Sticky header blur
      */
      if (fromTop > 0) {
        if (!stickyHeader.classList.contains("active")) stickyHeader.classList.add("active");
      } else {
        stickyHeader.classList.remove("active");
      }

      /*
      Navigation scroll bar on the side
      */
      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if ((section.offsetTop <= fromTop + (screenHeight * 0.5))) {
          if (!link.classList.contains("active")) link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      /* Autograph Animation Trigger
      */
      const signaturePaths = document.querySelectorAll(".autographPath");
      const signature = document.querySelectorAll(".signature");
      let signatureOffsetTop = signature[0].getBoundingClientRect().top;

      if (signatureOffsetTop < screenHeight) {
        signaturePaths.forEach(path => {
          path.classList.add("animated");
        });
      } else if (signatureOffsetTop > screenHeight) {
        signaturePaths.forEach(path => {
          path.classList.remove("animated");
        })
      }

      //Parallax Handling
      handleScroll();

      //Flipping Words
      const spans = document.querySelectorAll('.word span');

      spans.forEach((span, idx) => {
        span.addEventListener('mouseenter', (e) => {
          e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
          e.target.classList.remove('active');
        });

        // Initial animation
        // setTimeout(() => {
        //   span.classList.add('active');
        // }, 150 * (idx + 1) + 300)
      });

    });

    let currentPos = window.pageYOffset;

    const update = () => {
      const skewElement = document.querySelector('.myPic');

      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.15;

      if (skewElement) {
        skewElement.style.transform = ` skewY(${speed}deg)`;
      }

      currentPos = newPos;

      requestAnimationFrame(update);
    }

    update();

  }, []);


  return (
    <div className="App relative">
      {
        loading ?

          <div>

            {/* Loading Screen */}
            <div className="loadingScreen">
              <ClimbingBoxLoader css={css`display: block;margin: 0 auto;border-color: red;`} size={25} color={"#123abc"} loading={loading} speedMultiplier={1} />
            </div>

          </div>

          :

          <div>

            <LaggingCursor />

            {/* Navigation Bar on the side */}
            <div className="h-full fixed flex flex-col z-50">

              {/* UPPER MARGIN */}
              <div className="h-full bg-transparent">
              </div>

              {/* MID SECTION */}
              <div className="navigationBar flex flex-col h-full transform text-white">

                <div className="flex flex-col h-full">
                  <a href="#home" class="dot active"></a>

                  <a href="#about" class="dot"></a>

                  <a href="#cat" class="dot"></a>

                  <a href="#duck" class="dot"></a>

                  {/* <a href="#bread" class="dot"></a>

                <a href="#platformer" class="dot"></a>

                <a href="#other" class="dot"></a> */}

                  <a href="#end" class="dot"></a>

                  {/* <a href="#footer" class="dot"></a> */}
                </div>

              </div>

              {/* LOWER MARGIN */}
              <div className="h-full bg-transparent">
              </div>

            </div>

            {/* Main Page */}
            <div className="" style={{ "user-select": "none" }}>

              <section id="home" className="h-screentext-white font-bold text-5xl overflow-hidden relative "
                style={{
                  backgroundImage: 'url(' + DOTS + ')',
                  backgroundSize: '10%'
                }}
              >
                <div id="stickyHeader" className="stickyHeader fixed w-full z-50 text-white text-sm flex flex-row p-4 h-20">
                  <div id="Logo" className="absolute right-1/2 transform translate-x-1/2 h-1/2">
                    <img src={WRLOGO} className="h-full" />
                  </div>
                  {/* <div className="h-full relative transform top-0 translate-y-1/2"> */}
                  <div className="absolute top-1/2 transform -translate-y-1/2">
                    "WOODRAWR.COM"
                  </div>
                  <div className="w-full">
                    {/* SPACER */}
                  </div>
                  <div className="flex flex-row text-white">
                    <a class="homenavBottom text-lg text-white" href="#home"> HOME </a>
                    <a class="homenavBottom text-lg text-white" href="#about"> ABOUT </a>
                    <a class="homenavBottom text-lg text-white" href="#cat"> PROJECTS </a>
                    <a class="homenavBottom text-lg text-white" href="#end"> OTHER </a>
                    <a class="homenavBottom text-lg text-white" href="#footer"> END </a>
                  </div>
                </div>

                <div id="HomeNavigation" className=" px-10 absolute h-full text-base font-thin top-1/2 text-white font-mono">
                  <div className="transform -translate-y-1/2 ">
                    <div id="FrontText" className=" text-3xl glitch" data-text="[PR0J3ct5]" style={{
                      "-webkit-text-stroke": "1px white",
                      "-webkit-text-fill-color": "white"
                    }}>
                      [PROJECTS]
                    </div>
                    <div>
                      <a class="homenav text-lg" href="#cat">
                        <span className="text-indigo-500">get</span><span className="text-yellow-500 font-semibold">(QUACK RUSH);</span>
                      </a>
                    </div>
                    <div>
                      <a class="homenav text-lg" href="#duck">
                        <span className="text-indigo-500">get</span><span className="text-yellow-500 font-semibold">(3D PLATFORMER);</span>
                      </a>
                    </div><div>
                      <a class="homenav text-lg" href="#cat">
                        <span className="text-indigo-500">get</span><span className="text-yellow-500 font-semibold">(CATBOXED!);</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div id="More" className="absolute bottom-0 right-1/2 transform translate-x-1/2 -translate-y-20 text-base text-white font-extralight opacity-50 font-mono">
                  <a href="#about" style={{
                    "-webkit-text-stroke": "0px white",
                    "-webkit-text-fill-color": "white"
                  }}>

                    <div class="center-con" className="center-con transform translate-y-5">
                      <div class="round">
                        <div id="cta">
                          <span class="arrow primera next "></span>
                          <span class="arrow segunda next "></span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div id="FrontText" className="absolute right-0 text-7xl top-1/2 transform -translate-y-1/2 -translate-x-1/3" style={{
                  "-webkit-text-stroke": "0px white",
                  "-webkit-text-fill-color": "white"
                }}>
                  <div className="animated-title">
                    <div className="text-top">
                      <div>
                        <span className=" font-mono font-thin text-2xl">HI! >> I'M >> </span>
                        <span>⠀
                        </span>
                        <div>
                          <div class="word flex flex-row" style={{
                            "-webkit-text-stroke": "1px white",
                            "-webkit-text-fill-color": "transparent"
                          }}>
                            <span className="glitch" data-text="@">@</span>
                            <span className="glitch" data-text="D">D</span>
                            <span className="glitch" data-text="Y">Y</span>
                            <span className="glitch" data-text="L">L</span>
                            <span className="glitch" data-text="4">A</span>
                            <span className="glitch" data-text="N">N</span>

                            <span className="glitch" data-text="A">A</span>
                            <span className="glitch" data-text="L">L</span>
                            <span className="glitch" data-text="V">V</span>
                            <span className="glitch" data-text="A">A</span>
                            <span className="glitch" data-text="N">N</span>
                            <span className="glitch" data-text="D">D</span>
                            <span className="glitch" data-text="1">I</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-bottom">
                      <div>
                        <div>
                          <div class="wordCarousel">
                            <div className="flex flex-row">
                              <ul class="flip4 font-mono font-thin">
                                <li>PROGRAMMING</li>
                                <li>DESIGN</li>
                                <li>GAMES</li>
                                <li>COOL STUFF</li>
                              </ul>
                              <div className=" bottom-0 transform -translate-y-1/2">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Eye /> */}

                <div id="ModelViewer" className="h-full">
                  <ModelViewer />
                </div>

              </section>

              <section id="about" className=" z-10 h-screen bg-gray-800 text-white font-bold text-2xl relative flex flex-row"
                style={{
                  backgroundImage: 'url(' + DOTS + ')',
                  backgroundSize: '10%'
                }}>
                <div className="w-full p-36">
                  <Zoom>
                  Unity C#
                  </Zoom>
                  <Zoom>
Javascript (React.js, which this website was built with!)</Zoom>
<Zoom>
C</Zoom>
<Zoom>
Swift + SwiftUI</Zoom>
<Zoom>Java (Spring, Maven, Cucumber)</Zoom>
<Zoom>
Blender
                  </Zoom>
                  <Zoom>
And of course, Python 😊
                  </Zoom>

                </div>
                <div className="w-full p-36">
                  <Zoom>

Dylan Alvandi, TUM Computer Science.
I love self development, team management, games development, design, and programming!
I’m currently a working student software engineer at ReliaTec GmbH.
                  </Zoom>
                </div>
                <img src={kazumi} className=" z-50 h-2/3 bottom-0 absolute left-1/2 transform -translate-x-1/2 myPic"></img>
              </section>

              <div id="slidingtext_projects" className="absolute z-50 -translate-y-1/2 transform text-3xl overflow-x-scroll max-h-32 whitespace-nowrap" style={{
                "-webkit-text-stroke": "1px white",
                "-webkit-text-fill-color": "transparent",
                "textOverflow": "clip",
                transform: `translate(${-((offsetY + 4 * screenHeight) * 0.8)}px , -220%)`,
                overflow: `hidden`
              }}>
                PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS  PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              </div>

              <div id="slidingtext_projects" className="absolute z-50 -translate-y-1/2 transform text-9xl overflow-x-scroll max-h-32 whitespace-nowrap bg-red-500" style={{
                "-webkit-text-stroke": "3px white",
                "-webkit-text-fill-color": "transparent",
                "textOverflow": "clip",
                transform: `translate(${((offsetY - 2 * screenHeight) * 0.3)}px , -50%) `,
                overflow: `hidden`
              }}>
                PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              </div>

              <div id="slidingtext_projects" className="absolute z-50 -translate-y-1/2 transform text-3xl overflow-x-scroll max-h-32 whitespace-nowrap" style={{
                "-webkit-text-stroke": "1px white",
                "-webkit-text-fill-color": "transparent",
                "textOverflow": "clip",
                transform: `translate(${-((offsetY + 4 * screenHeight) * 0.3)}px , 120%) `,
                overflow: `hidden`
              }}>
                PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS  PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
              </div>

              <section id="cat" className=" z-20 h-screen bg-gray-700 text-white font-bold text-5xl flexTextCenter pt-20 stacking-slide">

                <div id="leftSection" className="h-full w-1/2 relative z-10">

                  {/* <div className="absolute h-full" style={{ zIndex: '10' }}>
                    <img src={kazumi} className=" h-1/4" style={{ transform: `translateY(${-((offsetY - 2 * screenHeight) * 0.3)}px)` }}></img>
                  </div> */}

                  <div className="relative h-full w-full" style={{ zIndex: '20' }}>

                    <div id="top" className="h-1/2  flex flex-col p-20 px-36">
                      <div className="transform text-6xl p-10 flex flex-row">
                        <h1 className="glitch" style={{
                          "-webkit-text-stroke": "4px white",
                          "-webkit-text-fill-color": "white"
                        }} data-text="CATBOXED">CATBOXED!</h1>
                      </div>
                      <div id="socialbuttons" className=" flex flex-row px-10">
                        <button class="noselect socialButton"><span className="text text-sm">DEMO<br />VIDEO</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                        <div className=" w-2" />
                        <button class="noselect socialButton"><span className="text text-sm">GOOGLE<br />PLAY</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                      </div>
                      <p className="text-base p-10">
                      A small game created using Unity(C#), all 3D models were created by myself, and was eventually published to the Play Store in 2019. Tossing cats into boxes, including a trajectory system.
                      </p>
                    </div>

                    <div id="bottom" className="h-1/2 p-0">
                      <YoutubeEmbed embedId="-vw5g42UhZs" className="h-full w-full" />
                    </div>

                  </div>
                </div>

                <div id="rightSection" className="h-full w-1/2 flex flex-row p-10 relative z-20">

                  {/* <GallerySample /> */}
                  <AccordionGallery/>

                </div>

              </section>

              {/* <div className="h-32 w-screen relative bg-gray-700">
                <div id="transition" className="absolute transition1 h-full w-full" style={{
                  animationDelay: `-${offsetY * 0.003
                    }s`,
                  "animation-play-state": "paused"
                }}>
                  <img src={kazumi} style={{ transform: `translateY(${((offsetY - 2 * screenHeight) * 0.2)}px)` }} className="w-full" />
                </div>
              </div> */}


              <section id="duck" className=" z-20 h-screen bg-gray-700 text-white font-bold text-5xl flexTextCenter pt-20 stacking-slide">

                <div id="leftSection" className="h-full w-1/2 relative z-10">

                  {/* <div className="absolute h-full" style={{ zIndex: '10' }}>
    <img src={kazumi} className=" h-1/4" style={{ transform: `translateY(${-((offsetY - 2 * screenHeight) * 0.3)}px)` }}></img>
  </div> */}

                  <div className="relative h-full w-full" style={{ zIndex: '20' }}>

                    <div id="top" className="h-1/2  flex flex-col p-20 px-36">
                      <div className="transform text-6xl p-10 flex flex-row">
                        <h1 className="glitch" style={{
                          "-webkit-text-stroke": "4px white",
                          "-webkit-text-fill-color": "white"
                        }} data-text="CATBOXED">CATBOXED</h1>
                      </div>
                      <div id="socialbuttons p-2" className=" flex flex-row ">
                        <button class="noselect socialButton"><span className="text text-sm">DEMO<br />VIDEO</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                        <div className=" w-2" />
                        <button class="noselect socialButton"><span className="text text-sm">GOOGLE<br />PLAY</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                      </div>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>

                    <div id="bottom" className="h-1/2 p-10">
                      <YoutubeEmbed embedId="-vw5g42UhZs" className="h-full w-full" />
                    </div>

                  </div>
                </div>

                <div id="rightSection" className="h-full w-1/2 flex flex-row p-10 relative z-20">

                  {/* <GallerySample /> */}

                </div>

              </section>

              <section id="cat" className=" z-20 h-screen bg-gray-700 text-white font-bold text-5xl flexTextCenter pt-20 stacking-slide">

                <div id="leftSection" className="h-full w-1/2 relative z-10">

                  {/* <div className="absolute h-full" style={{ zIndex: '10' }}>
    <img src={kazumi} className=" h-1/4" style={{ transform: `translateY(${-((offsetY - 2 * screenHeight) * 0.3)}px)` }}></img>
  </div> */}

                  <div className="relative h-full w-full" style={{ zIndex: '20' }}>

                    <div id="top" className="h-1/2  flex flex-col p-20 px-36">
                      <div className="transform text-6xl p-10 flex flex-row">
                        <h1 className="glitch" style={{
                          "-webkit-text-stroke": "4px white",
                          "-webkit-text-fill-color": "white"
                        }} data-text="CATBOXED">CATBOXED</h1>
                        <h1 style={{
                          "-webkit-text-stroke": "4px white",
                          "-webkit-text-fill-color": "white"
                        }} className="text-lg">
                          Created Using UNITY
                        </h1>
                      </div>
                      <div id="socialbuttons p-2" className=" flex flex-row ">
                        <button class="noselect socialButton"><span className="text text-sm">DEMO<br />VIDEO</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                        <div className=" w-2" />
                        <button class="noselect socialButton"><span className="text text-sm">GOOGLE<br />PLAY</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                      </div>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>

                    <div id="bottom" className="h-1/2 p-10">
                      <YoutubeEmbed embedId="-vw5g42UhZs" className="h-full w-full" />
                    </div>

                  </div>
                </div>

                <div id="rightSection" className="h-full w-1/2 flex flex-row p-10 relative z-20">

                  {/* <GallerySample /> */}

                </div>

              </section>

              <section id="cat" className=" z-20 h-screen bg-gray-700 text-white font-bold text-5xl flexTextCenter pt-20 stacking-slide">

                <div id="leftSection" className="h-full w-1/2 relative z-10">

                  {/* <div className="absolute h-full" style={{ zIndex: '10' }}>
    <img src={kazumi} className=" h-1/4" style={{ transform: `translateY(${-((offsetY - 2 * screenHeight) * 0.3)}px)` }}></img>
  </div> */}

                  <div className="relative h-full w-full" style={{ zIndex: '20' }}>

                    <div id="top" className="h-1/2  flex flex-col p-20 px-36">
                      <div className="transform text-6xl p-10 flex flex-row">
                        <h1 className="glitch" style={{
                          "-webkit-text-stroke": "4px white",
                          "-webkit-text-fill-color": "white"
                        }} data-text="CATBOXED">CATBOXED</h1>
                        <h1 style={{
                          "-webkit-text-stroke": "4px white",
                          "-webkit-text-fill-color": "white"
                        }} className="text-lg">
                          Created Using UNITY
                        </h1>
                      </div>
                      <div id="socialbuttons p-2" className=" flex flex-row ">
                        <button class="noselect socialButton"><span className="text text-sm">DEMO<br />VIDEO</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                        <div className=" w-2" />
                        <button class="noselect socialButton"><span className="text text-sm">GOOGLE<br />PLAY</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                      </div>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>

                    <div id="bottom" className="h-1/2 p-10">
                      <YoutubeEmbed embedId="-vw5g42UhZs" className="h-full w-full" />
                    </div>

                  </div>
                </div>

                <div id="rightSection" className="h-full w-1/2 flex flex-row p-10 relative z-20">

                  {/* <GallerySample /> */}

                </div>

              </section>

              <section id="end" className=" z-40 h-screen bg-gray-900 text-white font-bold text-5xl flexTextCenter stacking-slide" >

                <div>
                  Until
                </div>

                <Signature />

                <div>
                  Next time!
                </div>

              </section>

              <div id="footer" className=" z-50 footer align-middle justify-center flex-row flex stacking-slide text-gray-400 text-base font-semibold">
                <div className="w-1/5 p-20">

                </div >
                <div className="w-3/5 p-10">
                  <div className="grid grid-flow-col grid-cols-2 grid-rows-5">
                    <div>
                      CONTACT
                    </div>
                    <div>
                      EMAIL
                    </div>
                    <div>
                      LOCATION//MÜNCHEN
                    </div>
                    <div>
                      DISCORD
                    </div>
                    <div>
                      LINKEDIN
                    </div>
                    <div>
                      INSTAGRAM
                    </div>
                    <div>
                      YOUTUBE
                    </div>
                  </div>
                </div>
                <div className="w-1/5 p-20">
                  <div>
                    <a href="#home">
                      BACK TO TOP
                    </a>
                  </div>
                  <div className="absolute bottom-0 text-xs p-5">
                    COPYRIGHT DYLAN ALVANDI 2021
                  </div>
                </div>
              </div>

            </div>

          </div>
      }
    </div>
  );
}

export default App;

// REFERENCES
// https://www.davidhu.io/react-spinners/
