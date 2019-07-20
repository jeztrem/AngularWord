import { Injectable } from '@angular/core';

import { Bible } from '../model/bible';
import { Book } from '../model/book';
import { Section } from '../model/section';
import { Note } from '../model/note';
import { VerseDetail, Reference } from '../model/versedetail';
import { SectionEdit } from '../model/sectionedit';

import genesis from '../data/bible/genesis.json';
import exodus from '../data/bible/exodus.json';
import leviticus from '../data/bible/leviticus.json';
import numbers from '../data/bible/numbers.json';
import deuteronomy from '../data/bible/deuteronomy.json';
import joshua from '../data/bible/joshua.json';
import kings1 from '../data/bible/kings.1.json';
import ecclesiastes from '../data/bible/ecclesiastes.json';
import isaiah from '../data/bible/isaiah.json';
import jeremiah from '../data/bible/jeremiah.json';
import obadiah from '../data/bible/obadiah.json';
import matthew from '../data/bible/matthew.json';
import mark from '../data/bible/mark.json';
import luke from '../data/bible/luke.json';
import john from '../data/bible/john.json';
import proverbs from '../data/bible/proverbs.json';
import psalms from '../data/bible/psalms.json';
import romans from '../data/bible/romans.json';
import corinthians1 from '../data/bible/corinthians.1.json';
import corinthians2 from '../data/bible/corinthians.2.json';
import galatians from '../data/bible/galatians.json';
import ephesians from '../data/bible/ephesians.json';
import thessalonians1 from '../data/bible/thessalonians.1.json';
import timothy1 from '../data/bible/timothy.1.json';
import timothy2 from '../data/bible/timothy.2.json';
import titus from '../data/bible/titus.json';
import hebrews from '../data/bible/hebrews.json';
import james from '../data/bible/james.json';
import peter1 from '../data/bible/peter.1.json';
import peter2 from '../data/bible/peter.2.json';
import john1 from '../data/bible/john.1.json';

// This needs to be program wide
// import james_sections from '../data/section/james.json';
// import james_notes from '../data/note/james.json';
// import james_references from '../data/reference/james.json';


import obadiah_sections from '../data/section/obadiah.json';
import obadiah_notes from '../data/note/obadiah.json';
import obadiah_references from '../data/reference/obadiah.json';

@Injectable({
  providedIn: 'root'
})

export class VerseService {
  /* This is a work around for '1 John' stored as 'John1' */
  /* The Key is what the user sees, the Value is what the app uses.*/
  //books=string[];
  //bible = new Bible.RootObject(books:string[]);
  bookKeyValue = new Map<string, Book.RootObject[]>();
  sectionKeyValue = new Map<string, Section.RootObject[]>();
  noteKeyValue = new Map<string, Note.RootObject[]>();
  referenceKeyValue = new Map<string, any>(); // no class necessary for this JSON object.

  section: Section.RootObject;
  sections: Section.RootObject[] = [];
  versedetails: VerseDetail[] = [];

  constructor() {
    this.setKeyValues();
    // this is a hack. Will change when different books are changed (e.g. obadiah). Home page will set.
    this.setBook('Obadiah');
  }

  setKeyValues() {

    this.bookKeyValue.set('Genesis', genesis);
    this.bookKeyValue.set('Exodus', exodus);
    this.bookKeyValue.set('Leviticus', leviticus);
    this.bookKeyValue.set('Numbers', numbers);
    this.bookKeyValue.set('Deuteronomy', deuteronomy);
    this.bookKeyValue.set('Joshua', joshua);
    this.bookKeyValue.set('1 Kings', kings1);
    this.bookKeyValue.set('Psalms', psalms);
    this.bookKeyValue.set('Proverbs', proverbs);
    this.bookKeyValue.set('Ecclesiastes', ecclesiastes);
    this.bookKeyValue.set('Isaiah', isaiah);
    this.bookKeyValue.set('Jeremiah', jeremiah);
    this.bookKeyValue.set('Obadiah', obadiah);
    this.bookKeyValue.set('Matthew', matthew);
    this.bookKeyValue.set('Mark', mark);
    this.bookKeyValue.set('Luke', luke);
    this.bookKeyValue.set('John', john);
    this.bookKeyValue.set('Romans', romans);
    this.bookKeyValue.set('1 Corinthians', corinthians1);
    this.bookKeyValue.set('2 Corinthians', corinthians2);
    this.bookKeyValue.set('Galations', galatians);
    this.bookKeyValue.set('Ephesians', ephesians);
    this.bookKeyValue.set('1 Thessalonians', thessalonians1);
    this.bookKeyValue.set('1 Timothy', timothy1);
    this.bookKeyValue.set('2 Timothy', timothy2);
    this.bookKeyValue.set('Titus', titus);
    this.bookKeyValue.set('Hebrews', hebrews);
    this.bookKeyValue.set('James', james);
    this.bookKeyValue.set('1 Peter', peter1);
    this.bookKeyValue.set('2 Peter', peter2);
    this.bookKeyValue.set('1 John', john1);

    this.sectionKeyValue.set('Obadiah', obadiah_sections);
    this.noteKeyValue.set('Obadiah', obadiah_notes);
    this.referenceKeyValue.set('Obadiah', obadiah_references);

  }
  setBook(_book: string): void {
    /* Sections */
    for (const section of this.sectionKeyValue.get(_book)) {
      this.sections.push(section);
    }
    /* VerseDetails */
  }

