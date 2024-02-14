const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

/* if (currentHour >= 5 && currentHour < 12) {
   greetingElement.textContent = "Bom dia";
 } else if (currentHour >= 12 && currentHour < 18) {
   greetingElement.textContent = "Boa tarde";
 } else {
   greetingElement.textContent = "Boa noite";
 }

 Forma que eu não sabia. */
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
      ? "Boa tarde"
      : "Boa noite";

greetingElement.textContent = greetingMessage;

const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
  const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
  const numColumns = Math.floor(containerWidth / 195); //número de colunas com base na largura do container

  //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(195px, 1fr))`;

});

observer.observe(container);

/**/
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden")
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });

  resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {8
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === '') {
    resultPlaylist.classList.remove('hidden');
    resultArtist.classList.add('hidden');
    return
  }
  requestApi(searchTerm);
})
// CHATGPT criar api em json, js.

/*    Criação de Sites Simples:
        Ofereça seus serviços para criar sites simples para amigos, familiares ou pequenas empresas locais.
        Use plataformas como WordPress, Wix ou Squarespace para criar sites de fácil manutenção.

    Edição de Templates:
        Personalize templates HTML/CSS disponíveis online para atender às necessidades específicas de clientes.
        Plataformas como ThemeForest oferecem uma variedade de templates prontos.

    Pequenas Modificações e Atualizações:
        Ofereça serviços para fazer pequenas atualizações ou modificações em sites existentes.
        Pode envolver ajustes de layout, correção de bugs ou adição de novos recursos simples.

    Criação de Portfólio Pessoal:
        Invista tempo na criação do seu próprio site de portfólio para mostrar suas habilidades.
        Isso não apenas destaca seu trabalho, mas também serve como uma ferramenta de marketing pessoal.

    Participação em Projetos Freelance:
        Cadastre-se em plataformas de freelancers como Upwork, Freelancer ou Workana.
        Procure projetos de menor escala para começar e construir sua reputação.

    Contribuição em Projetos Open Source:
        Participe em projetos de código aberto no GitHub.
        Isso não só contribui para a comunidade, mas também destaca suas habilidades para possíveis empregadores.

    Desenvolvimento de Landing Pages:
        Ofereça serviços de criação de landing pages para empresas que desejam promover produtos ou eventos específicos.

    Criação de Blogs Pessoais
        Ajude indivíduos a configurar blogs pessoais usando plataformas como WordPress.
        Isso pode envolver a instalação, personalização do tema e orientação inicial sobre como gerenciar o conteúdo.

    Treinamento Básico em Desenvolvimento Web:
        Ofereça workshops ou tutoriais básicos de desenvolvimento web.
        Pode ser uma oportunidade de ensinar conceitos básicos de HTML, CSS e JavaScript.

    Participação em Competições e Desafios Online:
        Participe de competições de desenvolvimento em plataformas como HackerRank ou CodePen.
        Isso não apenas testa suas habilidades, mas também pode atrair a atenção de potenciais clientes.*/
