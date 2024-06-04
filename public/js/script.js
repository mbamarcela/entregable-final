document.addEventListener("DOMContentLoaded", function() {
  fetch('https://entregable-final-8oa3.onrender.com/CRUDRepo/ConsultarUsuarios')
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error));

  function mostrarData(data) {
    console.log("Data: " , data);
    let body = "";
    for (var i = 0; i < data.rows.length; i++) {
      body += `<tr>
        <td>${data.rows[i].id_usuario}</td>
        <td>${data.rows[i].nombre}</td>
        <td>${data.rows[i].correo}</td>
        </tr>`;
    }
    document.getElementById('data').innerHTML = body;
  }
});

