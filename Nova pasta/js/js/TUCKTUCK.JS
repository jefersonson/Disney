function buscarTodos() {
    fetch("https://api.disneyapi.dev/character")
      .then(response => response.json())
      .then(data => {
        data.data.forEach(personagem => {
          const personagemElement = document.createElement("div");
          personagemElement.innerHTML = `
            <h2>${personagem.name}</h2>
            <img src="${personagem.imageUrl}" alt="${personagem.name}">
          `;
          document.body.appendChild(personagemElement);
        });
      })
      .catch(error => console.error('Erro ao buscar os personagens:', error));
}

function buscarId(personaId) {
    fetch(`https://api.disneyapi.dev/character/${personaId}`)
      .then(response => response.json())
      .then(data => {
        const personagem = data.data;
        const personagemElement = document.createElement("div");
        personagemElement.innerHTML = `
          <h2>${personagem.name}</h2>
          <img src="${personagem.imageUrl}" alt="${personagem.name}">
        `;
        document.body.appendChild(personagemElement);
      })
      .catch(error => console.error('Erro ao buscar detalhes do personagem:', error));
}

function getpersonagemByName(personagemName) {
    fetch(`https://api.disneyapi.dev/character?name=${encodeURIComponent(NomePersona)}`)
      .then(response => response.json())
      .then(data => {
        const personagem = data.data[0]; 
        const personagemElement = document.createElement("div");
        personagemElement.innerHTML = `
          <h2>${personagem.name}</h2>
          <img src="${personagem.imageUrl}" alt="${personagem.name}">
        `;
        document.body.appendChild(personagemElement);
      })
    .catch(error => console.error('Erro ao buscar o personagem:', error));
}

function getpersonagemsWithGraphQL() {
    const query = `
      query {
        character(filter: { name: "Mickey Mouse" }) {
          items {
            name
            imageUrl
          }
        }
      }
    `;
  
    fetch("https://api.disneyapi.dev/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query })
    })
      .then(response => response.json())
      .then(data => {
        const personagem = data.data.personagems.items[0];
        const personagemElement = document.createElement("div");
        personagemElement.innerHTML = `
          <h2>${personagem.name}</h2>
          <img src="${personagem.imageUrl}" alt="${personagem.name}">
        `;
        document.body.appendChild(personagemElement);
      })
      .catch(error => console.error('Erro na consulta GraphQL:', error));
}

buscarTodos();
buscarId(308);
getpersonagemByName("Mickey Mouse"); 
getpersonagemsWithGraphQL();

  