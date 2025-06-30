const container = document.querySelector('.originals-images-container');
  const images = container.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('mouseenter', () => {
      images.forEach(otherImg => {
        if (otherImg !== img) {
          otherImg.style.opacity = '0.6';
          otherImg.style.scale = "0.989"
        }
      });
    });

    img.addEventListener('mouseleave', () => {
      images.forEach(otherImg => {
        otherImg.style.opacity = '1';
        otherImg.style.scale = "1.00"
      });
    });
  });


  const slider = document.querySelector('.originals-images-container');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll hızı
    slider.scrollLeft = scrollLeft - walk;
  });

