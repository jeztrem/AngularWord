import { Section } from './section';
import { VerseDetail } from './versedetail';

export interface ISection extends Section.RootObject {
    introductionAsString: string;
    summaryAsString: string;
}

export interface IVerseDetail extends VerseDetail {
    remarksAsString: string;
    applicationsAsString: string;
}

export class SectionEdit {

    public section: ISection;
    public versedetails: IVerseDetail[];

    constructor(_section: Section.RootObject, _versedetails: VerseDetail[]) {

        /* JSON nicely takes care of the deep copy. */

        this.section = JSON.parse(JSON.stringify(_section));
        this.versedetails = JSON.parse(JSON.stringify(_versedetails));

        this.section.introductionAsString = SectionEdit.ArrayToString(this.section.introduction);
        this.section.summaryAsString = SectionEdit.ArrayToString(_section.summary);

        for (const versedetail of this.versedetails) {
            versedetail.remarksAsString = SectionEdit.ArrayToString(versedetail.remarks);
            versedetail.applicationsAsString = SectionEdit.ArrayToString(versedetail.applications);
        }
    }

    public static ArrayToString(_stringArray: string[]): string {
        // _stringArray.forEach(entry => { _string += '\n' + entry; }) // elegant but useless;
        let _string = '';
        if (_stringArray.length === 0) {
            return _string;
        } else if (_stringArray.length === 1) {
            _string = _stringArray[0];
            return _string;
        } else {
            for (let i = 0; i < _stringArray.length - 1; i++) {
                _string += _stringArray[i] + '\n';
            }
            _string += _stringArray[_stringArray.length - 1];
            return _string;
        }
    }

    public static StringToArray(_string: string): string[] {
        const _stringArray: string[] = [];
        for (const entry of _string.split('\n')) {
            _stringArray.push(entry);
        }
        return _stringArray;
    }
}
