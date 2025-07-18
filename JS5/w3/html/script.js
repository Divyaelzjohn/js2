 const container = document.getElementById("boxContainer");

    const boxes = [];
    for (let i = 0; i < 20; i++) {
      const box = document.createElement("div");
      const width = Math.floor(Math.random() * 100) + 50; 
      const height =90; 
      box.className = "box";
      box.style.width = width + "px";
      box.style.height = height + "px";
      boxes.push(box);
    }

    function renderBoxes() {
      container.innerHTML = '';    
      var space = 0;               
    
      for (var i = 0; i < boxes.length; i++) {
        var box       = boxes[i];
        var boxWidth  = parseInt(box.style.width);
    
        if (i !== 0) {      
          boxWidth += 10;
        }
        if (space + boxWidth > container.clientWidth) {
          break;
        }
    
        container.appendChild(box); 
        space += boxWidth;          
      }
    }

    window.addEventListener("resize", renderBoxes);
    window.addEventListener("load", renderBoxes);

    