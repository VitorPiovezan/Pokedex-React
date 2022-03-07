import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    margin: auto;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    width: 1000px;
    margin: auto;
`

//Header

export const Header = styled.header`
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

export const ButtonDropdown = styled.div`
    /* 
    border-radius:4px;
    padding: 12px;
    background: #707070; 
    border:1px solid #000000;
    width: 150px;
    color: #fff;
    font-weight: bold;
    font-size: 10pt; 
    */

    .Dropdown-root {
  position: relative;
    }

    .Dropdown-control {
    padding: 13px;
    width: 150px;
    font-weight: bold;
    font-size: 10pt; 
    position: relative;
    overflow: hidden;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    color: #333;
    cursor: default;
    outline: none;
    transition: all 200ms ease;
    }

    .Dropdown-control:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    }

    .Dropdown-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0;
    content: ' ';
    display: block;
    height: 0;
    margin-top: -ceil(2.5);
    position: absolute;
    right: 10px;
    top: 14px;
    width: 0
    }

    .is-open .Dropdown-arrow {
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
    }

    .Dropdown-menu {
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    max-height: 500px;
    overflow-y: auto;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    }

    .Dropdown-menu .Dropdown-group > .Dropdown-title{
    padding: 8px 10px;
    color: rgba(51, 51, 51, 1);
    font-weight: bold;
    text-transform: capitalize;
    }

    .Dropdown-option {
    box-sizing: border-box;
    color: rgba(51, 51, 51, 0.8);
    cursor: pointer;
    display: block;
    padding: 8px 10px;
    }

    .Dropdown-option:last-child {
    color: ${props => props.color};
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    }

    .Dropdown-option:hover {
    background-color: #f2f9fc;
    color: #333;
    }

    .Dropdown-option.is-selected {
    background-color: #f2f9fc;
    color: #333;
    }

    .Dropdown-noresults {
    box-sizing: border-box;
    color: #ccc;
    cursor: default;
    display: block;
    padding: 8px 10px;
    }

`
export const Pokemons = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
`
export const ViewAvancarHome = styled.div`
    margin-right: 40px;
    float: right;
    margin-bottom: 50px;
`

export const ButtonAvancarHome = styled.button`
    background-color: #4484ce;
    color: #fff;
    border-radius: 20px 20px 20px 0px;
    border: solid 0px;
    font-size: 15pt;
    padding: 10px;

`

export const ButtonBackHome = styled.button`
    background-color: #4484ce;
    float: left;
    color: #fff;
    border-radius: 20px 20px 20px 0px;
    border: solid 0px;
    font-size: 15pt;
    padding: 10px;

`

export const ViewAvancarPos = styled.div`
    width: 92%;
    margin: auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`

export const DivPokebola = styled.div`
    margin-top: 15px;
`

export const PokebolaAbertaImg = styled.img`
    position: absolute;
    margin-top: -10px;
    margin-left: -80px;
`


export const PokebolaFechadaImg = styled.img`
    position: absolute;
    margin-left: -80px;
`
