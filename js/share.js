url = 'https://amuuutest.netlify.app'

function setShare() {
	let resultImg = document.querySelector("#resultImg");
	let resultAlt = resultImg.firstElementChild.alt;
	// const shareTitle = '아무테스트 결과'
	// const shareDesc = menuList[resultAlt].name;
	const shareImage = url + '/img/image-' + resultAlt + '.png';
	const shareURL = url + '/page/result-' + resultAlt + '.html';

	Kakao.Share.sendDefault({
		objectType: 'text',
		text:
			'아무튼 테스트를 테스트하고 있는데 무슨 말을 쓸 지 모르겠습니다. 여러분의 테스트 결과를 확인하세요!',
		link: {
				mobileWebUrl: shareURL,
				webUrl: shareURL,
		},
	});
}

