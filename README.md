# Colabore
Sua ajuda é bem vinda!

Para sugerir melhorias em nosso site, bifurque (clicando no _fork_, aqui mesmo no canto superior direito desta página) este repositório para seu usuário no GitHub, e então clone-o para sua estação local. Para realizar esta operação, é recomendado que faça-a utilizando o endereço SSH da versão do repositório em seu usuário. Para utilizá-lo, entre no repositório _"forkado"_ e clique no botão verde _"Clone or download"_, logo acima da lista de arquivos e copie a chave que se encontra lá.

Em seu terminal, quando estiver no diretório em que preferir trabalhar, com o git devidamente instalado, utilize o comando:
```
git clone <chave ssh copiado do seu repositório no github, sem essas tags aqui>
```

Para criar a _branch_ de sugestão, comece pelos seguintes comandos:
```
git branch draft
git checkout draft
```
ou, apenas `git checkout -b draft`.

Agora, sim, pode trabalhar nas sugestões, utilizando os softwares que preferir para edição de código :yellow_heart:

Quando finalizar as sugestões, entre no terminal e acesse o diretório do repositório, para realizar os seguintes passos:
  * verifique se está na _branch_ draft usando `git branch`. Se aparecer __*__ ao lado de _draft_, significa que estará nela. Se o __*__ estiver ao lado de outra branch, digite `git checkout draft`. Se você trabalhou nas sugestões em outra _branch_ (que não a _draft_), estando na branch draft, use o comando `git merge <nome da branch da qual deseja trazer as alterações e mesclá-las na branch draft, sem essas tags aqui>`. Agora, está ok para seguir. Não saia da branch draft! :wink:
  * adicione os arquivos para sua _Staged area_ local usando `git add .` no terminal (dentro do diretório do reposi)
  * submeta efetivamente as mudanças para sua o repositório local, usando `git commit -m "msg muito curta, sintetizando suas alterações"`.
  * alternativamente, os dois passos anteriores podem ser realizandos utilizando-se somente `git commit -a -m "msg"`.

