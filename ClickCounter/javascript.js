document.addEventListener('DOMContentLoaded', function () {
    const clickButton = document.getElementById('clickButton');
    const countSpan = document.getElementById('count');
    let clickCount = 0;
  
    clickButton.addEventListener('click', function () {
      clickCount++;
      countSpan.textContent = clickCount;
    });
  });
  