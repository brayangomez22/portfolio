AOS.init()

// BUTTON TOP
function scrollTop() {
	const scrollTop = document.getElementById('scroll-top')
	if (this.scrollY >= 560) scrollTop.classList.add('show-scroll')
	else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

const inputs = document.querySelectorAll('.input')

// FORM CONTACT
function focusFunc() {
	let parent = this.parentNode
	parent.classList.add('focus')
}

function blurFunc() {
	let parent = this.parentNode
	if (this.value == '') {
		parent.classList.remove('focus')
	}
}

inputs.forEach((input) => {
	input.addEventListener('focus', focusFunc)
	input.addEventListener('blur', blurFunc)
})
