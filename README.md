# Teste do Processo Seletivo para Desenvolvedor

## Contato
Gabriel Dias Corrêa
Email: gabrieldiascorrea7@gmail.com
Linkedin: https://www.linkedin.com/in/gabrieldiasss/
Número: (11) 950753866

## Autoanálise

### 1. Escreva o que poderia ser melhorado na aplicação desenvolvida caso o tempo disponível fosse maior?

Resposta: 

## 2. Caso o número de usuários e postagens da aplicação desenvolvida aumentasse, qual módulo apresentaria problemas primeiro?

Resposta: Acredito que poderiam ter dois módulos com possíveis problemas de escalabilidade que é o de comentários e o de repostas. Caso a aplicação crescesse muito, esses módulos podem enfrentar dificuldades para lidar com um grande volume de requisições, porque é mais comum que usuários comentem e repostem do que criem postagens de fato.

# 3. Para solucionar tais problemas de escalabilidade, quais ações seriam necessárias? Quais tecnologias e/ou infraestrutura poderiam ser empregadas

Resposta: Como se trata de um sistema monolítico, poderíamos descentralizar e tornar mais modular com uma arquitetura de microserviços, para dividir a aplicação em componentes menores e independentes. Para gerenciar esses microserviços seria possível utilizar o Kubernetes como orquestrador, para automatizar tarefas de escalonamneto, monitoramento e recuperação de falhas, deixando o gerenciamento do ambiente mais eficiente e facilitando a escalabilidade horizontal das aplicações.

## Configuração

1° Baixe as depêndencias do projeto `npm install`

Para você conseguir rodar a aplicação na sua máquina, será necessário apenas o docker:
Rode: `docker-compose up` para subir a aplicação e o banco de dados

Rode: `npm run migration:generate` e `npm run migration:run` para criar as migrations

Rode: `npm run test` para executar todos os testes automatizados 

Rode: `npm run seed` para criar as seeds de criação de usuários

## Funcionalidades (Seguindo as instruções do pdf)

# PÁGINA PRINCIPAL

✅ Apresentar inicialmente as 10 últimas postagens realizadas.
✅ Filtro onde alterne entre que o usuário possa visualizar todas as postagens realizadas, ou somente as que foram criadas por ele.
✅ Filtro entre período por data inserindo a data de início e data de fim do período.

# PERFIL USUÁRIO

✅ Nome do usuário;
✅ Data em que ingressou no “Internal Notes”, exibindo a data formatada da seguinte maneira: “20 de novembro de 2021”.
✅ Quantidade de postagens realizadas pelo usuário, contabilizando tanto postagens, repostagens e comentários de postagens.
✅ Além dos dados do usuário, será necessário apresentar as postagens realizadas por 
ele, exibindo as últimas 5 postagens realizadas.

# REQUISITOS

✅ Deverá ser utilizado apenas caracteres alfanuméricos para o registro do nome do 
usuário
✅ Deverá ser utilizado apenas caracteres alfanuméricos para o registro do nome do 
usuário
✅ Será necessário implementar um seed para criar usuários no banco de dados, para a realização de 
testes;
✅ O nome do usuário deverá ser único na aplicação
✅ Os usuários deverão ser capazes de criar postagens, repostagens e comentários de 
postagens;
✅ Deverá existir um limite de 5 postagens por dia para cada usuário, isso incluindo 
postagens, repostagens e comentários de postagens;
✅ Deverá existir um limite de 777 caracteres para as postagens, repostagens e 
comentários de postagens;
✅ Os usuários poderão repostar apenas postagens originais
✅ Os comentários de postagens são permitidos apenas para postagens originais e 
repostagens


# FASE DE CODIFICAÇÃO

❌ Banco de dados para ambiente de produção
✅ Testes automatizados
✅ Configurar localmente de uma forma simples


## Tecnologias Utilizadas

NodeJS, Express, Typescript, Postgres, Docker, Jest e Supertest (Testes), Swagger (Documentação).


