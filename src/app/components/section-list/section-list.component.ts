import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerseService } from 'src/app/services/verse.service';
import { Section } from '../../model/section';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent {

  sections: Section.RootObject[] = [];

  constructor(
    private router: Router,
    private verse_service: VerseService) {
    this.sections = this.verse_service.getSections();
  }

  userClickedOnSection(_id: number): void {
    this.router.navigateByUrl('/sections/' + _id);
  }
}
