document.getElementById('calcularCotizacion').addEventListener('click', function() {
    const precio = parseFloat(document.getElementById('precio').value);
    const porcentajePagoInicial = parseFloat(document.getElementById('porcentajePagoInicial').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    if (isNaN(precio) || isNaN(porcentajePagoInicial) || isNaN(plazo)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const pagoInicial = (precio * (porcentajePagoInicial / 100)).toFixed(2);
    const totalFinanciar = (precio - pagoInicial).toFixed(2);
    const pagoMensual = (totalFinanciar / plazo).toFixed(2);

    document.getElementById('pagoInicial').textContent = pagoInicial;
    document.getElementById('totalFinanciar').textContent = totalFinanciar;
    document.getElementById('pagoMensual').textContent = pagoMensual;
});