url = 'https://amuuutest.netlify.app'

function setShare() {
	let resultImg = document.querySelector("#resultImg");
	let resultAlt = resultImg.firstElementChild.alt;
	const shareTitle = '아무테스트 결과'
	const shareDesc = infoList[resultAlt].name;
	const shareImage = url + '/img/image-' + resultAlt + '.png';
	const shareURL = url + '/page.result-' + resultAlt + '.html';

}

function kakaoShare() {
	Kakao.Share.sendDefault({
		objectType: 'feed',
		content: {
			title: '아무테스트',
			description: '아무테스트',
			imageUrl:
				'/img/main.png',
			link: {
				mobileWebUrl: 'https://amuuutest.netlify.app',
				webUrl: 'https://amuuutest.netlify.app',
			},
		},
		itemContent: {
			profileText: '아무테스트',
			profileImageUrl: '/img/favicon.ico',
			titleImageUrl: '/img/image-' + resultAlt + '.png',
			titleImageText: '나는 ' + resultAlt,
			titleImageCategory: '너도 해봐!',
		},
		buttons: [
			{
				title: '웹으로 이동',
				link: {
					mobileWebUrl: 'https://amuuutest.netlify.app',
					webUrl: 'https://amuuutest.netlify.app',
				},
			},
		],
	});
}