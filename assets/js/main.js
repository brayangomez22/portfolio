AOS.init()

function scrollTop() {
	const scrollTop = document.getElementById('scroll-top')
	if (this.scrollY >= 560) scrollTop.classList.add('show-scroll')
	else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// Animations
gsap.to('.first', 1.9, { delay: 0.5, top: '-100%', ease: Expo.easeInOut })
gsap.to('.second', 1.9, { delay: 0.7, top: '-100%', ease: Expo.easeInOut })
gsap.to('.third', 1.9, { delay: 0.9, top: '-100%', ease: Expo.easeInOut })

gsap.from('.nav__logo', { opacity: 0, duration: 2, delay: 1.9, y: 25, ease: 'expo.out' })
gsap.from('.nav__item', {
	opacity: 0,
	duration: 2,
	delay: 1.9,
	y: 25,
	ease: 'expo.out',
	stagger: 0.2,
})

gsap.from('.banner-image', { opacity: 0, duration: 3, delay: 2.7, x: 60 })
gsap.from('.site-title', {
	opacity: 0,
	duration: 2,
	delay: 2.4,
	y: 25,
	ease: 'expo.out',
	stagger: 0.3,
})
