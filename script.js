import { GoogleGenerativeAI } from "@google/generative-ai";

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


// google gemini api