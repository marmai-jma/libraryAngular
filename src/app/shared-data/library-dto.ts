import { AdressDTO } from './adress-dto';
import { DirectorDTO } from './director-dto';

export class LibraryDTO {
    constructor(
        public id:number,
        public label : string,
        public type: string,
        public adresseDTO: AdressDTO,
        public directorDTO: DirectorDTO
    )
    {}
}
