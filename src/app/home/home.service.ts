import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class HomeService {

    public label: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }

    getLabel(): BehaviorSubject<string> {
        return this.label;
    }

    setLabel(label: string): void {
        this.label.next(label);
    }
}
