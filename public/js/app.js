let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(nombre + " agregado 🛒");
}

function mostrarCarrito() {
  let contenedor = document.getElementById("carrito");
  let total = 0;

  contenedor.innerHTML = "";

  carrito.forEach((p, i) => {
    contenedor.innerHTML += `
      <div class="card">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button onclick="eliminar(${i})">Eliminar</button>
      </div>
    `;
    total += p.precio;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

function eliminar(i) {
  carrito.splice(i, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}