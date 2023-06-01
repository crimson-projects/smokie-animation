let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG'),
		mid = gsap.utils.toArray('#mid *')//.reverse()

gsap.set('svg', {
	visibility: 'visible'
})

let fatTl = gsap.timeline();
fatTl.fromTo('#fat *', {
	drawSVG: '20% 30%'
}, {
		drawSVG: '60% 90%',
	stagger: {
		each: 0.05,
		repeat: -1,
		yoyo: true
	},
	duration: 0.75,
	ease: 'sine.inOut'
})
/* let groundTl = gsap.timeline();
groundTl.fromTo('#house *', {
	drawSVG: '10% 90%'
}, {
		drawSVG: '0% 100%',
	stagger: {
		each: 0.006,
		repeat: -1,
		yoyo: true
	},
	duration:0.5,
	ease: 'sine.inOut'
}) */

let mainTl = gsap.timeline();
mainTl.add([fatTl], 0).seek(100).timeScale(0.3)
//ScrubGSAPTimeline(mainTl)