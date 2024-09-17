let inventario = [
    { nome: 'Teclado', preco: 100, emEstoque: true },
    { nome: 'Mouse', preco: 50, emEstoque: false },
    { nome: 'Monitor', preco: 600, emEstoque: true },
    { nome: 'Cadeira Gamer', preco: 1200, emEstoque: true },
    { nome: 'Impressora', preco: 300, emEstoque: false },
    { nome: 'Webcam', preco: 150, emEstoque: true },
    { nome: 'Microfone', preco: 200, emEstoque: true },
    { nome: 'Fone de Ouvido', preco: 80, emEstoque: false },
    { nome: 'HD Externo', preco: 400, emEstoque: true },
    { nome: 'Pen Drive', preco: 25, emEstoque: true },
    { nome: 'Notebook', preco: 2500, emEstoque: true },
    { nome: 'Mesa', preco: 500, emEstoque: false },
    { nome: 'Cadeira Escritório', preco: 350, emEstoque: true },
    { nome: 'Projetor', preco: 800, emEstoque: false },
    { nome: 'Adaptador USB', preco: 30, emEstoque: true }
  ];
  
  inventario.push({ nome: 'Impressora 3D', preco: 1500, emEstoque: true });
  inventario.pop();
  inventario[0].preco = 120; 
  inventario[2].emEstoque = false;
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].emEstoque) {
      console.log(inventario[i].nome + ' está em estoque.');
    }
  }
  let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
  console.log(produtosEmEstoque);
