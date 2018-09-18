import app from '../../../app'
import test from 'ava'
import { sortSalarioAsc, sortSalarioDesc } from '../../../utils/sortSalario'
import request from 'supertest'

const mocksJobs = {
  allJobsMock: {
   "count": 1200,
   "jobs": [
       {
           "title": "Analista de Suporte de TI",
           "description": "<li> Prestar atendimento remoto e presencial a clientes. Atuar com suporte de TI.</li><li> Conhecimento aprofundado em Linux Server (IPTables, proxy, mail, samba) e Windows Server(MS-AD, WTS, compartilhamentos).</li>",
           "salario": 3200,
           "cidade": [
               "Joinville"
           ],
           "cidadeFormated": [
               "Joinville - SC (1)"
           ]
       },
       {
           "title": "Analista de Sucesso do Cliente",
           "description": "<li> Documentar projetos, Acompanhar andamento dos projetos, Acompanhamento de empresas em degustação, Apoiar o Suporte nos Processos de Implantação, Treinamento e Instalação, Apoiar equipe de vendas, Realizar análise de requisitos.</li><li> Experiência na área.</li><li> Formação superior completa.</li><li> Conhecimento em análise de requisitos e Engenharia de Software.</li>",
           "salario": 2000,
           "cidade": [
               "Florianópolis"
           ],
           "cidadeFormated": [
               "Florianópolis - SC (1)"
           ]
       },
       {
           "title": "Recepcionista",
           "description": "<li> Agendamento dos pacientes de acordo com a disponibilidade dos profissionais, Confirmação da consulta via mensagem de texto disponibilizada pela clínica, Informar os profissionais sobre sua agenda, Recepcionar os clientes de acordo com o manual de integração; Informar e entregar as receitas médicas para os pacientes, Passar recados e avisos para os profissionais, Reposição de balas, café, chá, copos plásticos, lenços, Retirar os lixos ao final do dia, Receber o pagamento das sessões médicas e psicológicas, Solicitar assinatura dos pacientes nas fichas de frequência, Dar baixa do valor recebido no caderno caixa, Repassar o valor recebido ao profissional, Receber e entregar as correspondências destinadas aos profissionais da clínica, Atender de maneira cordial os colaboradores, profissionais e clientes da clínica, Cuidar dos bens e do espaço físico de trabalho, Respeitar o sigilo de informações.</li><li> Experiência em atendimento ao público na área de saúde. </li><li> Ensino Médio completo.</li>",
           "salario": 972,
           "cidade": [
               "Florianópolis"
           ],
           "cidadeFormated": [
               "Florianópolis - SC (1)"
           ]
       },
       {
           "title": "Atendente de Loja",
           "description": "<li> Auxiliar os clientes na busca e escolha de produtos na loja, Repassar os clientes ao caixa para pagamento das compras, Informar aos clientes sobre vantagens e qualidades de produtos à venda, Expor mercadorias de forma atrativa, em pontos estratégicos de venda, Prestar serviços aos clientes, tais como troca de mercadorias, Fazer balanço de mercadorias para reposição.</li><li> Experiência com atendimento ao cliente.</li>",
           "salario": 1240,
           "cidade": [
               "Florianópolis"
           ],
           "cidadeFormated": [
               "Florianópolis - SC (1)"
           ]
       },
       {
           "title": "Projetista Mecânico I",
           "description": "<li> Interpretação de desenhos mecânicos em 2D e 3D, Detalhamento de desenhos mecânicos em software cad, preferencialmente solidworks. Análise de protótipos quanto a características dimensionais e funcionais. Desenvolvimento de projetos mecânicos 2D e 3D. Projetos de peças usinadas, conformadas, estampadas e injetadas. Avaliação de componentes mecânicos quanto a conformidade ao projeto. Elaboração e análise de relatórios de conformidade provenientes de testes mecânicos. Geração de documentos pertinentes aos projetos mecânicos. Elaboração de procedimentos de teste e avaliação de componentes mecânicos. Conhecimento de processos de fabricação mecânica. Noções de tratamento superficial. Noções de tratamento térmico.</li><li> Cursando Engenharia Mecânica.</li><li> Conhecimento de tolerâncias dimensionais de forma e posição. Conhecimento de elementos de máquinas e componentes padronizados e normatizados. Noções de resistência dos materiais e mecânica dos sólidos; Noções de gerenciador eletrônico de documentos. Noções de sistemas ERP com foco em Engenharia de Produto, preferencialmente Odin.</li>",
           "salario": 2600,
           "cidade": [
               "Joinville"
           ],
           "cidadeFormated": [
               "Joinville - SC (1)"
           ]
       },
       {
           "title": "Encarregado de Loja",
           "description": "<li> Atender clientes. Supervisionar os empregados, verificar precificação dos produtos, acompanhar o vencimento das mercadorias, observar o funcionamento dos equipamentos, orientar a equipe, acompanhar o trabalho dos promotores, realizar outras atividades correlatas a função.</li>",
           "salario": 1908,
           "cidade": [
               "Joinville"
           ],
           "cidadeFormated": [
               "Joinville - SC (1)"
           ]
       },
       {
           "title": "Encarregado de Açougue",
           "description": "<li> Supervisionar equipe do açougue. Liderar equipe de balconistas e açougueiros, elabora escala de folgas e horários, aplicar treinamentos e verificar o corte e pesagem de carnes.</li><li> Experiência na carteira como encarregado ou líder de açougue. </li><li> Ensino Médio completo.</li>",
           "salario": 1908,
           "cidade": [
               "Joinville"
           ],
           "cidadeFormated": [
               "Joinville - SC (1)"
           ]
       },
       {
           "title": "Chapeiro",
           "description": "<li> Atuar no preparo e montagem de lanches quentes, pratos rápidos e porções em geral, organizar o local de trabalho, utensílios e geladeiras.</li><li> Experiência na área.</li><li> Ensino Fundamental.</li>",
           "salario": 1700,
           "cidade": [
               "Gaspar"
           ],
           "cidadeFormated": [
               "Gaspar - SC (1)"
           ]
       },
       {
           "title": "Atendente de Bar",
           "description": "<li> Atuar com preparo de sucos e Drinks, atender aos pedidos de bar e operar o caixa.</li><li> Necessário experiência em sistema de venda SGBR.</li><li> Ensino Fundamental.</li>",
           "salario": 1160,
           "cidade": [
               "Gaspar"
           ],
           "cidadeFormated": [
               "Gaspar - SC (1)"
           ]
       },
       {
           "title": "Garçom",
           "description": "<li> Atuar com atendimento ao cliente, abertura de comandas no sistema, servir alimentos e bebidas aos clientes e demais atividades pertinentes ao cargo.</li><li> Ensino Fundamental.</li>",
           "salario": 1059,
           "cidade": [
               "Gaspar"
           ],
           "cidadeFormated": [
               "Gaspar - SC (1)"
           ]
       }
   ]
  },
  jobsCity: {
    "count": 4,
    "jobs": [
        {
            "title": "Gerente de Loja",
            "description": "<li> Gestão da loja, gestão de equipe, gestão comercial e administração geral da loja.</li><li> Formação Superior completa em Administração, Gestão Comercial ou cursos afins. Experiência prática com gestão de equipe e de loja de grande porte. </li>",
            "salario": 3500,
            "cidade": [
                "Pelotas"
            ],
            "cidadeFormated": [
                "Pelotas - RS (1)"
            ]
        },
        {
            "title": "Vistoriador de Imóveis",
            "description": "<li> Vistoriar imóveis para verificar estado do mesmo na entrada e na saída de inquilino. Conversar com inquilinos e proprietários por e-mail, telefone, ou presencial. Arquivar e solicitar orçamento para reparos, entre outras atividades.</li><li> Experiência na área de vistoria de imóveis. É desejável português fluente. </li><li> Ensino Médio completo.</li><li> Ter poder de negociação, organização, pontualidade, agilidade e observação.</li>",
            "salario": 1300,
            "cidade": [
                "Pelotas"
            ],
            "cidadeFormated": [
                "Pelotas - RS (1)"
            ]
        },
        {
            "title": "Coordenador Jurídico",
            "description": "<li> Monitorar os processos da empresa, apresentar relatórios para diretoria, encontrar soluções para agilizar os processos.</li><li> Experiência na função de coordenador jurídico.</li><li> Ensino Superior em Direito.</li><li> Possuir carteira da OAB.</li>",
            "salario": 4500,
            "cidade": [
                "Pelotas"
            ],
            "cidadeFormated": [
                "Pelotas - RS (1)"
            ]
        },
        {
            "title": "Repositor",
            "description": "<li> Atuar com a reposição de mercadorias nas gôndolas, organização e limpeza.</li><li> Não é necessário experiência.</li><li> Ensino Fundamental completo.</li>",
            "salario": 1053,
            "cidade": [
                "Pelotas"
            ],
            "cidadeFormated": [
                "Pelotas - RS (1)"
            ]
        }
    ]
  },
  jobsFunction: {
    "count": 1,
    "jobs": [
        {
            "title": "Desenvolvedor Java",
            "description": "<li> Ser o responsável técnico da equipe de desenvolvimento nas tecnologias de front-end (Ajax, XHTML, Javascript e jQuery), avaliar, propor, aplicar, melhorar e corrigir falhas de arquitetura dos frameworks desenvolvidos pela empresa, avaliar, propor e aplicar as melhores soluções e novas tecnologias para problemas complexos de desenvolvimento, receber, entender e discutir funcionalidades delegadas pelo analista de sistemas, a serem desenvolvidas nos sistemas mantidos pela empresa, dirimindo as dúvidas e ambiguidades, desenvolver, melhorar e corrigir funcionalidades nos sistemas mantidos pela empresa, utilizando a documentação UML produzida pelo analista de sistemas como referência.</li><li> Necessário experiência em desenvolvimento Java para a Web, POO, UML, Java, Spring, Hibernate, SQL, JSP, JSF, XML, Eclipse e Tomcat; grandes projetos, experiência com arquitetura de sistemas.</li><li> Desejável Superior completo em Sistemas de Informação, Ciências da Computação ou correlatos.</li>",
            "salario": 4000,
            "cidade": [
                "Florianópolis"
            ],
            "cidadeFormated": [
                "Florianópolis - SC (1)"
            ]
        }
    ]
  }
}

