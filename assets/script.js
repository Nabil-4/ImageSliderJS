const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slide = (count = 0) => {
	const banner = document.getElementById('banner');
	const p = document.querySelector('#banner p');
	const arrowLeft = document.querySelector('.arrow_left');
	const arrowRight = document.querySelector('.arrow_right');
	arrowLeft.style.cursor = "pointer";
	arrowRight.style.cursor = "pointer";

	const dots = document.querySelector('.dots');

	let tabDiv = [];

	for (const i of slides) {
		let dot = document.createElement('div');
		dots.append(dot);
		dot.classList.add('dot');
		tabDiv.push(dot);
		dot.style.cursor = "pointer";
	}

	tabDiv[0].classList.add('dot_selected');

	const swapImg = () => {
		let img = document.querySelector('.banner-img');
		if (img) {
			img.remove();
		}
		banner.insertAdjacentHTML("afterbegin", `<img class="banner-img" src="./assets/images/slideshow/${slides[count].image}">`);
		p.innerHTML = `<p>${slides[count].tagLine}</p>`;
	}

	for (let i = 0; i < tabDiv.length; i++) {
		tabDiv[i].addEventListener('click', () => {
			count = i;

			swapImg();

			const dotSelect = document.querySelector(".dot_selected");
			dotSelect.classList.remove('dot_selected');
			tabDiv[i].classList.toggle('dot_selected');
		})
	}

	arrowRight.addEventListener('click', () => {
		count++;
		if (count === tabDiv.length) {
			count = 0;
		}

		swapImg();

		tabDiv[count].classList.add('dot_selected')
		if (count > 0) {
			tabDiv[count - 1].classList.remove('dot_selected');
		} else {
			tabDiv[tabDiv.length - 1].classList.remove('dot_selected');
		}
	})

	arrowLeft.addEventListener('click', () => {
		count--;
		if (count < 0) {
			count = tabDiv.length - 1;
		}

		swapImg();

		tabDiv[count].classList.add('dot_selected');
		if (count === tabDiv.length - 1) {
			tabDiv[0].classList.remove('dot_selected');
		} else {
			tabDiv[count + 1].classList.remove('dot_selected');
		}
	})
}
slide();









