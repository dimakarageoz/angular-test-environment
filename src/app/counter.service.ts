import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CounterService {

    private name: Subject<string> = new Subject<string>();

    public getGlobalName(): Subject<string> {
        return this.name;
    }

    setGlobalName(value: string): void {
        if (!value) return;

        this.name.next(value);
    }
}
