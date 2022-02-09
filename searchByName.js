function getInfo() {
    fetch('https://restcountries.com/v3.1/all')
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
                <p>Flag:  <img src = "${country.flags.png}" alt = "${country.name.common}"></p>
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

getInfo();