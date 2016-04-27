export class Party {
    
    constructor(
        public name: string,
        public host: string,
        public pinReq: boolean,
        public pin?: string
    ){}
}