url = 'https://amuuutest.netlify.app'

function setShare() {
	let resultImg = document.querySelector("#resultImg");
	let resultAlt = resultImg.firstElementChild.alt;
	const shareTitle = '아무테스트 결과'
	const shareDesc = infoList[resultAlt].name;
	const shareImage = url + '/img/image-' + resultAlt + '.png';
	const shareURL = url + '/page/result-' + resultAlt + '.html';

}

function kakaoShare() {
	Kakao.Share.sendDefault({
		objectType: 'text',
		text:
			'기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오톡 공유는 다른 템플릿을 이용해 보낼 수 있습니다.',
			'아무튼 테스트를 테스트하고 있는데 무슨 말을 쓸 지 모르겠습니다. 여러분의 테스트 결과를 확인하세요!',
		link: {
			mobileWebUrl: url,
			webUrl: url,
		},
	});
}