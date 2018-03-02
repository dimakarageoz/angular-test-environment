import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import {PopupService} from './popup.service';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
    imports: [
    CommonModule, MatProgressSpinnerModule
    ],
    providers: [PopupService],
    declarations: [PopupComponent],
    exports: [PopupComponent]
})
export class PopupModule { }
