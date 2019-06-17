export namespace Note {

    export interface IVerseNote {
        index: number;
        remarks: string[];
        applications: string[];
    }

    export class RootObject {
        constructor(
            public chapter: number,
            public versenotes: IVerseNote[]) { }
    }
}
