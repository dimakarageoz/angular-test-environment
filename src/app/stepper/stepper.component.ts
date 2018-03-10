import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAnimationStep, IStepComponent} from './stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

    @Input() steps: Array<IStepComponent>;

    @Input() label: string;

    @Input() animation: IAnimationStep;

    @Output() cbForAllNextStep = new EventEmitter();

    @Output() cbForAllPrevStep = new EventEmitter();

    @Output() finallyCb = new EventEmitter();

    public step: number = 0;

    constructor() { }

    goToNext(): void {
        if (this.steps[this.step].cbToNextStep) this.steps[this.step].cbToNextStep();

        this.step++;
    }

    goToPrev(): void {
        if (this.steps[this.step].cbToPrevStep) this.steps[this.step].cbToPrevStep();

        this.step--;
    }
}
