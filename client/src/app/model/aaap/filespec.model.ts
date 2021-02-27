import { IId } from '../../interface/aaap/IId';

export class Filespec implements IId {

    id: number;
    filename: string;
    filecontent: any;
    filetypeId: number;
    description: string;
    filesize: number;
    imagewidth: number;
    imageheight: number;
    userId: number;
   
    constructor() { 

        this.filetypeId = 1;    // Product Image
    }
}
