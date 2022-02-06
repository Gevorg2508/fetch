fetch("https://restcountries.com/v3.1/name/peru")
.then(res => res.json())
.then(data => console.log(data))
.then(elem => {
    for (let i = 0; i<elem.length; i++){
        if(elem[i] === name){
            console.log(elem[i]);
        }
    }
})
