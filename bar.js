//ManC you have to use these variable names. The contain the data from prev page. 
window.onload = function(){
  // var name = prompt("Do you want to submit?");
  var PICTMUN = localStorage.getItem("MUN");
var PISB = localStorage.getItem("PISB");
var PASC = localStorage.getItem("ACM");
var BnECell= localStorage.getItem("E");
var PICTRobototics = localStorage.getItem("Robo");
var Pictoreal = localStorage.getItem("Picto");
var ArtCircle = localStorage.getItem("Art");
var NSS = localStorage.getItem("NSS");
var TedXPICT = localStorage.getItem("TED");
var DebSoc = localStorage.getItem("Debsoc");

  
  var obj = 
    { 'MUN': PICTMUN ,
    'PISB':  PISB,
      'ACM':  PASC ,
      'E CELL': BnECell ,
      'ROBOTICS': PICTRobototics ,
     'ART CIRCLE':  ArtCircle ,
      'NSS': NSS ,
      'TEDx': TedXPICT ,
      'DEBSOC': DebSoc ,};
  
  var arr = [];

  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          arr.push(obj[key]);
      }
  }
  
   arr=arr.sort();
  arrr=arr.reverse();
  var b= arrr[0];
  for( var a in obj){
     var x
  };

  document.getElementById('output').innerHTML = "The highest value for the selected club is "+b;
}

var PICTMUN = localStorage.getItem("MUN");
var PISB = localStorage.getItem("PISB");
var PASC = localStorage.getItem("ACM");
var BnECell= localStorage.getItem("E");
var PICTRobototics = localStorage.getItem("Robo");
var Pictoreal = localStorage.getItem("Picto");
var ArtCircle = localStorage.getItem("Art");
var NSS = localStorage.getItem("NSS");
var TedXPICT = localStorage.getItem("TED");
var DebSoc = localStorage.getItem("Debsoc");
var Pictoreal = localStorage.getItem("Picto");

const data = [
    { name: 'MUN', score: PICTMUN*10 },
    { name: 'PISB', score: PISB*10 },
    { name: 'ACM', score: PASC*10 },
    { name: 'E CELL', score: BnECell*10 },
    { name: 'ROBOTICS', score: PICTRobototics*10 },
    { name: 'ART CIRCLE', score: ArtCircle*10 },
    { name: 'NSS', score: NSS*10 },
    { name: 'TEDx', score: TedXPICT*10 },
    { name: 'DEBSOC', score: DebSoc*10 },
    { name: 'PICTOREAL', score: Pictoreal*10 }

  ];
  
  const width = 1500;
  const height = 450;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  var colors= d3.schemeCategory20c;
  
  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const y = d3.scaleLinear()
    .domain([0, 100]).nice()
    .range([height - margin.bottom, margin.top])
  
  svg
    .append("g")
    .attr("fill", color= "#2C3E50")
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.score, b.score)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.score))
      .attr('title', (d) => d.score)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.score))
      .attr("width", x.bandwidth());
  
  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr("font-size", '20px')
  }
  
  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].name))
      .attr("font-size", '20px')
  }
  
  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();