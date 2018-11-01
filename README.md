# Colabore
## Git
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

Sua ajuda será bem vinda!

[![Logotipo da comunidade WebDevRN](https://raw.githubusercontent.com/WebDevRN/WebDevRN.github.io/master/assets/logo.jpeg "WebDevRN")](https://WebDevRN.github.io/ "Site do WebDevRN")
​
Somos uma organização regional sem fins lucrativos, do Rio grande do norte, com finalidade apresentar nossos desenvolvedores e

reunir todos nós assim aumentando o conhecimento de cada um de nossos desevolvedores.
​

# Quem somos :beer:

​

Somos um grupo de desenvolvedores com a finalidade de reunir o máximo numero de desenvolvedores norte rio grandense e assim

divulgar conhecimentos, eventos, dúvidas, e ajudas mutuas, aqui é onde haverão varios desenvolvedores assim facilitando para você

que procura por desenvolvedores.

​

# WebDevRN like companies :blue_heart:

​

Nossa organização também tem por objetivo de oferecer um leque de potenciais na área do desenvolvimento web full stack que pode

ser útil para sua empresa ou organização, no site poderá ver coisas como, atuação, experiência profissional, e especializações,

e assim fazer você mesmo sua escolha indo diretamente para o funcionário que deseja e conversando com ele por email, telegram,

o que seja.

​

# Desenvolvedor :metal:

​

Nós criaremos o máximo de portifólios aqui mesmo na organização e para facilitar aquele que a pouco entrou no meio acadêmico ou

que está entrando no meio profissional, assim é possível colocar aqui formas de te contactar e assim você pode desenvolver como

todos desenvolvedores como nós amamos, que é trabalhar remoto ou free lancer, no conforto de casa e fazendo um eficiente trabalho.


Você que é desenvolvedor pode anunciar por aqui o seu trabalho de sites e sistemas feitos por você, e também terá um leque de outros

desenvolvedores que ajudarão bastante seu projeto.

​

# Quero um projeto :tophat:

​

Você que é desenvolvedor e tem um plano para um projeto pode falar conosco para te ajudar gratuitamente (dependendo do objetivo de

seu projeto).

​
