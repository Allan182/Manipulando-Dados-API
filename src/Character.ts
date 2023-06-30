export class Character {


    
    private _name: string;
    private _species: string;
    private _gender: string;
    private _status: string;
    private _type: string;

    constructor(name: string, species: string, gender: string, status: string, type: string) {
        this._name = name;
        this._species = species;
        this._gender = gender;
        this._status = status;
        this._type = type;
    };

    public get name(): string {
        return this._name;
    }
    public set name(newName: string) {
        this._name = newName;
    };

    public get species(): string {
        return this._species;
    }
    public set species(newSpecie: string) {
        this._species = newSpecie;
    };

    public get gender(): string {
        return this._gender;
    }
    public set gender(newGender: string) {
        this._gender = newGender;
    };

    public get status(): string {
        return this._status;
    }
    public set status(newStatus: string) {
        this._status = newStatus;
    };

    public get type(): string {
        return this._type;
    }
    public set type(newType: string) {
        this._type = newType;
    };

    public toString() {
        return "Character Data | Name: " + this.name +
            ", Species: " + this.species + ", Gender: " +
            this.gender + ", Status: " + this._status + ", Type: " + this._type;
    };
};