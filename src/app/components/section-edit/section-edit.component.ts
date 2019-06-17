import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Section } from '../../model/section';
import { Note } from '../../model/note';
import { VerseDetail, Reference } from '../../model/versedetail';
import { VerseService } from 'src/app/services/verse.service';
import { SectionEdit } from 'src/app/model/sectionedit';

import sections from '../../data/section/james.json';
import notes from '../../data/note/james.json';
import book from '../../data/bible/james.json';
import references from '../../data/reference/james.json';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.css']
})
export class SectionEditComponent implements OnInit {

  section_id: number;
  section: Section.RootObject;
  versedetails: VerseDetail[] = [];
  sectionedit: SectionEdit;

  constructor(
    private route: ActivatedRoute,
    private verse_service: VerseService) { }

  ngOnInit() {

    /* set the properties. */
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.section_id = parseInt(params.get('section_id'), 10);
      if (this.section_id !== null) {
        this.section = this.verse_service.getSection(this.section_id);
        this.versedetails = this.verse_service.getVerseDetails(this.section_id);
        this.sectionedit = this.verse_service.getSectionEdit(this.section.id);
      }
    });
  }

  userClickedOnSave(): void {
    /* Now it is time to persist the data. */
    /* Need to push the data back to json objects: {section, notes, book, references} */

    /* Section */
    this.section.introduction = SectionEdit.StringToArray(this.sectionedit.section.introductionAsString);
    this.section.summary = SectionEdit.StringToArray(this.sectionedit.section.summaryAsString);

    /* VerseDetails */
    let i = 0;
    for (const versedetail of this.sectionedit.versedetails) {
      versedetail.remarks = SectionEdit.StringToArray(versedetail.remarksAsString);
      versedetail.applications = SectionEdit.StringToArray(versedetail.applicationsAsString);
      /* JSON nicely takes care of the deep copy. */
      this.versedetails[i].remarks = JSON.parse(JSON.stringify(versedetail.remarks));
      console.log(this.versedetails[i].remarks);
      this.versedetails[i].applications = JSON.parse(JSON.stringify(versedetail.applications));
      i++;
      /* freshen the cross references */
    }
    /* Now the local objects are fresh, so push to the db.  */
  }
}
