// BUTTON TOP

function scrollTop() {
	const scrollTop = document.getElementById('scroll-top')
	if (this.scrollY >= 560) scrollTop.classList.add('show-scroll')
	else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)