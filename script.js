document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('stars-container');
  const starCount = 100;
  const backgroundColor = "#121212";
  const starColors = ["#ffffff","#f0f0ff","#fffaf0"];
  const starSpeed = 3;
  const layerDepth = 3;
  
  // Create star layers for parallax effect
  for (let d = 0; d < layerDepth; d++) {
    const layerCount = Math.floor(starCount / layerDepth);
    const layerSpeed = starSpeed * (1 - d * 0.2);
    const starSize = 1 + d * 0.5;
    
    const layer = document.createElement('div');
    layer.classList.add('star-layer');
    layer.style.zIndex = d.toString();
    
    for (let i = 0; i < layerCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * layerSpeed;
      const size = (Math.random() * 0.5 + 0.5) * starSize;
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = color;
      star.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      star.style.setProperty('--star-speed', `${layerSpeed}s`);
      star.style.animationDelay = `${delay}s`;
      
      if (Math.random() > 0.7) {
        star.classList.add('twinkle');
      }
      
      layer.appendChild(star);
    }
    
    container.appendChild(layer);
  }
  
  // Add parallax effect with mouse movement (optional)
  document.addEventListener('mousemove', function(e) {
    const layers = document.querySelectorAll('.star-layer');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mouseX - centerX) / 50;
    const deltaY = (mouseY - centerY) / 50;
    
    layers.forEach(function(layer, index) {
      const depth = (index + 1) / layers.length;
      const moveX = deltaX * depth;
      const moveY = deltaY * depth;
      
      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
  });
});