window.addEventListener("load", (event) => { getInfo() });

let infoFiestas = document.querySelector('#info-fiestas');

function getInfo() {
  fetch('fiestas-castilla-leon.json')
    .then(data => data.json())
    .then(data2 => { mostrarTabla(data2) })
    .catch(error => { console.error('Error: ' + error) })
}

function mostrarTabla(datos) {
  infoFiestas.innerHTML = '';

  datos.forEach(element => {
    infoFiestas.innerHTML += `
      <td>${element.PROVINCIA}</td>
      <td>${element.LOCALIDAD}</td>
      <td>${element.DENOMINACIÓN}</td>
      <td>${element.Regional}</td>
      <td>${element.Nacional ? element.Nacional : ""}</td>
      <td>${element.Internacional ? element.Internacional : ""}</td>
    `;
  });
}