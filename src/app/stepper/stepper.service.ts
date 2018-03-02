import { Injectable } from '@angular/core';

export enum IAnimationStep {
    slider = 'slider',

    slowAppear = 'slowAppear'
}

export interface IStepComponent {
    step: number;

    label: string;

    component: object;

    bindings?: object;

    cbToPrevStep?: any;

    cbToNextStep?: any;
}

export interface StepInstruction {
    steps: Array<IStepComponent>;

    label: string;

    animation?: IAnimationStep;

    actionToAccess: string;

    cbForAllNextStep?: any;

    cbForAllPrevStep?: any;

    finallyCb?: any;
}

@Injectable()
export class StepperService {

  constructor() { }

}
