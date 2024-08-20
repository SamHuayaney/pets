document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('side-nav').style.width = '250px';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('side-nav').style.width = '0';
});

document.getElementById('tipo-mascota').addEventListener('change', function() {
    var tipo = this.value;
    var categoria = document.getElementById('categoria');
    categoria.innerHTML = '';

    if (tipo) {
        var opciones = {
            perro: ['Ropa', 'Juguetes', 'Accesorios'],
            gato: ['Ropa', 'Juguetes', 'Accesorios'],
            pajaro: ['Jaulas', 'Juguetes', 'Accesorios']
        };

        opciones[tipo].forEach(function(item) {
            var option = document.createElement('option');
            option.value = item.toLowerCase();
            option.textContent = item;
            categoria.appendChild(option);
        });
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.side-nav').classList.toggle('open');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.side-nav').classList.remove('open');
});
