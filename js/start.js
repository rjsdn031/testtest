const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function backtofirst() {
	location.reload();
}

function calResult() {
	console.log(select);
	let result = select.indexOf(Math.max(...select));
	return result;
}

function setResult() {
	let point = calResult();
	const resultName = document.querySelector('.resultname');
	resultName.innerHTML = infoList[point].name;

	let resultImg = document.createElement('img');
	const imgDiv = document.querySelector('#resultImg');
	let imgURL = 'img/image-' + point + '.png';
	resultImg.src = imgURL;
	resultImg.alt = 'result(' + point + ')';
	resultImg.classList.add('img-fluid');
	imgDiv.appendChild(resultImg);

	const resultDesc = document.querySelector('.resultDesc');
	resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
	qna.style.WebkitAnimation = "fadeOut 1s";
	qna.style.animation = "fadeOut 1s";
	setTimeout(() => {
		result.style.WebkitAnimation = "fadeIn 1s";
		result.style.animation = "fadeIn 1s";
		setTimeout(() => {
			qna.style.display = "none";
			result.style.display = "block"
		}, 450)
	})
	setResult();
}

function addAnswer(answerText, qIdx, idx) {
	let a = document.querySelector('.answerBox');
	let answer = document.createElement('button');
	answer.classList.add('answerList');
	answer.classList.add('my-3');
	answer.classList.add('py-3');
	answer.classList.add('mx-auto');

	a.appendChild(answer);
	answer.innerHTML = answerText;

	answer.addEventListener("click", function () {
		let children = document.querySelectorAll('.answerList');
		for (let i = 0; i < children.length; i++) {
			children[i].disabled = true;
		}
		let target = qnaList[qIdx].a[idx].type;
		for (let i = 0; i < target.length; i++) {
			select[target[i]] += 1;
		}

		for (let i = 0; i < children.length; i++) {
			children[i].style.display = 'none';
		}
		goNext(++qIdx);
	}, false);
}

function goNext(qIdx) {
	if (qIdx === endPoint) {
		goResult();
		return;
	}

	let question = document.querySelector('.qBox');
	question.innerHTML = qnaList[qIdx].q;
	for (let i in qnaList[qIdx].a) {
		addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
	}
	let status = document.querySelector('.statusBar');
	status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin() {
	main.style.WebkitAnimation = "fadeOut 500ms";
	main.style.animation = "fadeOut 500ms";
	setTimeout(() => {
		qna.style.WebkitAnimation = "fadeIn 500ms";
		qna.style.animation = "fadeIn 500ms";
		setTimeout(() => {
			main.style.display = "none";
			qna.style.display = "block"
		}, 200)
		let qIdx = 0;
		goNext(qIdx);
	}, 200);
}
