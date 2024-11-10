const { GoogleGenerativeAI } = require('@google/generative-ai');
const editor = document.getElementsByClassName('editor');
const editPrompt = document.getElementsByClassName('flexinput');

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
const flexbutton = document.getElementsByClassName('flexbutton')[0];

flexbutton.onclick =()=> {
    callAI();
}

async function callAI(ev) {
    ev.preventDefault();

    try {
        const genAI = new GoogleGenerativeAI("AIzaSyBmVYOrJrwN0l4cODZOW7NwXl8ysg-kl8E");
		const model = genAI.getGenerativeModel({
      			model: "gemini-1.5-flash"
   		 });

        const prompt = editPrompt.value;
        editPrompt.value = "";
        const result = await model.generateContentStream(prompt);
    
        editor.innerHTML = result;
    }
    catch (e) {
        alert("An error occured calling Generative AI: " + e);
    }
}

// process result text