Pronto, as suas sugestões estão na sua máquina local, prestes a serem enviadas para seu usuário no GitHub. Se lembrou de algo a ser melhorado (e evitar fazer os passos até agora novamente), a hora de revertê-las é [agora](https://brorlandi.github.io/git-desfazendo-commits "Artigo explicativo sobre essa operação"). Se está tudo ok, faça o seguinte:
  * verifique o nome que o GitHub deu ao repositório online no seu usuário digitando o comando `git remote` (provavelmente será o nome _origin_).
  * talvez o GitHub vá recusar a versão local que você está submetendo, por não estar sincronizado com a última versão online. Uma maneira de se resolver esse impasse é utilizando `git pull <nome que o GitHub deu ao seu repositório online - vide 1o passo deste bloco, sem as tags aqui> draft`. Se o nome do repositório online for _origin_, esse comando anterior será `git pull origin draft`.
  * envie o seu repositório atual para o repositório online com o comando `git push <nome que o GitHub deu ao seu repositório online - vide 1o passo deste bloco, sem essas tags aqui> draft`. Se o nome do repositório online for _origin_, esse comando anterior será `git push origin draft`.

Pronto! Seu repositório online já estará com suas sugestões atualizadas. Verifique em seu navegador como ficaram. Depois que revisar e considerar que estão ok mesmo, é chegada a hora da sua sugestão para os mantenedores do repositório original se efetivar! :smiley:

Entre no repositório em seu usuário e veja que agora o botão verde diz `"Compare & pull request"`. Clique nele e será encaminhado para dentro do repositório original. Faça uma última verificação nas alterações (base fork é no do WebDevRN, na branch draft; head fork é o repo no seu usuário, na branch draft) e, estando ok, escreva um título e comentário para as sugestões que você está submetendo aos mantenedores do repositório original. Estas serão apresentadas na página de **Pull requests** do repositório original.

Pronto! Sua sugestão foi submetida e agora a analisaremos com carinho! :blush:
* * *
<h1 align="center">
  <a href="https://WebDevRN.github.io/" title="Site do WebDevRN">
    <img src="https://raw.githubusercontent.com/WebDevRN/WebDevRN.github.io/master/assets/logo.jpeg" alt="Logotipo da comunidade WebDevRN" width="600">
  </a>
</h1>

# Sobre a WebDevRN
Somos um grupo de desenvolvedores legais e descolados! :grin:

Brincadeira à parte, somos uma organização regional sem fins lucrativos com atuação no RN, que reúne estudantes e profissionais da Web, com finalidade de:
* dar oportunidade aos desenvolvedores locais se apresentarem;
* socializar conhecimentos técnicos (atuação como profissionais de sistemas web) entre nós;
* divulgar eventos sobre assuntos técnicos de web, bem como a carreira e o mercado web;
* cultivar laços de contatos (e amizade) entre os profissionais web do estado;
* facilitar a vida dos recrutadores e selecionadores das empresas de TI e Publicidade (e outras, que também atuem com web), ao disponibilizar os portfólios de vários desses profissionais em um só local, para que possam analisá-los previamente aos devidos contatos.

# O que nós fazemos :eyeglasses: :headphones: :coffee: :pizza: :beer:
O trabalho de profissionais de TI na Web tem diferentes perfis, tais como:
  - **Front-end developer** - quem atua, de modo especializado, na "cara" do site, trabalhando com os diversos itens que compõem sua estrutura e suas ações;
  - **Back-end developer** - quem atua, de modo especializado, nos "bastidores" do site, seja no servidor ou na nuvem, trabalhando com a programação do site;
  - **Full-stack developer** _(um perfil flexível de profissional, ideal para pequenas empresas ou iniciantes)_ - quem atua, de modo generalista, tanto como Front-end como Back-end.
  - **Engenheiro de Software** _(para empresas bem estabelecidas)_ - quem coordena as diversas fases dos projetos de sistemas, com metodologias próprias da engenharia, para que a equipe desenvolva-os da melhor maneira possível, bem como garante que as normas do mercado atendido sejam cumpridas evitando desvios ou incorformidades (_compliance_) e que o desempenho do sistema esteja otimizado.
  - **Coordenador DevOps** _(para empresas maiores... não especificamente um profissional, mas uma cultura)_ - é o paradigma de atuação de algum profissional de TI que faz a gestão dos projetos em desenvolvimento e do sistema em operação.
  - **SRE - Engenheiro de Confiabilidade de Sites** _(também para empresas maiores...)_ - é o profissional que, usando de metodologias desenvolvidas pelo Google, fará seu sistema online mais ["escalável, confiável e eficiente"](https://novatec.com.br/livros/reliability-engineering/ "Livro do Google sobre SRE"), nas palavras de autores do Google.
  - **Profissional de Segurança** _(empresas de médio a grande porte)_ - quem garante que as boas práticas de segurança sejam adotadas e mantidas, bem como realiza rotinas de segurança, estabelece a Política de Segurança da Informação e garante que as aplicações e ativos da empresa estejam seguros.

Isso tudo sem falar de outras áreas profissionais também importantes (mas que não estão no nosso escopo de atuação), como:
* Designers;
* Redatores;
* Profissionais de Marketing;
* Profissionais de Administração em geral;
* entre outros.

# WebDevRN :green_heart: companies
Nosso diretório de portfólios e outras ferramentas facilitará a busca de empresas que atuam na web por profissionais amantes de web, podendo analisar nossa atuação antes mesmo de nos entrevistar!

Assim, poderão escolher mais facilmente o profissional que mais atende as demandas técnicas! :star:

As "approaches" podem ocorrer de acordo com as possibilidades e preferências do selecionador, tais como: e-mail, Telegram :blue_heart:, visita à empresa ou outras.

# Aos desenvolvedores! :metal:
Nós listaremos aqui seus portfólios quando sentirem-se prontos e nos solicitar. Essa exposição facilitará quem está iniciando-se na formação ou entrando agora no ambiente profissional. Adicionaremos informações úteis para as empresas, como meios de contato, preferência de atuação (remoto fixo, remoto freelancer, presencial CLT, etc), entre outras.

Poderá incluir sites e sistemas feitos por você (ou com sua participação), para facilitar contatos de empresas contratantes, bem como para receber melhores contribuições de carreira (ou em projetos) por parte de outros desenvolvedores.

# Quer executar um projeto? :tophat:
Você é uma empresa ou profissional de outra área e deseja contratar profissionais de TI que atuem na web?

Pode utilizar nosso diretório a vontade, entrando em contato com quem é da atuação específica que necessita ou com a coordenação do WebDevRN, que tentaremos buscar a melhor pessoa para suas necessidades de projeto ou negócio!
