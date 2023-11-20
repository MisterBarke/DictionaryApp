let allContent = document.querySelector('.contents');
let theWord = document.querySelector('.theWord');
let word = document.getElementById('word');
let form = document.getElementById('form');
let sound = document.getElementById("sound");
let wordMeaning = document.getElementById('wordMeaning');
document.addEventListener('DOMContentLoaded', ()=>{
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
    word.value = ''
    fetch(url).then((response)=>response.json().then(data=>{
        console.log(data);
       
        for (let wordData of data) {
            let definitionsHTML = ""
            for (let definition of wordData.meanings[0].definitions) {
                // Ajouter chaque définition à la variable definitionsHTML
                definitionsHTML += `<li>${definition.definition}</li><br>
                <li class="eg">${definition.example || 'No example for this one'}</li>
                <br>`;

            }
            allContent.innerHTML = `
            
        <div class="meaningsContainer">
            <div class="wordAndPhonetic">
                <div>
            <h2 class="theWord">${wordData.word}</h2>
            <span class="phonetic">${wordData.phonetic ? wordData.phonetic : 'No phonetic found'}</span><br><br><br>
        </div>
        <div><button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button></div>
        </div>
            <div class="meanings">
            ${definitionsHTML}
                
            </div>
        </div>`;
        sound.setAttribute('src', `${wordData.phonetics[0].audio ? wordData.phonetics[0].audio : wordData.phonetics[1].audio }` )
        console.log(wordData.phonetics[1].audio);
        console.log(sound);
        }
        
    }))/* .catch(() => {
        allContent.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });; */
})
   
})

function playSound() {
    console.log('played');
    sound.play()
}