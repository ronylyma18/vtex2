import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;
    .logo{
        text-align:center;

    }

    .cliCadastro{
        display:none;
        height:50px;
        width: 100%;
        background:#e2e2e2;
        padding:15px;
        margin:10px;
    }
    section{
        height:100vh;
        width: 100%;
        background:#e2e2e2;
        display:flex;
        padding:15px;
        margin:10px;

        .product-content{
            display:grid;
            text-align:center;
            height:300px;
            background:#fff;
            border-radius:17px;
            padding: 15px !important;
            margin:10px;

        }
        .product-content img{
            text-align:center;
            margin-left: 10px;

        }

        
    }

`