import { Character } from "./Character";

const vetCharacters: Character[] = [];

async function getCharacterForRickAndMortyAPI(): Promise<string> {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const jsonData = response.json();

    return new Promise((resolve, reject) => {

        if (jsonData) {
            resolve(jsonData);
        } else {
            reject();
        }
    });
}


getCharacterForRickAndMortyAPI()
    .then((fromResolve: any) => {

        fromResolve.results.forEach((element: { name: string, species: string, gender: string, status: string, type: string; }) => {
            const character = new Character(element.name, element.species, element.gender, element.status, element.type); // Instanciando cada personagem do vetor de personagens da API 
            vetCharacters.push(character); // Preenchimento do Vetor com os Dados Vindos da API
        });
        vetCharacters.forEach(e => console.log(`${e.toString()}. \n <==============>`));
    })
    // Tratamento de Excessões com exibição de Error no Console para finalidades de testes.
    .catch((fromReject) => console.error(`Error Custom Message: ${fromReject.name} : ${fromReject.message}`));





