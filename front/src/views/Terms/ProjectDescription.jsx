import React from "react";
import {
    Button,
    Col
  } from "reactstrap";
import Header from "./Header";
import { Redirect } from 'react-router-dom';
import modelo_gameficacao from '../../assets/img/modelo_gameficacao.png';

class ProjectDescription extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            redirect: false
        }
        this.redirect = this.redirect.bind(this);
    }
    
    redirect(){
        this.setState({redirect: true});
    }

    render(){
        return(
            <div>
            <Header/>
            <Col sm="50" md={{ size: 8, offset: 2 }} className="text-justify">
            <p className= " text-center font-weight-bold " style={{fontFamily: 'Calibri', fontSize: '30px'}}>Modelo de Monitoramento e Adaptação do Design de Gamificação para Professores</p>
            <br/>
            <p style={{fontFamily: 'Calibri', fontSize: '20px'}}> 
            {/* Existe um interesse crescente em aplicar a gamificação em ambientes educacionais com o objetivo de aumentar a motivação e o engajamento dos alunos. No entanto, apesar dos benefícios do uso da gamificação, inclusive no contexto educacional, alguns estudos publicados na literatura relataram resultados não esperados em relação ao engajamento e motivação dos alunos após a implementação da gamificação em ambientes educacionais.            
            <br/><br/> Uma possível solução para evitar esses resultados inesperados é monitorar a interação dos alunos e os efeitos da gamificação durante o processo de aprendizagem, e quando situações críticas são detectadas, a adaptação à gamificação pode ser realizada para motivar os alunos a interagir mais com os recursos de aprendizagem do sistema e, consequentemente, melhorar seus resultados de engajamento e motivação. */}
            <br/>O “Modelo de Monitoramento e Adaptação do Design de Gamificação para Professores'' foi desenvolvido com o objetivo de aumentar a chance de obter resultados positivos em relação ao engajamento e motivação dos alunos durante o processo de aprendizagem em sistemas educacionais gamificados. 
            <br/><br/><strong>Descrevendo o modelo: </strong>
            <li className = " text-justify ">
                &nbsp;<strong>Definição dos objetivos de interação:</strong> No referido modelo, os professores definem metas que esperam que os alunos atinjam em um determinado período de tempo. As metas de interação podem ser representadas por dois elementos para cada tópico do curso: número de interação esperados que os alunos tenham com os recursos e tempo esperado que essas interações ocorram. Os recursos são os elementos disponíveis no sistema educacacional que dão suporte à aprendizagem dos alunos (por exemplo: vídeos, textos, questionários, fóruns). 
                Portanto, por exemplo, um objetivo de interação configurado por um professor poderia ser: esperar que os alunos interajam com pelo menos 70% dos recursos educacionais disponíveis no ambiente de aprendizagem gamificado relacionados a um tópico em 2 semanas.
            </li>
            <li className = " text-justify ">
                &nbsp;<strong>Monitoramento da interação dos alunos com os recursos:</strong> Nesta etapa, os professores podem visualizar a interação dos alunos com os recursos disponíveis no ambiente educacional gamificado e comparar se as interações dos alunos estão como esperadas para atingir os objetivos de interação definidas pelo professor. 
                Os objetivos de interação definidos anteriormente podem servir como métricas durante o processo de aprendizagem para os professores na fase de monitoramento, porque eles são capazes de avaliar se a classe/alunos está longe ou não de atingir os objetivos de interação definidos.
            </li>
            <li className = " text-justify ">
                &nbsp;<strong>Monitoramento da interação dos alunos com elementos de gamificação:</strong> Existem dois objetivos principais em mostrar a interação dos alunos com os elementos de gamificação para os professores. Primeiro, os professores podem visualizar as interações dos alunos com os elementos do jogo implementados no sistema, aumentando a chance dos professores perceberem o impacto positivo da gamificação e, portanto, motivando-se para o uso da gamificação. 
                Segundo, no modelo, a adaptação do design de gamificação durante o processo de aprendizagem é realizada usando o elemento missão de gamificação, portanto, é necessário que os professores possam visualizar quais missões são mais eficazes para motivar os alunos. Por meio dessas visualizações, os professores podem ver quais missões foram mais bem-sucedidas e atribuir missões adequadamente ao longo do processo de aprendizado.
            </li>
            <li className = " text-justify ">
                &nbsp;<strong>Adaptação do design de gamificação por meio de missões:</strong> Como explicado anteriormente, a adaptação do design de gamificação no sistema educacional é feita por professores através da atribuição de missões, quando/se julgarem necessário.
                Propomos o uso de missões para adaptar o design da gamificação durante o processo de aprendizagem, porque quando os professores percebem que as interações dos alunos não estão como as esperadas, eles podem atribuir missões para motivar os alunos a interagir mais com os recursos educacionais disponíveis no sistema e consequentemente atingir os objetivos de interação definidos. 
            </li>
            <br/><br/>
            A visão geral do modelo proposto pode ser visto na Figura 1.
            </p>

            <br/>
            <img src={modelo_gameficacao} alt="Modelo de Monitoramento e Adaptação do Design de Gameficação para Professores"/>
            <br/><br/><br/>
    
            <br/><br/>

            <center>
                <Button color ="#C0B283" type="button" onClick={this.redirect}> 
                    Prosseguir
                </Button>
                {this.state.redirect ? (<Redirect to={{ pathname:"/projecttutorial"}}/>) : (<div></div>)}
            </center>
            <br/>

            </Col>
            </div>
        );
    }

}

export default ProjectDescription;