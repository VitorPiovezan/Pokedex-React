import styled from 'styled-components';

export const Container = styled.div`
`;

export const Main = styled.main`
    width: 1000px;
    margin: auto;
`

//Header

export const Header = styled.div`
    top: 0;
    background-color: #4484CE;
    height: 80px;
    width: 100%;
`

export const Menu = styled.div`
    top: 0;
    height: 80px;
    width: 1000px;
    margin: auto;
    display: flex;
`

export const Imagem = styled.img`
    height: 60px;
    vertical-align: middle;
    margin: auto;
`

//Search

export const Search = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #909090;
    justify-content: center;
`

export const SearchTitle = styled.p`
    font-size: 12pt;
    padding: 15px;
    margin-top: 10px;
    color: ${props => props.color};
`

export const SearchName = styled.div`
    /* background-color: #ccc; */
    width: 40%;
    height: 85%;
`

export const SearchAdvanced = styled.div`
    /* background-color: #ddd; */
    width: 500px;
    height: 85%; 
`

export const SearchNameInput = styled.input`
    border-radius:4px;
    padding: 12px;
    background: #edf4fc; 
    border:1px solid #4484ce;
    width: 80%;
`

export const Input = styled.div`
    padding: 0px 15px;
`

export const DivButtonSearch = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 15px;
    justify-content: space-between;
`

export const ButtonDropdown = styled.input`
    border-radius:4px;
    padding: 12px;
    background: #707070; 
    border:1px solid #000000;
    width: 150px;
`
export const Pokemons = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
`