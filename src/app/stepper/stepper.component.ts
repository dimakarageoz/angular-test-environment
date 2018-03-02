import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAnimationStep, IStepComponent} from './stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

    @Input steps: Array<IStepComponent>;

    @Input label: string;

    @Input animation: IAnimationStep;

    @Output cbForAllNextStep = new EventEmitter();

    @Output cbForAllPrevStep = new EventEmitter();

    @Output finallyCb = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }
}
