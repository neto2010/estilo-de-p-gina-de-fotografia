(function () {
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
          window.scrollTo({
            top: 0,
           });
        });
    });
})();

(function() {
    var igScript = document.createElement('script');
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;
    document.body.appendChild(igScript);
})();