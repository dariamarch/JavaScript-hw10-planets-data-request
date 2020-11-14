
//Работа с запросом и данными 

"use strict" 

const url = "https://trevadim.github.io/vue/data/data.json";
const body = document.querySelector("body");

let createContent = (result) => {
    let header = document.createElement("header");
    body.appendChild(header);
    
    for (var key in result.main) {
        let p = document.createElement("p");
         p.innerHTML = result.main[key];
         header.appendChild(p);
    }

    let main = document.createElement("main");
    body.appendChild(main);
    for (var key in result.planets) {
        let div = document.createElement("div");
        div.innerHTML = "<h2>" + result.planets[key].title + "</h2>" + "<p>" + result.planets[key].info + "</p>" + "<p>" + "<img src=" + result.planets[key].url + ">" + "</p>";
        main.appendChild(div);
    }
};   

fetch(url)
    .then((data) => data.json())
    .then((result) => createContent(result))
    .catch((error) => console.log(error));

