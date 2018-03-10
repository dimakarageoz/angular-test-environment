import { Injectable } from '@angular/core';

export enum IAnimationStep {
    slider = 'slider',

    slowAppear = 'slowAppear'
}

export interface IStepComponent {
    step: number;

    label: string;

    component: any;

    bindings?: object;

    cbToPrevStep?: any;

    cbToNextStep?: any;

    actionToAccess?: any;
}

export interface StepInstruction {
    steps: Array<IStepComponent>;

    label: string;

    animation?: IAnimationStep;

    cbForAllNextStep?: any;

    cbForAllPrevStep?: any;

    finallyCb?: any;
}

@Injectable()
export class StepperService {

  constructor() { }

}
