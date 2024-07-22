// const LocomotiveJs = () => {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });


//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     ScrollTrigger.refresh();
// }
const lenisJs = () => {
    const lenis = new Lenis({
        duration: 1.2
    });

    function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

}
const landingPageChange = () => {
    var elems = document.querySelectorAll('.elem')

    elems.forEach((elem) => {
        var h1s = elem.querySelectorAll('h1');
        var index = 0;
        var animating = false;

        document.querySelector('#home')
            .addEventListener('click', () => {
                if (!animating) {
                    animating = true;
                    gsap.to(h1s[index], {
                        top: '-=100%',
                        ease: Expo.easeInOut,
                        duration: 1,
                        onComplete: function () {
                            gsap.set(this._targets[0], { top: '100%' });
                            animating = false;
                        }
                    })

                    index === h1s.length - 1 ? (index = 0) : index++;

                    gsap.to(h1s[index], {
                        top: '-=100%',
                        ease: Expo.easeInOut,
                        duration: 1,
                    })
                }
            })
    })

}

const recentLaunches = () => {
    gsap.to('.text-container', {
        y: '-300%',
        ease: 'linear',
        scrollTrigger: {
            trigger: '#recent',
            // scroller: "#main",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".last-container",
            scrub: true,
        }
    })

    let elems = document.querySelectorAll('.text-container');
    Shery.imageEffect('.img-container', {
        style: 4,
        config: { "uColor": { "value": false }, "uSpeed": { "value": 0.31, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 3.5, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7241449917191698 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.06, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        slideStyle: (setScroll) => {
            elems.forEach((elem, index) => {
                ScrollTrigger.create({
                    trigger: elem,
                    start: 'top top',
                    // scroller: '#main',
                    scrub: 1,
                    onUpdate: (prog) => {
                        setScroll(prog.progress + index)
                    }
                })
            })
        }
    })
}

const sheryAnimation = () => {
    Shery.imageEffect("#back", {
        style: 2,
        gooey: true,
        // debug: true,
        config: { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -3 }, "mousemove": { "value": 0 }, "modeA": { "value": 1 }, "modeN": { "value": 0 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 800, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 3, "range": [-3, 3] }, "color": { "value": 16777215 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 0, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": "9", "range": [-9999999, 9999999] }, "aspect": { "value": 2.0469082489694217 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 5.6, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.3, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.07, "range": [0, 10] }, "metaball": { "value": 0.13, "range": [0, 2], "_gsap": { "id": 13 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 26.72, "range": [0, 100] }, "uFrequencyX": { "value": 0, "range": [0, 100] }, "uFrequencyY": { "value": 0, "range": [0, 100] }, "uFrequencyZ": { "value": 0, "range": [0, 100] }, "a": { "value": 0.69, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] } }
    });

    Shery.mouseFollower();
    Shery.makeMagnet('.makeMagnet');

}

const swiper = () => {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        mousewheel: {
            forceToAxis: true,
            releaseOnEdges: true,
            sensitivity: 0,
            thresholdDelta: 30,
            thresholdTime: 0.1,
        },
    });

}

const hamburger = () => {
    const hamOpen = document.querySelector('#navbar #ham-open');
    const hamClose = document.querySelector('#hamburger #ham-close');
    const hamburger = document.querySelector('#hamburger');

    hamOpen.addEventListener('click', () => {
        gsap.to(hamburger, {
            display: 'block',
            right: 0,
            duration: 0.6
        })
    })
    hamClose.addEventListener('click', () => {
        gsap.to(hamburger, {
            display: 'block',
            right: '-30%',
            duration: 0.6

        })
    })
}

hamburger();
lenisJs();
landingPageChange();
recentLaunches();
sheryAnimation();
swiper();