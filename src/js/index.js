document.getElementById('btn-enviar').addEventListener('click', function() {
    const campos = [
        { id: 'name', nome: 'Nome completo'},
        { id: 'email', nome: 'Email'},
        { id: 'tel', nome: 'Telefone'},
        { id: 'msg', nome: 'Mensagem'},
    ]

    campos.forEach(campo => {
        const input = document.getElementById(campo.id)

        const alertaAntigo = input.nextSibling;
        
        if (alertaAntigo && alertaAntigo.classList && alertaAntigo.classList.contains('alerta')) {
        alertaAntigo.remove();
        }

        if (!input.value.trim()) {
            const alerta = document.createElement('span');
            alerta.textContent = 'Campo obrigatório';
            alerta.classList.add('alerta');
            input.parentNode.insertBefore(alerta, input.nextSibling);

            input.style.borderColor = 'red';
        }

        else {
            input.style.borderColor =  '#8ff981ff';
        }
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('msg').value = '';
});