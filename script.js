// script.js
function toggleLight() {
    const scene = document.querySelector('.scene');
    scene.classList.toggle('dark');
  
    const bulb = document.querySelector('.bulb');
    bulb.style.transition = 'transform 0.3s';
    bulb.style.transform = 'translateY(10px)';
  
    setTimeout(() => {
      bulb.style.transform = 'translateY(-10px)';
    }, 300);
  }
  