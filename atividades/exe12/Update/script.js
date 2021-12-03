const personagemContador = document.getElementById('personagem');
const planetaContador = document.getElementById('planeta');
const luaContador = document.getElementById('lua');
const naveContador = document.getElementById('nave');

preencherContador();
preencherTabela();

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(desenharGrafico);

     async function desenharGrafico() {
        let response = await swapiGet('vehicles/');
        let vehiclesArray = response.data.results

        let dataArray = [];
        dataArray.push(['Veiculos','Passageiros']);
        vehiclesArray.forEach(vehicles =>{
          dataArray.push([vehicles.name,Number(vehicles.passengers)]);
        });
      
        let data = google.visualization.arrayToDataTable(dataArray);

        let options = {
          title: 'Veiculos',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        let chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

function preencherContador(){
    Promise.all([swapiGet('people/'),swapiGet('vehicles/'),swapiGet('planets/'),swapiGet('starships/')])
    .then(function(results){
    personagemContador.innerHTML = results[0].data.count;
    luaContador.innerHTML = results[1].data.count;
    planetaContador.innerHTML = results[2].data.count;
    naveContador.innerHTML = results[3].data.count;  
    });
}

async function preencherTabela(){
    const response = await swapiGet('films/');
    const tableData = response.data.results;
    tableData.forEach(film => {
        document.getElementById('tableFilms').innerHTML +=
        `<tr><td>${film.title}</td>
        <td>${moment(film.release_date).format('DD/MM/YYYY')}</td>
        <td>${film.director}</td>
        <td>${film.episode_id}</td></tr>`;
    });
    console.log(tableData);
}

function swapiGet(param){
    return axios.get(`https://swapi.dev/api/${param}`);
}