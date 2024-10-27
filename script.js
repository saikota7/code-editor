// script.js
function run() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    const output = document.getElementById("output").contentWindow.document;
  
    output.open();
    output.write(
      `${htmlCode}<style>${cssCode}</style><script>${jsCode}<\/script>`
    );
    output.close();
  }
  
  // Resize functionality
  const resizer = document.querySelector(".resizer");
  const editor = document.querySelector(".editor");
  const output = document.querySelector(".output");
  
  let isResizing = false;
  
  resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.body.style.cursor = "ew-resize";
  });
  
  document.addEventListener("mousemove", (e) => {
    if (isResizing) {
      const containerWidth = document.querySelector(".container").offsetWidth;
      const newEditorWidth = (e.clientX / containerWidth) * 100;
      editor.style.flex = `${newEditorWidth} 1 0%`;
      output.style.flex = `${100 - newEditorWidth} 1 0%`;
    }
  });
  
  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.cursor = "default";
  });
  