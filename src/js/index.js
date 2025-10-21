camposFormulario = document.querySelectorAll('.campo');

document.getElementById('btn-enviar').addEventListener('click', (e) => {
    e.preventDefault();
    camposFormulario.forEach(campo => {

        const verificarAlerta = campo.nextElementSibling;

        if (verificarAlerta && verificarAlerta.classList.contains('alerta')) {
        verificarAlerta.remove();
        }

        if(!campo.value.trim()) {
            const alerta = document.createElement('span');
            alerta.classList.add('alerta');
            alerta.textContent = 'Este campo é obrigatório.';
            campo.parentNode.insertBefore(alerta, campo.nextSibling);
            campo.style.borderColor =  '#ff4d4d'
        }
        else {
            campo.style.borderColor =  '#8ff981ff';
        }
    })
})