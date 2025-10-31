// 화면 사이즈 체크
const isMobile = window.matchMedia("(max-width: 600px)");
// about-us 섹션 요소 선택
const about = document.querySelector(".about-us");
const plus = about.querySelector(".plus");
const logo = about.querySelector(".logo");
const texts = about.querySelectorAll(".list.text div");

// JS에서 opacity 초기화 제거, CSS에서 .plus/.logo 기본 opacity:0
window.addEventListener("load", () => {
  texts.forEach((t) => t.classList.remove("active"));
  // texts[0].classList.add("active");
  about.style.backgroundColor = "#f45b5b";
});

// 2️⃣ 스크롤 시 텍스트 + 이미지 효과
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const aboutTop = about.offsetTop;
  const aboutHeight = about.offsetHeight;

  // 섹션 범위 안일 때만 처리
  if (
    scrollY + window.innerHeight > aboutTop &&
    scrollY < aboutTop + aboutHeight
  ) {
    // 섹션 기준 중앙 위치
    const relativeY = scrollY + window.innerHeight / 2 - aboutTop;
    const ratio = relativeY / aboutHeight;

    // 텍스트 활성화
    let activeIndex;
    if (ratio < 0.2) {
      activeIndex = -1; //글자 안보이게
      about.style.backgroundColor = "#f45b5b";
    } else if (ratio < 0.45) {
      activeIndex = 0;
      about.style.backgroundColor = "#f45b5b";
    } else if (ratio < 0.6) {
      activeIndex = 1;
      about.style.backgroundColor = "#07B9EA";
    } else {
      activeIndex = 2;
      about.style.backgroundColor = "#69EA07";
    }

    texts.forEach((t, i) => {
      if (i === activeIndex) t.classList.add("active");
      else t.classList.remove("active");
    });

    //섹션 진입 시 이미지 보여짐
    plus.classList.add("on");
    logo.classList.add("on");
  } else {
    // 섹션 벗어나면 이미지 숨기기
    plus.classList.remove("on");
    logo.classList.remove("on");
  }
});

// ======================
// 비디오 박스
// ======================
const videoEl = document.getElementById("bg-video");
const videos = ["img/bg.mp4", "img/bg2.mp4", "img/bg3.mp4", "img/bg4.mp4"];
const dots = document.querySelectorAll(".dot");
let currentVideo = 0;

// 비디오 재생 & dot 업데이트
function setVideo(index) {
  currentVideo = index;
  videoEl.src = videos[currentVideo];
  videoEl.load();
  videoEl.play();
  updateDots();
}
// dot 상태
function updateDots() {
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentVideo));
}

// 비디오 끝나면 다음
videoEl.addEventListener("ended", () =>
  setVideo((currentVideo + 1) % videos.length)
);

// dot 클릭
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    setVideo(index);
  });
});
// 초기 상태

updateDots();
setVideo(currentVideo);
