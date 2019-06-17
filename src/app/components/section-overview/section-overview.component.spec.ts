import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOverviewComponent } from './section-overview.component';

describe('SectionOverviewComponent', () => {
  let component: SectionOverviewComponent;
  let fixture: ComponentFixture<SectionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
