import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperComponent} from './stepper.component';
import {StepperService} from './stepper.service';
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [StepperService],
    declarations: [StepperComponent, DynamicComponentComponent],
    exports: [StepperComponent, DynamicComponentComponent]
})
export class StepperModule { }
