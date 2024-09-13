const getPosts = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts"; // URL que proporciona datos JSON
      const respuesta = await fetch(url);   // Realiza una solicitud HTTP
      const posts = await respuesta.json();     // Convierte la respuesta en un objeto JSON
  
      const postDataDiv = document.getElementById('post-data'); // Obtener el div con el id 'post-data'
      const postList = document.createElement('ul'); // Crear la lista desordenada
  
      posts.forEach(post => { // Iterar sobre los posts
        const postItem = document.createElement('li'); // Crear un ítem de lista
        postItem.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`; // Añadir el título y el cuerpo del post al ítem
        postList.appendChild(postItem); // Añadir el ítem a la lista
      });
  
      postDataDiv.appendChild(postList); // Añadir la lista al div
  
    } catch (error) {
      console.error("Se produjo un error:", error);
    }
  };
  
//   No llamamos a la función, porque se activa al apretar el botón.