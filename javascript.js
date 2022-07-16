const seta1 = document.querySelector('.seta1 ion-icon');
const rodape = document.querySelector('footer');
const rodapeNav = document.querySelectorAll('footer nav a');
const [x,y,z,w] = rodapeNav;
const areaMenu = document.querySelector('header#cabecalho .botao-menu');
const botaoMenu = document.querySelector('header#cabecalho .botao-menu .botao-menu-interno');
const spanLabel1 = document.querySelector('span.traco1');
const spanLabel2 = document.querySelector('span.traco2');
const spanLabel3 = document.querySelector('span.traco3');
const spanLabelGeral = document.querySelectorAll('span.traco');
const [a,b,c] = spanLabelGeral;
const body = document.querySelector('body');
const darkModeLabel = document.querySelector('header#cabecalho nav.cabecalho-principal label');
const darkModeBall = document.querySelector('header#cabecalho nav.cabecalho-principal label #ball');
const darkModeLabel1 = document.querySelector('nav.cabecalho-oculto label');
const darkModeBall2 = document.querySelector('nav.cabecalho-oculto label #ball2');
const parteMeio1 = document.querySelector('.parte-meio');
const parteMeio2 = document.querySelector('.parte-meio2');
const parteMeio3 = document.querySelector('.parte-meio3');

const h1 = document.querySelector('main#container section#parte-inicial h1');
const p = document.querySelector('main#container section#parte-inicial p');

const cabecalhoOculto = document.querySelector('.botao-menu .cabecalho-oculto');


const titulo = ['S','u','a','s',' ','c','o','n','t','a','s','<br>','d','e','s','c',
'o','m','p','l','i','c','a','d','a','s'];
const paragrafo = ['U','s','a','d','o',' ','p','o','r',' ','m','a','i','s',' ','d','e',' ','1',' ','m',
'i','l','h','ã','o',' ','d','e',' ','p','e','s','s','o','a','s',' ','o',' ','F','i','n','a','n','s',' ',
'é',' ','u','m','a',' ','f','e','r','r','a','m','e','n','t','a',' ','o','n','l','i','n','e','<br>','q',
'u','e',' ','v','a','i',' ','f','a','c','i','l','i','t','a','r',' ','s','u','a',' ','v','i','d','a',
' ','f','i','n','a','n','c','e','i','r','a','.'];


//alert(titulo.length);

let h = 0;
let pr = 0;

setInterval(() => {
    if(!(h >= titulo.length)){
        h1.innerHTML += titulo[h];
        h += 1
    }
    if(!(pr >= paragrafo.length)){
        p.innerHTML += paragrafo[pr];
        pr += 1
    }
    if(h >= titulo.length && pr >= paragrafo.length){
        return;
    };
}, 80);


document.addEventListener('click', e => {

    const element = e.target;
    if(element === darkModeLabel || element === darkModeBall){
        console.log(true);
    }else{
        console.log(false);
    }
    console.log(element);

    if(element === seta1){
        scroll({
            top: 0,
            behavior: 'smooth'
        });
    } else if(element === botaoMenu || element === a || element === b || element === c){
        //label.setAttribute('id', 'menu-escondido');

        console.log('Ok');

        areaMenu.classList.toggle('menu-escondido');
        spanLabel1.classList.toggle('traco1Modificado');
        spanLabel2.classList.toggle('traco2Modificado');
        spanLabel3.classList.toggle('traco3Modificado');
        body.classList.toggle('overflow-body');
        
        if(areaMenu.classList.contains('menu-escondido')){
            cabecalhoOculto.setAttribute('id', 'cabecalho-oculto-modificado');
        } else{
            cabecalhoOculto.removeAttribute('id');
        }
    } else if(element === darkModeLabel || element === darkModeBall || element === darkModeLabel1
        || element === darkModeBall2){
        console.log('Opaaaaaaaaaaaaaa')
        parteMeio1.classList.toggle('dark-mode-partes-meio-fundo');
        parteMeio2.classList.toggle('dark-mode-partes-meio-fundo');
        parteMeio3.classList.toggle('dark-mode-partes-meio-fundo');
        parteMeio1.classList.toggle('dark-mode-partes-meio-texto');
        parteMeio2.classList.toggle('dark-mode-partes-meio-texto');
        parteMeio3.classList.toggle('dark-mode-partes-meio-texto');
        rodape.classList.toggle('dark-mode-partes-meio-fundo');
        x.classList.toggle('dark-mode-partes-meio-texto');
        y.classList.toggle('dark-mode-partes-meio-texto');
        z.classList.toggle('dark-mode-partes-meio-texto');
        w.classList.toggle('dark-mode-partes-meio-texto');
        seta1.classList.toggle('dark-mode-seta1');
    }
});