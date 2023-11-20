
let submitToTranslate = document.getElementById('submitToTranslate');
let floatingTextarea = document.getElementById('floatingTextarea2');
let floatingTextarea2 = document.getElementById('floatingTextarea');
let changeLangArrow = document.getElementById('changeLangArrow');
let language = document.querySelector('.language');
let language2 = document.querySelector('.language2');
let lang1 = document.querySelector('.lang1');
let lang2 = document.querySelector('.lang2');


document.addEventListener('DOMContentLoaded', () => {
    floatingTextarea2.disabled = true;
    let lang = 'Fr|en';
    let isLangSwitched = false;
    changeLangArrow.addEventListener('click', () => {
        // Inversez l'état de la langue
        isLangSwitched = !isLangSwitched;

        // Mettez à jour les textes en fonction de l'état actuel
        if (isLangSwitched) {
            lang = 'en|fr';
            language.textContent = 'English';
            language2.textContent = 'French';
            lang1.textContent = 'English';
            lang2.textContent = 'French';
        } else {
            lang = 'fr|en';
            language.textContent = 'French';
            language2.textContent = 'English';
            lang1.textContent = 'French';
            lang2.textContent = 'English';
        }
    });

    submitToTranslate.addEventListener('input', (e) => {
        e.preventDefault();
       floatingTextarea2.disabled = true;
        let url = `https://api.mymemory.translated.net/get?q=${floatingTextarea.value}!&langpair=${lang}`;
        fetch(url, {
            'method': 'GET'

        }).then(response => response.json().then(data => {
            if (response.ok !== true) {
                floatingTextarea2.textContent = 'Sorry boy! Try later.'
            }
            floatingTextarea2.textContent = data.responseData.translatedText
        }));

    })
});

function CopyText(value) {
    value.select();
    value.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(value.value);

    // Alert the copied text
}
document.getElementById('copyToTranslate').addEventListener('click', () => {
    console.log('copied');
    CopyText(floatingTextarea);
    const copied = document.querySelector('.copiedAlert');
    CopiedAlert(copied)

})
document.getElementById('copyTranslated').addEventListener('click', () => {
    console.log('copied');
    CopyText(floatingTextarea2);
    const copied2 = document.querySelector('.copiedAlert2');
    CopiedAlert(copied2)

})

const CopiedAlert = (copy) => {
    
   
    copy.setAttribute('style', 'display: block');
    setTimeout(() => {
        copy.setAttribute('style', 'display: none');
    }, 1000)
}
