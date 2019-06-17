export namespace Book {

    export interface IVerse {
        index: number;
        text: string;
    }

    export class RootObject {
        constructor(
            public chapter: number,
            public verse: IVerse[]) { }
    }
}
