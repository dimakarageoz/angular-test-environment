import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnChanges, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements AfterViewInit, OnChanges {

    @Input() step: number;

    @Input() label: string;

    @Input() component: any;

    @Input() bindings?: object;

    @Input() actionToAccess?: any;

    @ViewChild('container', {read: ViewContainerRef}) container;

    constructor(
        private resolver: ComponentFactoryResolver
    ) { }

    ngOnChanges(): void {
        if (!this.actionToAccess || this.actionToAccess()) {
            return this.insertComponent();
        }
    }

    ngAfterViewInit(): void {
        this.insertComponent();
    }

    insertComponent(): void {
        const component = this.resolver.resolveComponentFactory(this.component);

        if (this.container) { this.container.clear(); }

        const componentInstance = this.container.createComponent(component);

        if (typeof this.bindings === 'object') {
            for (const property in this.bindings) {
                componentInstance.instance[property] = this.bindings[property];
            }
        }
    }
}
