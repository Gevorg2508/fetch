
function getInfo(name) {
    let api = `https://restcountries.com/v3.1/all`
    if(name){
        api = `https://restcountries.com/v3.1/name/${name}`
    }
    fetch(api)
    .then(res => {
        // console.log(res);
        if(!res.ok){
            throw new Error('ERROR');
        }
        return res.json()})
        .then(data => {
            const html = data.map(country => {
                return `
                <div class = "user">
                <div class = "flags">
                <p>Flag:  
                <img src = "${country.flags.png}" alt = "${country.name.common} width = "150px" height ="150px""></p>
                </div>
                <div class = "info">
                <p>Name:  ${country.name.common}</p>
                <p>official:  ${country.name.official}</p>
                <p>population:  ${country.population}</p>
                <p>region:  ${country.region}</p>
                <p>status:  ${country.status}</p>
                <p>startOfWeek:  ${country.startOfWeek}</p>
                <p>subregion:  ${country.subregion}</p>
                </div>
                </div>`
            });
            document.querySelector('#app').innerHTML = html;
        })
}
getInfo()
