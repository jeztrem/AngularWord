import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Section } from '../../model/section';

@Component({
  selector: 'app-section-overview',
  templateUrl: './section-overview.component.html',
  styleUrls: ['./section-overview.component.css']
})
export class SectionOverviewComponent {

  @Input() section: Section.RootObject;

  @Output() userClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  userClicked() {
    this.userClick.emit(this.section.id);
  }

}
