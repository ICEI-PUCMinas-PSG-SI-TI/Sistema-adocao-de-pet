# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Neste documento estão contidas, as informações analizadas através de pesquisas online, para as nossas personas, histórias de usuários, nossos requisitos funcionais e não funcionais e também as restrições do projeto.

## Personas

Ana Souza tem 38 anos, é Fundadora e administradora de uma ONG de resgate animal. Tem experiência no setor, mas enfrenta dificuldades com a superlotação do abrigo e a burocracia da adoção. Ana precisa de uma plataforma intuitiva para gerenciar animais e seus históricos clínicos, fazer um controle eficiente de vagas e do fluxo de adoções e encontrar ajuda de de voluntários e lares temporários.

Carlos Mendes tem 25 anos, trabalha em horário comercial e ajuda a ONG nos finais de semana. Quer acompanhar melhor a situação dos animais e saber como pode contribuir. Ele quer ter acesso rápido às tarefas e horários disponíveis, saber quais animais precisam de atenção especial e registrar atividades e atualizações sobre os pets.

Julia Ferreira tem 30 anos, sempre quis adotar um pet, mas não sabe onde encontrar informações confiáveis e sente que o processo pode ser complicado. Julia gostaria de receber recomendações de animais compatíveis com seu estilo de vida, acompanhar o processo de adoção de forma simples e transparente e também ter acesso a informações detalhadas sobre os pets disponíveis.

Ricardo Nunes tem 45 anos, resgata animais de rua, mas não tem estrutura para manter todos. Busca lares temporários ou ONGs que possam acolher os pets. Ricardo é interessado em ter um meio rápido para encontrar lares temporários disponíveis que tenha um cadastro simples e acesso à fila de abrigamento e também contato direto com ONGs para facilitar resgates.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Gestora de ONG  | Cadastrar novos animais no sistema   | Ter controle sobre suas condições de saúde, histórico e status de adoção.  |
|Voluntário      | Visualizar minha escala de trabalho e as tarefas disponíveis  | Contribuir de forma mais eficiente. |
|Adotante       | Visualizar os animais disponíveis e receber sugestões personalizadas com base no meu estilo de vida | Adotar um animal.
|Protetor independente | Cadastrar um animal resgatado e verificar se há lares temporários disponíveis para acolhê-lo. | Auxiliar no meu trabalho.
|Gestor de Clínica   | Um painel de controle que me permita ver rapidamente a ocupação do abrigo e priorizar adoções urgentes. | Gerir melhor o processo de adoção
|Adotante   | Acompanhar o andamento da minha solicitação de adoção. | Saber em que etapa do processo estou.
|Gestor de ONG | Registrar os tratamentos veterinários dos animais.  | Manter o histórico atualizado.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID        | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RF-002| O sistema deve oferecer um módulo para gerenciamento da fila do abrigo, mostrando vagas disponíveis e organizando a entrada de novos animais. |  ALTA | 
|RF-003| O sistema deve permitir que adotantes se cadastrem e recebam sugestões de pets compatíveis com seu perfil. | ALTA
|RF-004| O sistema deve possibilitar o registro de tratamentos veterinários, vacinas e histórico médico dos animais. | ALTA
|RF-005| O sistema deve oferecer um painel administrativo para a gestão da ONG, incluindo controle de voluntários, lares temporários e recursos. | MÉDIA
|RF-006| O sistema deve permitir que protetores independentes cadastrem animais resgatados e encontrem lares temporários disponíveis. | MÉDIA
|RF-007| O sistema deve gerar relatórios sobre adoções, quantidade de animais no abrigo e status dos tratamentos veterinários. | MÉDIA
|RF-008| O sistema deve permitir que adotantes acompanhem o processo de adoção e recebam atualizações. | ALTA
|RF-009| O sistema deve disponibilizar um chat ou canal de comunicação entre adotantes, voluntários e gestores da ONG. | MÉDIA


### Requisitos não Funcionais

|ID       | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RNF-001| O sistema deve ser responsivo e acessível em dispositivos móveis e desktops. | ALTA | 
|RNF-002| O sistema deve garantir a segurança dos dados dos usuários, adotando criptografia para informações sensíveis. | BAIXA
|RNF-003| O tempo de resposta das principais funcionalidades não deve ultrapassar 2 segundos. | MÉDIA
|RNF-004| O sistema deve estar disponível 99% do tempo, garantindo estabilidade para ONGs e usuários. | MÉDIA
|RNF-005| O sistema deve ser intuitivo e fácil de usar, seguindo princípios de UX/UI para facilitar a adoção por diferentes perfis de usuários. | ALTA
|RNF-006| O sistema deve permitir integração com serviços externos, como Google Maps (para localização de ONGs) e plataformas de pagamento (para doações). | BAIXA


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O sistema deve ser desenvolvido utilizando tecnologias acessíveis e de fácil manutenção para a equipe da ONG. |
|02| O orçamento para desenvolvimento e manutenção do sistema deve ser considerado, buscando soluções gratuitas ou de baixo custo sempre que possível.        |
|03| O sistema deve seguir regulamentações de proteção de dados, garantindo conformidade com a LGPD (Lei Geral de Proteção de Dados). |
|04| O sistema deve ser escalável para atender um número crescente de usuários conforme novas ONGs adotem a solução. |
|05| O sistema deve oferecer suporte a múltiplos usuários simultâneos sem degradação de desempenho. |


