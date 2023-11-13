function getData() {
    fetch("http://starts.sytes.net:7890/get_sensor_data", {})
      .then((response) => response.json())
      .then((data) => {
        if (data.rows && Array.isArray(data.rows)) {
          const ids = data.rows.map((row) => row.id);
          const values = data.rows.map((row) => parseFloat(row.value));
          

          createLineChart(ids, values, data,);
        } else {
          console.log("Nenhuma linha encontrada ou formato inválido.");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter dados:", error);
      });
  }

  function createLineChart(id, values, data,) {
    const ctx = document.getElementById("lineChart").getContext("2d");

    // Cria o gráfico de linha
    const lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: id,
        datasets: [
          {
            label: "IDS",
            data: id,
            fill: false,
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Cor de fundo das barras
            borderColor: "rgba(75, 192, 192, 1)", // Cor da borda das barras
            borderWidth: 5, // Largura da borda das barras
           
          },
          {
            label: "Valores",
            data: values,
            fill: false,
            backgroundColor: "rgb(139, 195, 74)", // Cor de fundo das barras
            borderColor: "rgb(139, 195, 74)", // Cor da borda das barras
            borderWidth: 5, // Largura da borda das barras
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "bottom",
          },
          y: {
            type: "linear",
            position: "left",
          },
        },
      },
    });
  }

  getData();