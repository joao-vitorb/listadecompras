import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton, TypeContainer, ProductList, ToggleButton } from './styles'

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueiNoBotao() {
    const nomeProduto = inputRef.current.value.trim();
    if (nomeProduto) {
      setProdutos([{ id: v4(), nome: nomeProduto, completed: false }, ...produtos]);
      inputRef.current.value = '';
    }
  }
  
  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }

  function toggleCompleted(id) {
    setProdutos(produtos.map(produto => 
      produto.id === id ? { ...produto, completed: !produto.completed } : produto
    ));
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <TypeContainer>
        <input placeholder="Digite o produto" ref={inputRef} />
        <AddButton onClick={cliqueiNoBotao}>Adicionar ➕</AddButton>
      </TypeContainer>

      <ProductList>
        {produtos.map(produto => (
          <Product key={produto.id}>
            <p>{produto.nome}</p>
            <div>
              <ToggleButton onClick={() => toggleCompleted(produto.id)}>
                {produto.completed ? '✔️' : '❌'}
              </ToggleButton>
              <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
            </div>
          </Product>
        ))}
      </ProductList>
    </Container>
  )
}

export default Home
