import {
    Component, ComponentFactoryResolver, OnInit
} from '@angular/core';
import {CounterService} from './counter.service';
import 'rxjs/operators/throttleTime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public dima = '';

    constructor(
        private _counter: CounterService,
        private resolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {
        console.log('dima');
        this._counter.getGlobalName()
            .subscribe(
                name => {
                    this.dima = name;
                }
            )
        ;
    }
}
