import styled from 'styled-components'

export const Container = styled.div `
    background: #dcdedc;
    padding: 20px;
    border-radius: 10px;

    h1 {
        color: #000;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        outline: none;
        padding-left: 10px;
    }
`

export const AddButton = styled.button `
    background-color: #6cf000;
    color: #000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    margin-left: 10px;
    border-radius: 10px;
    transition: all 0.3s;

    &:hover {
        background-color: #1ebd1e;
    }
`

export const Product = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: 500;
        font-size: 15px;
    }
`

export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`

export const ToggleButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    margin-right: 10px;  // Adiciona um espaço entre os botões
`

export const TypeContainer = styled.div `
    display: flex;
    align-items: center;
    margin-top: 30px;
`

export const ProductList = styled.div `
    margin-top: 20px;
    max-height: 300px; 
    overflow-y: auto; 
`
