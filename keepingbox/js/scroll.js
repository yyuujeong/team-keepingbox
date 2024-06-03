// Scroll Animation (스크롤 애니메이션)
const aniFunc = function() {
  const aniTriggerMargin = 60;
  const aniElementList = document.querySelectorAll('.ani');
  for(const element of aniElementList) {
    if(!element.classList.contains('show')) {
      if(window.innerHeight > element.getBoundingClientRect().top + aniTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}
window.addEventListener('load', aniFunc);
window.addEventListener('scroll', aniFunc);