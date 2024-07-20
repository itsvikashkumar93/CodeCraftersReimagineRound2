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

const gsapAnimation = () => {
    gsap.timeline({
        scrollTrigger: {
            trigger: '#one-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#one-img", {
            backgroundSize: '50%',
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#two-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#two-img", {
            backgroundSize: '50%',
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#three-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#three-img", {
            backgroundSize: '50%',
        })

    gsap.timeline({
        scrollTrigger: {
            trigger: '#four-img',
            start: '0% 90%',
            end: '200% 90%',
            // markers: true,
            scrub: true
        }
    })
        .to("#four-img", {
            backgroundSize: '50%',
        })

}

const recentLaunches = () => {
    gsap.to('.text-container', {
        y: '-300%',
        ease: Power1,
        scrollTrigger: {
            trigger: '#recent',
            pin: true,
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".last-container",
            scrub: 1,
        }
    })

    let elems = document.querySelectorAll('.text-container');
    Shery.imageEffect('.img-container', {
        style: 4,
        config: {onMouse: {value: 1}},
        // debug: true,
        slideStyle: (setScroll) => {
            elems.forEach((elem, index) => {
                ScrollTrigger.create({
                    trigger: elem,
                    start: 'top top',
                    scrub: 1,
                    onUpdate: (prog)=>{
                        console.log(prog);
                        setScroll(prog.progress+index)
                    }
                })
            })
        }
    })
}

const sheryAnimation = () => {
    Shery.imageEffect("#back", {
        style: 3,
        gooey: true,
        config: { "uFrequencyX": { "value": 0, "range": [0, 100] }, "uFrequencyY": { "value": 0, "range": [0, 100] }, "uFrequencyZ": { "value": 0, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 1 }, "zindex": { "value": "9", "range": [-9999999, 9999999] }, "aspect": { "value": 2.0463362382580907 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 5.6, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.07, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.07, "range": [0, 10] }, "metaball": { "value": 0.14, "range": [0, 2], "_gsap": { "id": 13 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 26.72, "range": [0, 100] }, "a": { "value": 0.69, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] } }
    });

}

recentLaunches();
landingPageChange();
// sheryAnimation();
// gsapAnimation();