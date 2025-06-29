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

