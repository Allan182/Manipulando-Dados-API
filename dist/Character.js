"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, species, gender, status, type) {
        this._name = name;
        this._species = species;
        this._gender = gender;
        this._status = status;
        this._type = type;
    }
    ;
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    ;
    get species() {
        return this._species;
    }
    set species(newSpecie) {
        this._species = newSpecie;
    }
    ;
    get gender() {
        return this._gender;
    }
    set gender(newGender) {
        this._gender = newGender;
    }
    ;
    get status() {
        return this._status;
    }
    set status(newStatus) {
        this._status = newStatus;
    }
    ;
    get type() {
        return this._type;
    }
    set type(newType) {
        this._type = newType;
    }
    ;
    toString() {
        return "Character Data | Name: " + this.name +
            ", Species: " + this.species + ", Gender: " +
            this.gender + ", Status: " + this._status + ", Type: " + this._type;
    }
    ;
}
exports.Character = Character;
;
//# sourceMappingURL=Character.js.map