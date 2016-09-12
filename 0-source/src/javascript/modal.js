var modal = document.getElementById('modal');
var ok = document.getElementById('ok');
var enviar = document.getElementById('enviar');

function toggleModal(){
     modal.classList.toggle('modal-on');
     enviar.classList.toggle('desabilitado');
}

ok.addEventListener("click", function(){
     toggleModal();
});

enviar.addEventListener("click", function(){
     toggleModal();
});