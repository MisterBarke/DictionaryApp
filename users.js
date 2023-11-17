let ipt = document.querySelector('#postalCode')

ipt.addEventListener('input', () => {
    if (ipt.value.length == 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${ipt.value}`;
        fetch(url).then((response) => response.json().then(data => {
            console.log(data);
            let list = '<ul>'
            for (let el of data) {
                list += `<li>${el.nom} avec une population de ${el.population}</li>`;  
            }
            list +='</ul>';
            document.querySelector('.listItem').innerHTML = list
        }));
    }
})