test('test /api/jobs method GET should be return statuscode 200', async (t) => {
  const response = await request(app).get('/api/jobs')
  t.is(response.status, 200)
})

test('test /api/jobs method GET should be return all jobs', async (t) => {
  const response = await request(app).get('/api/jobs').query({ skip: 0, limit: 10 })
  t.is(
    JSON.stringify(response.body), 
    JSON.stringify(mocksJobs.allJobsMock)
  )
})

test('test /api/jobs?function=functionJob method GET should be return function jobs', async (t) => {
  const response = await request(app).get('/api/jobs').query({ skip: 0, limit: 10, function: 'analista de sistemas' })
  t.is(
    JSON.stringify(response.body), 
    JSON.stringify(mocksJobs.jobsFunction)
  )
})

test('test /api/jobs?city=nameCity method GET should be return jobs for city', async (t) => {
  const response = await request(app).get('/api/jobs').query({ skip: 0, limit: 4, city: 'Pelotas' })
  t.is(
    JSON.stringify(response.body), 
    JSON.stringify(mocksJobs.jobsCity)
  )
})

test('test /api/jobs?city=nameCity method GET should be return jobs for asc salario', async (t) => {
    const response = await request(app).get('/api/jobs').query({ sort: 1, skip: 0, limit: 4, city: 'Pelotas' })
    const mockCityAsc = {...mocksJobs.jobsCity, jobs: sortSalarioAsc(mocksJobs.jobsCity.jobs) }
    t.is(
      JSON.stringify(response.body), 
      JSON.stringify(mockCityAsc)
    )
  })

  test('test /api/jobs?city=nameCity method GET should be return jobs for desc salario', async (t) => {
    const response = await request(app).get('/api/jobs').query({ sort: -1, skip: 0, limit: 4, city: 'Pelotas' })
    const mockCityAsc = {...mocksJobs.jobsCity, jobs: sortSalarioDesc(mocksJobs.jobsCity.jobs) }
    t.is(
      JSON.stringify(response.body), 
      JSON.stringify(mockCityAsc)
    )
  })