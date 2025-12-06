/*


const geos = {
    UA: "https://tone.affomelody.com/click?pid=123442&offer_id=266",
    US: "https://tone.affomelody.com/click?pid=123442&offer_id=527",
    GB: "https://tone.affomelody.com/click?pid=123442&offer_id=527",
    AU: "https://tone.affomelody.com/click?pid=123442&offer_id=527",
    CA: "https://tone.affomelody.com/click?pid=123442&offer_id=527",
    DE: "https://tone.affomelody.com/click?pid=123442&offer_id=831"
}

const ALL_THE_OTHERS = "https://tone.affomelody.com/click?pid=123442&offer_id=25";


document.addEventListener("DOMContentLoaded", () => {
    const rlink = document.querySelector("a .rlink");

    fetch('https://ipwho.is/')
    .then(r => r.json())
    .then(data => {
        const cc = data.country_code;
        const url = geos[cc] || ALL_THE_OTHERS;

        console.log("Country:", cc, "→", url);

        // Обновляем ВСЕ кнопки на странице
        document.querySelector('a.rlink').href = url;
    })
    .catch(err => {
        console.log("Гео не сработало → дефолтная ссылка");
        document.querySelector('a.rlink').href = ALL_THE_OTHERS;
    });
})

*/
