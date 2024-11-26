/*====================== UPDATE H1 FOR HOME CONTENT ===================== */
const containerEl = document.querySelector(".home-content");

const careers = ["Web Developer", "SEO Specialist", "Virtual Assistant"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am a <br><span>${careers[careerIndex].slice(0, characterIndex)}<span></h1>
    
    <p>Hi, I'm Jeremy Saballos and I am based in Managua, Nicaragua. 📍</p>
    
    `
    
    ;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
}

displayOut();

