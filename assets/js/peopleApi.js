//URL API - QUE SE CONSUME conocido como rest
const API = "https://rickandmortyapi.com/api/character";
const btnSearch = document.getElementById("btnSearch");

//obtiene los resultados de la api
//consumir api
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
       console.log(json);
      fillData(json); //envia datos con parametro json
    })
    .catch((error) => {
      console.log("Error in the Api", error);
    });
    
};
// fetch es get or request tra informacion from api
//api tiene la url que contiene el array
//return para que retome la peticion en postman
const fillData = (data) => {
  //crear codigo html
  let html = "";
  //foreach es mas rapido
  data.results.forEach (p => {
    //pp people persona por persona ideal dso letras
    html += '<div class="col">'; //se recomienda comillas simples
    html += '<div class="card h-100">';
    html += `<h5 class="card-title">${p.name} </h5>`;
    html += '<div class="card-body">';
    html +=` <img src="${data[i].url}" class="card-img-top" alt="${data[i].title}">`
    html += `<img src="${element.image}" class="card-img-top" alt="${element.name}">`;  
    html += `<p class="card-text">${p.email} </p>`;
    html += `<h5 class="text-muted">${p.address.suite}</h5>`;
    html += `<p class="card-text">Episodes: ${p.phone}</p>`;
    html += `<p class="card-text"> <a  href="${p.website}" target="_blank">Web personal</a></p>`;
    html += '<div class="card-footer">';
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });


  document.getElementById("dataPeople").innerHTML = html;
  
};


btnSearch.onclick = function () {
  getData(API);
};

//id de html div
//llenardatos, recibiendo datos
//toma las personas y dibuja en una card
//un parametro recibe un valor-variables
//se ejecuta la api
///estructura del signo pesos ${pp.name} interpolacion de cadenas
