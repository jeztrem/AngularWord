import { CrossReference } from './crossreference';

export interface IReference extends CrossReference.IReference {
    text: string;
}

export class Reference implements IReference {
    constructor(
        public book: string,
        public chapter: number,
        public start: number,
        public finish: number,
        public text: string) { }
}

export class VerseDetail {
    constructor(
        public index: number,
        public text: string,
        public remarks: string[],
        public applications: string[],
        public references: Reference[]) { }
}
