let b = document.querySelector( `#conteudo` )
let c = document.querySelector( `.projetos` )
let d = document.querySelector( `.fale-conosco` )
//let e = document.querySelector( `.trabalho` )
//let f = document.querySelector( `.seguranca` )
//let g = document.querySelector( `.baixar` )
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const Scroll = () => {// Arrow function `ES6`, calcula a posição para que mostre o efeito
    if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > b.offsetTop) {
			b.setAttribute( `style`, `opacity:1;transition-duration:1s` )
		}else{
			b.setAttribute( `style`, `opacity:0;transition-duration:1s` )
		}
		if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > c.offsetTop) {
			c.setAttribute( `style`, `opacity:1;transition-duration:1s` )
		}else{
			c.setAttribute( `style`, `opacity:0;transition-duration:1s` )
		}
		if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > d.offsetTop) {
			d.setAttribute( `style`, `opacity:1;transition-duration:1s;transform: translateX(0px)` )
		}else{
			d.setAttribute( `style`, `opacity:0;transform: translateX(-100px);transition-duration:1.3s` )
		}/*
		if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > e.offsetTop) {
			e.setAttribute( `style`, `opacity:1;transition-duration:1s` )
		}else{
			e.setAttribute( `style`, `opacity:0;transition-duration:1s` )
		}
		if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > f.offsetTop) {
			f.setAttribute( `style`, `opacity:1;transition-duration:1s` )
		}else{
			f.setAttribute( `style`, `opacity:0;transition-duration:1s` )
		}
		if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > g.offsetTop) {
			g.setAttribute( `style`, `opacity:1;transition-duration:1s` )
		}else{
			g.setAttribute( `style`, `opacity:0;transition-duration:1s` )
		}*/
}
// Ativa a nossa função
setTimeout(
	window.addEventListener( `scroll`, Scroll ),500
)
const sobre = () => {
  window.scroll({ // Função nativa dos browsers
	  top: document.querySelector( `#conteudo` ).offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
   });
}
document.querySelector( `#to` ).addEventListener( `click`, sobre );
// Função de rolagem suave
const go = (elemento) => {// Arrow function levando um parâmetro que será um seletor como o de css
  let vivo = document.querySelector(elemento)// Pegará esse seletor e retornará um elemento vivo
  window.scroll({ // Função nativa dos browsers
	  top: vivo.offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery
} 

