//import { GoogleGenerativeAI } from "@google/generative-ai";
//import { processText } from "./processText.js";
const editor = document.getElementsByClassName('editor');

// top bar formats
    const formats = document.querySelectorAll('.formats');

    for (let element of formats) {
        element.onclick = () => {
            if (element.style.backgroundColor == 'rgb(80, 20, 100)') {
                element.style.backgroundColor = 'white';
                element.style.color = 'black';
            }
            else {
                element.style.backgroundColor = 'rgb(80, 20, 100)';
                element.style.color = 'white';
            }
        }
    }

// following div
    const flexbox = document.querySelector('.flexbox');
    
    document.addEventListener('mouseup', function() {
        const selection = window.getSelection();
        const selectedText = selection.toString();
  
        if (selectedText) {
          // Calculate the position of the selected text in the contenteditable div
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
  
          // Position the box just to the right of the selected text
          flexbox.style.top = (window.scrollY + rect.top - 40) + 'px';
          flexbox.style.left = (window.scrollX + rect.right + 20) + 'px';
  
          // Show the floating box
          flexbox.style.display = 'block';
        }
      });

// google gemini api