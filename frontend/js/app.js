const btnAlarma = document.getElementById("btnAlarma");
const mensaje = document.getElementById("mensaje");

btnAlarma.addEventListener("click", function() {
    mensaje.classList.remove("oculto");
    btnAlarma.disabled = true;
    btnAlarma.innerText = "ALARMA ACTIVADA ✅";

    alert("🚨 Alarma de pánico activada con éxito");
    console.log("Alerta enviada correctamente");
});

const form = document.getElementById("formIncidente");
const confirmacion = document.getElementById("confirmacion");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    confirmacion.classList.remove("oculto");
    form.reset();

    alert("✅ Incidente registrado con éxito");
    console.log("Incidente registrado");
});
