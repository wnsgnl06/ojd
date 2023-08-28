// 예시로 가상의 사용자 아이디 배열을 만들어 사용합니다.
const onlineUsers = ['신망고', '망고', 'sinmanggo', 'manggo', ];
// 페이지가 로드되면 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
  const onlineUsersList = document.getElementById('online-users');

  // 가상의 사용자 아이디 배열을 기반으로 동적으로 목록을 생성합니다.
  onlineUsers.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    onlineUsersList.appendChild(listItem);
  });
});
// 이미지 슬라이드를 위한 코드
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slideshow img');
  let currentSlideIndex = 0;

  // 이미지 슬라이드 함수
  function showNextSlide() {
    slides.forEach(slide => {
      slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
      slide.classList.remove('active');
    });
    slides[currentSlideIndex].classList.add('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  }

  // 1초마다 이미지 슬라이드를 변경
  setInterval(showNextSlide, 3000);
});