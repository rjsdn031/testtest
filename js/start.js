const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
let target = 0

const endPoint = Math.log2(qnaList.length+1);
let score = 0;


function setResult(){

	const resultName = document.querySelector('.resultname');
	resultName.innerHTML = menuList[score];

	// let resultImg = document.createElement('img');
	// const imgDiv = document.querySelector('#resultImg');
	// let imgURL = 'img/image-' + score + '.png';
	// resultImg.src = imgURL;
	// resultImg.alt = score;
	// resultImg.classList.add('img-fluid');
	// imgDiv.appendChild(resultImg);

	// const resultDesc = document.querySelector('.resultDesc');
	// resultDesc.innerHTML = menuList[score];
}

function goResult(){
	qna.style.WebkitAnimation = "fadeOut 0.5s";
	qna.style.animation = "fadeOut 0.5s";
	setTimeout(() => {
		result.style.WebkitAnimation = "fadeIn 0.5s";
		result.style.animation = "fadeIn 0.5s";
		setTimeout(() => {
			qna.style.display = "none";
			result.style.display = "block"
		}, 200)})
	setResult();
}

function ImageFadeOut(qIdx, idx){
	let left = document.querySelector('.leftImage');
	let right = document.querySelector('.rightImage');
	left.disabled = true;
	left.classList.remove("fadeIn");
	left.classList.add("fadeOut");
	right.disabled = true;
	right.classList.remove("fadeIn");
	right.classList.add("fadeOut");

	setTimeout(() => {
		target = qnaList[qIdx].a[idx].coef;
		score = score*2 + target;
		console.log(score)

		if(Math.floor(Math.log2(qIdx+1))+1 === endPoint) {
			goResult();
			return;
		} else {
			setTimeout(() => {
				goNext(qIdx*2+target);
			},200);
		}
	},200)

}

function goNext(qIdx){
  	let q = document.querySelector('.qBox');
  	q.innerHTML = qnaList[qIdx].q;

  	let left = document.querySelector('.leftImage');
  	let right = document.querySelector('.rightImage');
  	let qnaURL = './img/question/';
  	left.src = qnaURL + qIdx + '-L.png';
  	right.src = qnaURL + qIdx + '-R.png';

  	try {
    	left.classList.remove("fadeOut");
    	right.classList.remove("fadeOut");
  	} catch (e) {
    	console.log(e);
  	}
	left.classList.add("fadeIn");
	right.classList.add("fadeIn");

	left.addEventListener("click", function(){
		ImageFadeOut(qIdx ,0);
		left.removeEventListener('click', arguments.callee)
	}, false);

	right.addEventListener("click", function(){
		ImageFadeOut(qIdx, 1);
		right.removeEventListener('click', arguments.callee)
	}, false);

	let status = document.querySelector('.statusBar');
	status.style.width = (100/endPoint)*(Math.floor(Math.log2(qIdx+1))+1)+'%';
}

function begin(){
  	main.style.WebkitAnimation = "fadeOut 0.5s";
  	main.style.animation = "fadeOut 0.5s";
  	setTimeout(() => {
    	qna.style.WebkitAnimation = "fadeIn 0.5s";
    	qna.style.animation = "fadeIn 0.5s";
    	setTimeout(() => {
      		main.style.display = "none";
      		qna.style.display = "block"
    	}, 200)
    	let qIdx = 0;
    	goNext(qIdx);
  	}, 200);
}