//adds effect to menu items on homepage
const fadeMenu = document.querySelectorAll('.fade-in');

fadeMenu.forEach((item) => {
  item.addEventListener('mouseenter', e => {
    item.style.opacity = '0.5';
    item.style.transition = '0.5s';
  })
  item.addEventListener('mouseleave', e => {
    item.style.opacity = '1';
    item.style.transition = '0.5s';
  })
})


const slideIn = document.querySelectorAll('.slide-in');
slideIn.forEach((item) => {
  item.style.opacity = '1';
  transition = 'all 2s';
})

//debounce function
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

window.addEventListener('scroll', debounce(slideIn, 100));
//
//
// function sliders(e) {
//   //loop over every single image
//   slideIn.forEach(item => {
//     //halfway through img
//     const slideLocation = (window.scrollY + window.innerHeight) - item.height/2;
//     //bottom of image
//     const imageBottom = item.offsetTop + item.height;
//     const isHalfShown = slideLocation > item.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;
//     if (isHalfShown && isNotScrolledPast){
//       item.classList.add('active');
//
//     }
//   });
// }
//
// window.addEventListener('scroll', debounce(sliders, 100));
























//
