"use strict";


var salys = [
  { country: "JAV", area: 9834000, population: 332802010 },
  { country: "Lietuva", area: 65300, population: 2689862 },
  { country: "Latvija", area: 64589, population: 1866789 },
  { country: "Estija", area: 45339, population: 1325285 },
  { country: "Kanada", area: 9985000, population: 38047777 },
];



for (var i = 0; i < salys.length; i++){
  info(salys[i].country, salys[i].area, salys[i].population);
}

function info(country, area, population){
  console.log(i);
  var plotasVienamGyventojui = (area / population) * 1000000;
  var gyventojuSkaicius = population / 1000000;

  console.log("Šalis: " + country + ", joje gyvena " + gyventojuSkaicius.toFixed(2) + " mln. gyventojų.");
  console.log("Valstybės plotas: " + area + " km², plotas tenkantis vienam gyventojui: " + plotasVienamGyventojui.toFixed(2) + " m².");

}
