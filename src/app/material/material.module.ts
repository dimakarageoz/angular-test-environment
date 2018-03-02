import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

const materialElements: Array<any> = [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatProgressSpinnerModule
];

@NgModule({
    exports: materialElements,
    imports: materialElements
})
export class MaterialModule { }
