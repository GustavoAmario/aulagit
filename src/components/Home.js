import React from "react";
import './Home.css'
import IlustracaoHome from "../imagens/IlustracaoHome.svg";

function Home(){
    return(
        <div>
        <h1>Gerenciamento de Ativos</h1>
        <section className="cartões">
        <img src={IlustracaoHome} alt="" />
        <div className="cartao">
            <h1>Ambientes</h1>
            <p>Edite e adicone seus ambientes, além da opção de atribuir seus tipos para uma melhor identificação</p>
        </div>
        <div className="cartao">
            <h1>Categorias</h1>
            <p>Crie categorias adicionando seus nomes e descrições personalizadas</p>
        </div>
        <div className="cartao">
            <h1>Ativos</h1>
            <p>Descubra a localização de seus ativos</p>
        </div>
        <div className="cartao">
            <h1>Usuários</h1>
            <p>Tenha controle e gerencie os usuários, como as suas senhas, nomes e o tipo</p>
        </div>
        </section>
        </div>
    );
}

export default Home;
