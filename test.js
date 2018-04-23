fetch("https://jul10l1r4.github.io/").then((data)=>{
		return data.text()
	})
		.then((m)=>{
			return m.match(/<title>((.*))<\/title>/gi)
		})
			.then(function(d){
         let a = document.querySelector("title")
         a = d[0]
				console.log(d)
			})
// window.document.pushState("objeto", "titulo", "link")
// Para carregar outra página dando ilusão de rapidez