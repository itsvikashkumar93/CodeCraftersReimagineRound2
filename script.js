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

