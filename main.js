
//Json Online/Flexível
//http://starts.sytes.net:7890/get_sensor_data

var arrayID = []; // todos os ids
var arrayIDSensor = [];
var arrayIPSensor = [];
var arrayData = [];
var arrayTypeSensor = [];
var arrayValue = [];

     

fetch('http://starts.sytes.net:7890/get_sensor_data')
.then(response => response.json())
.then(obj => {
    for (var i = 0; i < obj.rows.length; i++){
        arrayID.push(obj.rows[i].id);
        arrayIDSensor.push(obj.rows[i].id_sensor);
        arrayIPSensor.push(obj.rows[i].ip_sensor);
        arrayData.push(obj.rows[i].data);
        arrayTypeSensor.push(obj.rows[i].type_sensor);
        arrayValue.push(obj.rows[i].value);
    } 
    
    console.log(arrayValue)
    const idList = document.getElementById('id-list');
    arrayValue.forEach((element) => {
        const id = element;
        if (id) {
          const listItem = document.createElement('li');
          listItem.textContent = id;
          idList.appendChild(listItem);
        }
      });

    var ctx = document.getElementById("myChart").getContext("2d");
    // Criar o gráfico
    var myChart = new Chart(ctx, {
        type: "line", // Tipo de gráfico (bar, line, etc.)
        data: {
          labels: arrayValue.map(String), // Rótulos do eixo X (ids)
          datasets: [
            {
              label: "Values", // Rótulo do conjunto de dados
              data: arrayValue, // Dados do conjunto de dados (valores)
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Cor de fundo das barras
              borderColor: "rgba(75, 192, 192, 1)", // Cor da borda das barras
              borderWidth: 1, // Largura da borda das barras
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
})