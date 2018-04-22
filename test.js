fetch("https://jul10l1r4.github.io/").then(function(data){
	return data.text()}).then(function(m){return m.match(/<title>*[\s\S]*<\/title>/gi)})
.then(function(d){
	console.log(d[0])
})
// window.document.pushState("objeto", "titulo", "link")
