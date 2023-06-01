import React from "react";
import "./Home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";


import Slider from 'react-slick';

import LinkedinButton from "./components/LinkedinButton";
import CurriculumButton from "./components/CurriculumButton";

import logo from "./logo.png"; // Importe a imagem


function Home() {
    
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Esconde as setas de navegação
    initialSlide: 0,
    variableWidth: true
  };


    return (
    <div className="App">
        <header className="App-header">
        <div className="App-header-flex">
          <img className="App-header-logo" src={logo} alt="Logo" />
          <div className="App-header-div">
            <div className="App-header-content">
              <p className="App-titulo">
                Escola da Nuvem  Turma TIVIT G3
              </p>
            </div>
          </div>
        </div>
        </header>
        <body>

        <div className="container">
      <div className="title">
        <Typography variant="h4"><spam>Sobre o Projeto</spam></Typography>
      </div>
      <div className="title">
        <Typography variant="h5"><spam>Detalhes de Software</spam></Typography>
      </div>
      <div className="subtitle">
        <Typography variant="body1">
          Este projeto foi desenvolvido com o objetivo de criar um portfolio para o Grupo 3 da Turma TIVIT da Escola da Nuvem. Para alcançar esse objetivo, utilizamos o componente Slider Carousel para exibir as informações de cada membro do grupo.
        </Typography>
      </div>

      <div className="subtitle">
        <Typography variant="body1">
          O projeto foi desenvolvido utilizando React, uma biblioteca JavaScript popular para a construção de interfaces de usuário interativas. React permite a criação de componentes reutilizáveis e gerencia eficientemente o estado da aplicação.
        </Typography>
      </div>

      <div className="subtitle">
        <Typography variant="body1">
          Além de React, utilizamos HTML e CSS para estruturar e estilizar a página. HTML é uma linguagem de marcação utilizada para definir a estrutura e os elementos da página web. CSS é uma linguagem de estilo que permite a personalização visual dos elementos HTML.
        </Typography>
      </div>

      <div className="subtitle">
        <Typography variant="body1">
          Também utilizamos alguns elementos da biblioteca Material-UI, uma biblioteca de componentes para React que oferece uma ampla variedade de estilos pré-definidos e componentes prontos para uso. Isso nos permitiu adicionar botões estilizados e outros elementos visuais ao projeto de forma rápida e fácil.
        </Typography>
      </div>

      <div className="subtitle">
        <Typography variant="body1">
          No geral, o projeto foi desenvolvido utilizando uma combinação de React, HTML, CSS e a biblioteca Material-UI para criar um portfolio interativo e visualmente atraente para o Grupo 3 da Turma TIVIT.
        </Typography>
      </div>

      <div className="title">
        <Typography variant="h5"><spam>Detalhes de Arquitetura AWS</spam></Typography>
      </div>
      <div className="imagem2">
        <img src="/arquitetura.png" alt="Arquitetura AWS" />
      </div>
      <div className="subtitle">
        <Typography variant="body1">
          Ao desenvolver um projeto React, decidimos utilizar a Amazon Web Services (AWS) para hospedar e gerenciar o aplicativo ReactJs. Uma das etapas cruciais foi o armazenamento dos arquivos no serviço de armazenamento de objetos S3 da AWS. O S3 é um serviço escalável e altamente disponível, ideal para hospedar os arquivos estáticos, como HTML, CSS e JavaScript. Criamos um bucket S3 para armazenar todos esses arquivos do projeto.
        </Typography>
      </div>
      <div className="subtitle">
        <Typography variant="body1">
          Para garantir a segurança e o gerenciamento adequado do conteúdo, decidimos usar o serviço CloudFront da AWS. O CloudFront é uma Content Delivery Network (CDN) que ajuda a melhorar a velocidade e a disponibilidade do aplicativo. Além disso, o serviço oferece recursos de segurança, como a proteção contra ataques DDoS e a criptografia de dados em trânsito.
        </Typography>
      </div>
      <div className="subtitle">
        <Typography variant="body1">
          Configurar o CloudFront para proteger o bucket S3 foi uma etapa importante. Com o CloudFront, pudemos criar políticas de acesso para restringir quem pode acessar o conteúdo React. Também configuramos opções de cache para otimizar o desempenho do aplicativo, garantindo que o conteúdo seja entregue de forma rápida aos usuários.
        </Typography>
      </div>
      <div className="subtitle">
        <Typography variant="body1">
          Outra vantagem do CloudFront é a sua capacidade de fornecer conteúdo de forma global. Com uma rede de distribuição de borda global da AWS, o App React pode ser entregue rapidamente aos usuários em diferentes partes do mundo, reduzindo a latência e melhorando a experiência do usuário.
        </Typography>
      </div>
      <div className="subtitle">
        <Typography variant="body1">
          Em resumo, ao subir o projeto React para a AWS, utilizamos o serviço S3 para armazenar os arquivos estáticos e o CloudFront para proteger e gerenciar o conteúdo. Essa combinação de serviços permitiu ter um aplicativo seguro, escalável e de alto desempenho. A AWS oferece uma ampla gama de serviços que podem ser aproveitados para hospedar, proteger e gerenciar aplicativos web de forma eficiente.
        </Typography>
      </div>
      </div>


          
        <Slider {...settings}>
            <div style={{ width: 250 }}>
            <h3>Matheus Natividade</h3>
            <p>Formado em Sistemas de Informação com experiência em suporte técnico e gestão de acessos e segurança. Conhecimentos em Cloud, DevOps e Cibersegurança. Certificações (AZ-900 e SC-900). Buscando oportunidades em áreas como DevOps, DevSecOps, Cibersegurança e Cloud para desenvolver habilidades.</p>
            <p>Função no Squad: DevOs</p>

            <CurriculumButton />
            <LinkedinButton link="matheusnatividade"/>
            </div>
            <div>
            <h3>Filipe Mesel</h3>
            <p>Desenvolvedor de software com formação em Engenharia de Controle e Automação e mestrando em Ciências da Computação. Experiência em desenvolvimento de sistemas com foco em firmwares para IoT e aplicações Back-End. Habilidades em Java, Python, C/C++, NodeJs e ReactJS, além de conhecimentos em microcontroladores e tecnologias de cloud AWS.</p>
            <p>Função no Squad: Back end Developer</p>
            
            <CurriculumButton />
            <LinkedinButton link="filipe-mesel-lobo-costa-cardoso"/>
            </div>
            <div>
            <h3>Juliana Aguiar</h3>
            <p>Juliana Aguiar é uma engenheira eletrônica com 10 anos de experiência e pós-graduação em Engenharia e Gestão da Produção e Automação Industrial. Ela participou de projetos como a construção da Arena da Barra da Tijuca e o Parque Maria Lenk, implementando sistemas de automação. Juliana também atuou em um projeto internacional de desenvolvimento de software na Chemtech e agora concentra-se na gestão de projetos na Ternium Brasil. Suas competências incluem relacionamento interpessoal, criatividade e resolução de problemas.</p>
            <p>Função no Squad: Front end developer</p>
            <CurriculumButton />
            <LinkedinButton link="juliana-aguiar-eng"/>

            </div>
            <div>
            <h3>André Schumacher</h3>
            <p>Graduado em Engenharia Civil e Análise e Desenvolvimento de Sistemas. 
              Oferece serviços abrangentes, incluindo análise de dados nos negócios, 
              desenvolvimento de aplicativos para Android e iOS, software personalizado e design de 
              experiência do usuário (UX). Experiência também abrange o desenvolvimento de SaaS, 
              bancos de dados, teste de software e web design. Preparado para enfrentar desafios 
              em várias áreas de desenvolvimento.</p>
              <p>Função no Squad: Scrum master</p>
            <CurriculumButton />
            <LinkedinButton link="andre-luar"/>
            </div>
            
        </Slider>
        </body>
        <footer>
        Todos os direitos reservados
        </footer>
    </div>
    );
}
export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () =>{
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Home;