'use strict';

const cat = document.querySelector('.cat'),
	btn = document.querySelector('.button'),
	reset = document.querySelector('.reset');

let count = 0,
	count2 = 0,
	flyInterval;

const catFly = function() {

	flyInterval = requestAnimationFrame(catFly);

	if (count2 < 1) {
		count++;
		if (count < 350) {
			cat.style.left = count + 'px';
		} else if (count === 350) {
			count2 = count;
			count2--;
			cat.style.left = count2 + 'px';
		} 
	} else if (count2 >= 1) {
		count = 0;
		count2--;
		cat.style.left = count2 + 'px';
	}
};

let animate = false;

btn.addEventListener('click', () => {
	if (!animate) {
		flyInterval = requestAnimationFrame(catFly);
		animate = true;
	} else {
		animate = false;
		cancelAnimationFrame(flyInterval);
	}
});

reset.addEventListener('click', () => {
	cancelAnimationFrame(flyInterval);
	count = 0;
	count2 = 0;
	cat.style.left = 0 + 'px';
});
