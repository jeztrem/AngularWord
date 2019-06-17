export namespace CrossReference {

    export interface IReference {
        book: string;
        chapter: number;
        start: number;
        finish: number;
    }

    export interface IVerse {
        index: number;
        references: IReference[];
    }

    export class RootObject {
        constructor(
            public chapter: number,
            public verse: IVerse[]) { }
    }
}
