import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        MatDividerModule,
        MatToolbarModule, MatInputModule],
    exports: [
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule,
        MatDividerModule,
        MatToolbarModule, MatInputModule]
})

export class MaterialModule { }
