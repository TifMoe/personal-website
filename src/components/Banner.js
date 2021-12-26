import React,  { useEffect } from 'react'
import Scroll from './Scroll';
import { TimelineMax, SteppedEase } from "gsap";

const Banner = () => {

  useEffect(() => {
    var mediaQuery = window.matchMedia("(min-width: 736px)");

    // Initialize the typewriter effect and type welcome banner on mount
    var tl = new TimelineMax({
      paused:true
    });

    // Welcome animation
    tl.fromTo(".welcome-line", 3, {
      width: "0",
    }, {
      width: "100%", /* same as CSS .welcome-line width */
      ease:  SteppedEase.config(13)
    }, 0);

    // text cursor animation
    tl.fromTo(".welcome-line", 1, {
      "border-right-color": "rgba(255,255,255,0.75)"
    }, {
      "border-right-color": "rgba(255,255,255,0)",
      repeat: 2,
      ease:  SteppedEase.config(13)
    }, 0);

    // Media query to avoid animating if screen small
    if(mediaQuery.matches) {
      // First subtext animation
      tl.add('first')
      .to("#first", 0, { autoAlpha: 1 }, 'first')
      .fromTo("#first", 2, {
        width: "0",
      }, {
        width: "100%", /* same as CSS .welcome-line width */
        immediateRender: false,
        ease:  SteppedEase.config(13)
      }, 'first')
    // Second subtext animation
    tl.add('second')
      .to("#second", 0, { autoAlpha: 1 }, 'second')
      .fromTo("#second", 2, {
        width: "0",
      }, {
        width: "100%", /* same as CSS .welcome-line width */
        immediateRender: false,
        ease:  SteppedEase.config(13)
      }, 'second')
    } else {
      // Fade in wrapped text if small screen
      tl.add('small')
        .to(".description-line", 1, { autoAlpha: 1, width: "100%", duration: 2}, 'small')
    }

    // "learn more " animation
    tl.from(".more", {y: 700, delay: 1, duration: 5, ease: "expo"}, 0);
    
    tl.play();
  }, []);

  return (
    <section id="banner" className="major">
    <div className="inner">
      <div className="content">
          <div class="typewriter-wrapper">
          <p class="typewriter welcome-line">Welcome!</p>
          <p id="first" class="typewriter description-line">
            My name is Tiffany and I'm a software engineer based in London
          </p>
          <p id="second" class="typewriter description-line">
            This website is still in progress but have a look around!
          </p>
          <Scroll type="id" element="blogs" offset={-50}>
            <a className="more">
              <p>To the blog!</p>
            </a>
          </Scroll>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Banner
