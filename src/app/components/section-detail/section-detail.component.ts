import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Section } from '../../model/section';
import { VerseDetail } from '../../model/versedetail';
import { VerseService } from 'src/app/services/verse.service';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.css']
})

export class SectionDetailComponent implements OnInit {

  private section_id: number;
  private section: Section.RootObject;
  private versedetails: VerseDetail[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private verse_service: VerseService) {
  }

  ngOnInit() {
    /* set the properties. */
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.section_id = parseInt(params.get('section_id'), 10);
      if (this.section_id !== null) {
        this.section = this.verse_service.getSection(this.section_id);
        this.versedetails = this.verse_service.getVerseDetails(this.section_id);
      }
    });
  }

  userClickedOnEdit(): void {
    this.router.navigateByUrl('edit/sections/' + this.section_id);
  }
}
