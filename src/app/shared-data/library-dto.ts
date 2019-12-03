import { AdressDTO } from './adress-dto';
import { DirectorDTO } from './director-dto';

export class LibraryDTO {
    constructor(
        public id:string,
        public label : string,
        public type: string,
        public addressDTO: AdressDTO,
        public directorDTO: DirectorDTO
    )
    {}
}
