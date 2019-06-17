export namespace Section {

    export interface ISection {
        book: string;
        chapter: number;
        start: number;
        finish: number;
    }

    export class RootObject {
        constructor(
            public id: number,
            public header: string,
            public book: string,
            public chapter: number,
            public start: number,
            public finish: number,
            public introduction: string[],
            public summary: string[]) { }
    }
}
