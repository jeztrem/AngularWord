import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { SectionOverviewComponent } from './components/section-overview/section-overview.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SectionEditComponent } from './components/section-edit/section-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionOverviewComponent,
    SectionListComponent,
    SectionDetailComponent,
    SectionHeaderComponent,
    SectionEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'sections',
        component: SectionListComponent
      },
      {
        path: 'sections/:section_id',
        component: SectionDetailComponent
      },
      {
        path: 'edit/sections/:section_id',
        component: SectionEditComponent
      },
      {
        path: '',
        redirectTo: '/sections',
        pathMatch: 'full'
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
