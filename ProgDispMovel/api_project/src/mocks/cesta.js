import logo from '../../assets/logo.png';

import tomate from "../../assets/legumes_e_frutas/TOMATE.jpg"
import brocolis from "../../assets/legumes_e_frutas/BROCOLIS.jpg"
import batata from "../../assets/legumes_e_frutas/BATATA.jpg"
import pepino from "../../assets/legumes_e_frutas/PEPINO.jpg"
import abobora from "../../assets/legumes_e_frutas/ABOBORA.jpg"

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;