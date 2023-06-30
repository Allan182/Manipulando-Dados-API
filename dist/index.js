"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("./Character");
const vetCharacters = [];
function getCharacterForRickAndMortyAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://rickandmortyapi.com/api/character";
        const response = yield fetch(url);
        const jsonData = response.json();
        return new Promise((resolve, reject) => {
            if (jsonData) {
                resolve(jsonData);
            }
            else {
                reject();
            }
        });
    });
}
getCharacterForRickAndMortyAPI()
    .then((fromResolve) => {
    fromResolve.results.forEach((element) => {
        const character = new Character_1.Character(element.name, element.species, element.gender, element.status, element.type); // Instanciando cada personagem do vetor de personagens da API 
        vetCharacters.push(character); // Preenchimento do Vetor com os Dados Vindos da API
    });
    vetCharacters.forEach(e => console.log(`${e.toString()}. \n <==============>`));
})
    // Tratamento de Excessões com exibição de Error no Console para finalidades de testes.
    .catch((fromReject) => console.error(`Error Custom Message: ${fromReject.name} : ${fromReject.message}`));
//# sourceMappingURL=index.js.map