  getSections(): Section.RootObject[] {
    return this.sections;
  }

  getSection(_id: number): Section.RootObject {
    for (const section of this.sections) {
      if (section.id === _id) {
        this.section = section;
        return section;
      }
    }
    return null;
  }

  getVerseDetails(_id: number): VerseDetail[] {

    /* Construct this.versedetails. */
    /* New for each Section. */
    if (_id !== this.section.id) { return null; }

    this.versedetails = [];

    for (const book of this.bookKeyValue.get('Obadiah')) {
      if (book.chapter === this.section.chapter) {
        // Now I have the correct chapter.
        for (let index = this.section.start; index <= this.section.finish; index++) {
          for (const verse of book.verse) {
            if (index === verse.index) {
              // Now I have the correct verse.
              let versenote: Note.IVerseNote = null;
              for (const note of this.noteKeyValue.get('Obadiah')) {
                if (note.chapter === this.section.chapter) {
                  for (const entry of note.versenotes) {
                    if (entry.index === index) {
                      // Now I have the correct verse
                      versenote = entry;
                    }
                  }
                }
              }

              // const versereferences = this.loadReferences(this.section.chapter, index);
              const versereferences: Reference[] = [];
              for (const rootObject of this.referenceKeyValue.get('Obadiah')) {
                if (rootObject.chapter === this.section.chapter) {
                  for (const crossverse of rootObject.verse) {
                    if (crossverse.index === index) {
                      // Now I have the correct verse.
                      for (const versereference of crossverse.references) {
                        versereferences.push(
                          this.loadTextFromVerseService(
                            versereference.book,
                            versereference.chapter,
                            versereference.start,
                            versereference.finish));
                      }
                    }
                  }
                }
              }

              const versedetail =
                new VerseDetail(index,
                  verse.text,
                  versenote.remarks,
                  versenote.applications,
                  versereferences);

              this.versedetails.push(versedetail);
            }
          }
        }
      }
    }
    return this.versedetails;
  }

  getSectionEdit(_id: number): SectionEdit {
    if (_id !== this.section.id) { return null; }
    return new SectionEdit(this.section, this.versedetails);
  }

  loadTextFromVerseService(_book: string, _chapter: number, _start: number, _finish: number): Reference {
    const text = this.getVerseText(_book, _chapter, _start, _finish);
    const reference: Reference = new Reference(_book, _chapter, _start, _finish, text);
    return reference;
  }

  getVerseText(_book: string, _chapter: number, _start: number, _finish: number): string {

    let versetext = ' ';
    if (this.bookKeyValue.has(_book)) {
      const bibleBookValue: Book.RootObject[] = this.bookKeyValue.get(_book);
      for (const rootObject of bibleBookValue) {
        if (rootObject.chapter === _chapter) {
          // I have the right chapter.
          for (let index = _start; index <= _finish; index++) {
            for (const verse of rootObject.verse) {
              if (verse.index === index) {
                versetext += verse.text + ' ';
              }
            }
          }
        }
      }
    } else {
      versetext = 'Book not Found';
    }
    return versetext;
  }

  addVerse(_book: string, _chapter: number, _index: number, _text: string): string {

    let errMessage = 'yes';

    if (this.bookKeyValue.has(_book)) {
      const bibleBookValue: Book.RootObject[] = this.bookKeyValue.get(_book);
      for (const rootObject of bibleBookValue) {
        if (rootObject.chapter === _chapter) {
          // I have the right chapter.
          for (const verse of rootObject.verse) {
            if (verse.index === _index) {
              // versetext += verse.text + ' ';
            }
          }
        }
      }
    } else {
      errMessage = 'need to add book';
    }
    return errMessage;
  }
}
