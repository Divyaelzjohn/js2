
const container = document.getElementById('container');
for (let i = 1; i <= 20; i++) {
  const box = document.createElement('div');
  box.className = 'box';

  const width = Math.floor(Math.random() * 100)+1;  
  const height = Math.floor(Math.random() * 100)+10;  

  box.style.width = width + 'px';
  box.style.height = height + 'px';

  container.appendChild(box);
}

