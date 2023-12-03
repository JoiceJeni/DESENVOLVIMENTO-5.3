// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "LOJA DE PRODUTOS SEM GLUTEN";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>TUDO SEM FARINHA DE TRIGO</h2>
    <img src="https://media.istockphoto.com/id/1166782442/pt/foto/selection-of-gluten-free-products-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=r_sZsZWXzHHi51g3s8mmjF7OZavOFC6wWATDAZsDFTU=" alt="x-salada">
    <p>TODOS OS PRODUTOS LIVRES DE FARINHA DE TRIGO E DE CONTAMINAÇÃO CRUZADA.</p>
    <p>TUDO LIVRE PARA CELÍACOS</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)