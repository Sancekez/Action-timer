
let date = new Date('dec 31 2021 23:59:59');

let btn = document.querySelector('#btn1');

btn.addEventListener('click', function(){
	alert('Вжууууух!');
});

function counts(){
	let now = new Date();
	let gap = date - now;

	let days = Math.floor(gap / 1000 / 60 / 60 / 24);
	let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
	let minutes = Math.floor(gap / 1000 / 60) % 60;
	let seconds = Math.floor(gap / 1000) % 60;

	if(gap < 0) {
		document.querySelector('.counter__body').classList.add("hide");
		document.querySelector('.btn').classList.add("hide");
		document.querySelector('.about__action').classList.add("show");
	} else {
		document.getElementById('d').innerText = days;
		document.getElementById('h').innerText = hours;
		document.getElementById('m').innerText = minutes;
		document.getElementById('s').innerText = seconds;
	}

}

counts();

setInterval(counts, 1000);
