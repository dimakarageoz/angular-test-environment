import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperComponent} from './stepper.component';
import {StepperService} from './stepper.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [StepperService],
    declarations: [StepperComponent],
    exports: [StepperComponent]
})
export class StepperModule { }
