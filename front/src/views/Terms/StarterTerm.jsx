import React from "react";

import {
  Input,
  Button,
  Col
} from "reactstrap";

import { Link } from 'react-router-dom';

import Header from "./components/Header";

class StarterTerm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            terms : '0',
            checkValid: false,
        }
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    componentDidMount() {
        sessionStorage.clear();
    }
    
    handleCheckbox() {
        this.setState(prevState => ({
            checkValid : !prevState.checkValid
        }));
    }

    render () {
        return(
            <div>
            <Header/>
            <Col sm="50" md={{ size: 8, offset: 2 }} className="text-justify">
            <p className= " text-center font-weight-bold " style={{fontFamily: 'Calibri', fontSize: '25px'}}>Termo de Consentimento Livre e Esclarecido</p>
            <br/>
            <p className= " text-justify font-weight-bold " style={{fontFamily: 'Calibri', fontSize: '20px'}}>Leia atentamente o formulário de consentimento abaixo e comece a participar do estudo se você concorda com os termos de consentimento.</p>
            <br/>
            <p className= " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}> 
            Você está convidado a participar deste estudo que tem como objetivo investigar as funcionalidades de uma ferramenta que auxilia professores a monitorarem a interação dos alunos com os recursos de aprendizagem e elementos de gamificação de ambientes educacionais gamificados com o intuito de ajudar os professores a entender o nível de engajamento e aprendizagem dos alunos. Além disso, a ferramenta possibilita que professores adaptem o design da gamificação do sistema educacional através da criação e atribuição de missões aos alunos que não estão obtendo os resultado esperados. A ferramenta foi desenvolvida baseada no modelo de monitoramento e adaptação do design de gamificação para professores, cujo o objetivo é evitar resultados negativos em relação ao engajamento e aprendizagem dos estudantes em sistemas educacionais gamificados.  Um sistema educacional gamificado é um ambiente educacional que implementa elementos de jogos (ex: pontos, níveis, ranking, troféus) com o intuito de motivar e engajar estudantes.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
              <strong> Título do Estudo: </strong> Monitoramento e Adaptação do Design da Gamificação de Ambientes Educacionais Gamificados por Professores.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
              <strong> Pesquisadores: </strong> Kamilla Tenório (kktas@ic.ufal.br), Diego Dermeval (diego.matos@famed.ufal.br), Bruno Lemos (bruno.lemos.ec@gmail.com), Pedro Henrique (phbn@ic.ufal.br), Rodrigo Santos (rss3@ic.ufal.br).
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Finalidade e Procedimento: </strong>O objetivo desta pesquisa é investigar algumas funcionalidades de uma ferramenta para professores que os permitem monitorar a interação da turma com o sistema educacional gamificado usado pelos estudantes através de dashboards e adaptar o design da gamificação através de criação e atribuição de missão a alunos que não estão progredindo como o esperado. Essas missões têm como objetivo motivar os estudantes desengajados a interagir com o sistema educacional gamificado para conseguir alcançar os resultados de aprendizagem esperados. Para alcançar isso, realizamos este estudo para entender como os professores percebem as decisões de projeto que fizemos usando a nossa ferramenta.  Sua participação nesta pesquisa consistirá na realização das três atividades seguintes:      
                <ul>
                    <li className = " text-justify ">
                    Primeiro, responder um questionário demográfico, onde deve ser informado: Gênero, idade, nível educacional que leciona e estado onde mora. 
                    </li>
                    <li className = " text-justify ">
                    Segundo, usar um plataforma que possibilita o professor monitorar a interação dos estudantes com os recursos de aprendizagem e elementos de jogos de um ambiente educacional gamificado através do uso de dashboards e adaptar o design de gamificação do ambiente educacional através de atribuição de missões com o objetivo de aumentar a motivação e engajamento dos estudantes que não estão progredindo como o esperado.
                    </li>
                    <li className = " text-justify ">
                    Por último, responder a um questionário com XX perguntas, levando em consideração sua experiência durante a interação com a ferramenta.
                    </li>
                </ul>
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Potenciais Benefícios: </strong> Os resultados do estudo podem contribuir para um melhor projeto desta ferramenta que poderá ser usado por professores com a finalidade de engajar estudantes e obter resultados positivos de aprendizagem através da adaptação do design da gamificação através de através de atribuições de missões quando os resultados esperados não estão sendo alcançados. Ao usar este software, esperamos aproveitar a participação dos professores no processo de projeto de ferramentas de apoio sistemas educacionais gamificados, com a finalidade de promover melhor engajamento e resultados de aprendizagem dos estudantes.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Potenciais Riscos: </strong> Não há riscos conhecidos neste estudo.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Confidencialidade: </strong> Ao participar deste estudo, você reconhece e concorda que suas respostas e contribuições serão registradas anonimamente para fins de análise de dados mais confiáveis.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Disseminação dos Resultados:  </strong>Os resultados agregados deste estudo aparecerão em artigos publicados em conferências revisadas por pares ou revistas científicas nacionais e internacionais.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Direito de Retirada: </strong> A participação neste estudo é voluntária, e você pode decidir não participar a qualquer momento. As respostas da pesquisa permanecerão anônimas. Uma vez que a pesquisa é anônima, quando é submetida, não pode ser removida.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Dúvidas: </strong> Se você tiver alguma dúvida sobre o estudo, não hesite em perguntar a qualquer momento. Você também está livre para entrar em contato com os pesquisadores se você tiver dúvidas no futuro. Este estudo não precisa ser submetido ao comitê de ética, pois ele está avaliando apenas recursos para melhorar o software desenvolvido.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Acompanhamento: </strong> Se você tiver interesse em saber os resultados deste estudo, você pode contatar os pesquisadores usando as informações de contato fornecidas acima.
            </p>
            <p className = " text-justify " style={{fontFamily: 'Calibri', fontSize: '20px'}}>
                <strong> Consentimento para Participar: </strong> Ao preencher e submeter este questionário, o seu consentimento livre e esclarecido é implícito e indica que você entende as condições acima de participação neste estudo. 
            </p>
            <br/>
            <Input type="checkbox" style={{position: 'relative', margin: '0 0.5em 0 0'}} onChange={this.handleCheckbox}/> 
                Declaro que compreendi os objetivos, riscos e benefícios de minha participação na pesquisa e que concordo em participar.<br/><br/>
                {!this.state.checkValid ? 
                    <center>
                    <Button disabled={!this.state.checkValid } color ="#C0B283" type="submit"> 
                        Continuar
                    </Button>
                    </center>
                  :
                    <Link className="text-dark" to={{pathname:"/demographicquest"}} >
                        <center>
                        <Button color ="#C0B283" type="submit"> 
                            Continuar
                            </Button>
                        </center>
                    </Link> }
            <br/>
            </Col>
            </div>
        )
    }
}

export default StarterTerm;
