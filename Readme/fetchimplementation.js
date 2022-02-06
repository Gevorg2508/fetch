function fetch(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Whoops! error for source ${src}`));

        document.head.append(script);
    });
} 
let promise = fetch("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
promise.then(script => alert("page is loaded"));