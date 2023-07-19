const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
let target = 0

const endPoint = qnaList.length;
let score = 0;

function calResult(){
	console.log(score);
	let result = score;
	return result;
}

function setResult(){
	let point = calResult();
	const resultName = document.querySelector('.resultname');
	resultName.innerHTML = infoList[point].name;

	let resultImg = document.createElement('img');
	const imgDiv = document.querySelector('#resultImg');
	let imgURL = 'img/image-' + point + '.png';
	resultImg.src = imgURL;
	resultImg.alt = point;
	resultImg.classList.add('img-fluid');
	imgDiv.appendChild(resultImg);

	const resultDesc = document.querySelector('.resultDesc');
	resultDesc.innerHTML = infoList[point].desc;
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
		if(qIdx+1 === endPoint) {
			goResult();
			return;
		} else {
			setTimeout(() => {
				target = qnaList[qIdx].a[idx].score;
				console.log(target)

				score += target;
				console.log(score)

				goNext(++qIdx);
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
	}, false);

	right.addEventListener("click", function(){
		ImageFadeOut(qIdx, 1);
	}, false);

	let status = document.querySelector('.statusBar');
	status.style.width = (100/endPoint)*(qIdx+1)+'%';
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