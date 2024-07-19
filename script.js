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


const sheryAnimation = () => {
    Shery.imageEffect("#back", {
        style: 3,
        // debug: true,
        gooey: true,
        config: {"uFrequencyX":{"value":0,"range":[0,100]},"uFrequencyY":{"value":0,"range":[0,100]},"uFrequencyZ":{"value":0,"range":[0,100]},"geoVertex":{"range":[1,64],"value":1},"zindex":{"value":"9","range":[-9999999,9999999]},"aspect":{"value":2.0463362382580907},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":5.6,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.07,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.14,"range":[0,2],"_gsap":{"id":13}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":26.72,"range":[0,100]},"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]}}
    });
}

sheryAnimation();