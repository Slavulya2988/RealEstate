const swiper = new Swiper('.slider-main-block', {
	// Optional parameters
	loop: true,


	// Navigation arrows
	navigation: {
	  nextEl: '.body-main-block__arrow.swiper-button-next',
	  prevEl: '.body-main-block__arrow.swiper-button-prev',
	}
 });

 // Tabs
const tabNavItems = document.querySelectorAll('.tabs-deals__button'),
 		tabItems = document.querySelectorAll('.item-tabs');
let index;
 document.addEventListener('click', (e) => {
	const targetElement = e.target;
	if(targetElement.closest('.tabs-deals__button')){
		tabNavItems.forEach((item, i) => {
			item.classList.remove('active');
			if(item === targetElement){
				item.classList.add('active');
				index = i;
			}
		})
	}

	tabItems.forEach((item) => {
			item.classList.remove('active');
		})
	tabItems[index].classList.add('active');

 })
