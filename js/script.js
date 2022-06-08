let posts = new Map()

function leerJSON() {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    if (response.ok)
      return response.json()
    else
      throw new Error(response.status)
  })
  .then(data => {
    procesar(data)
  })
  .catch(err => {
    procesar("ERROR: ", err.status)
  });
}

function procesar(datos) {
  for (let i in datos) {
    posts.set(datos[i].id, datos[i])
  }
  document.getElementById("datos").innerText = "Tenemos "+posts.size+ " Posts"
}

function verTodos() {
  let capaPost = document.getElementById("listaPost")
  capaPost.innerHTML = ""
  for (let post of posts.values()) {
    let nodo = document.createElement("p")
    let texto = "Id Usuario: " + post.userId +
      " Id Post: " + post.id + "<br>" + 
      " Titulo: " + post.title + "<br>" +
      " Post: " + post.body
    nodo.innerHTML = texto
    capaPost.appendChild(nodo)
  }
}

function verUsuario() {
  let capaPost = document.getElementById("listaPost")
  capaPost.innerHTML = ""
  let num = document.getElementById("numero").value
  if (num=="") {
    capaPost.innerHTML = "Debes escribir número de usuario"
    return
  }

  for (let post of posts.values()) {
    if (post.userId == num) {
      let nodo = document.createElement("p")
      let texto = "Id Usuario: " + post.userId +
        " Id Post: " + post.id + "<br>" + 
        " Titulo: " + post.title + "<br>" +
        " Post: " + post.body
      nodo.innerHTML = texto
      capaPost.appendChild(nodo)
    }
  }
}

function verPost() {
  let capaPost = document.getElementById("listaPost")
  capaPost.innerHTML = ""
  let num = document.getElementById("numero").value
  if (num=="") {
    capaPost.innerHTML = "Debes escribir número de post"
    return
  }
  let post = posts.get(parseInt(num))

  let nodo = document.createElement("p")
  let texto = "Id Usuario: " + post.userId +
    " Id Post: " + post.id + "<br>" + 
    " Titulo: " + post.title + "<br>" +
    " Post: " + post.body
  nodo.innerHTML = texto
  capaPost.appendChild(nodo)
}