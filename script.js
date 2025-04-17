document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('particles-container');
    const colors = ["#ffffff","#1d1494","#2b00ff","#3c41dd"];
    const particleCount = 50;
    const minSize = 5;
    const maxSize = 20;
    const speed = 15;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      
      // Random size between min and max
      const size = Math.random() * (maxSize - minSize) + minSize;
      
      // Random color from colors array
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random delay for animation
      const delay = Math.random() * speed;
      
      // Set styles
      particle.style.left = `${xPos}%`;
      particle.style.top = `${yPos}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.setProperty('--duration', `${speed}s`);
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
  });