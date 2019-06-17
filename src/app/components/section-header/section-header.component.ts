import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


import sections from '../../data/section/obadiah.json';
import { Section } from '../../model/section';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {


  section: Section.RootObject;

  constructor(
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.section = this.findSectionById(parseInt(params.get('section_id'), 10));
    });
  }

  findSectionById(_id: number): Section.RootObject {
    for (const section of sections) {
      if (section.id === _id) {
        return section;
      }
    }
    return null;
  }

}
