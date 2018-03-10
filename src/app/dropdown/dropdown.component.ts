import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

    @Input() list: Array<any>;

    @Input() selected: any;

    @Input() selectionAction: any;

    @Output() itemClickCallback = new EventEmitter<any>();

    @Output() openCb = new EventEmitter<any>();

    @Output() closeCb = new EventEmitter<any>();

    private isOpen: boolean = false;

    constructor() { }

    public itemClick(item: any) {
        this.itemClickCallback.emit(item);
        this.skipDropdown();
    }

    public showList(): void {
        this.isOpen = true;
        this.openCb.emit();
    }

    public skipDropdown(): void {
        this.isOpen = false;
        this.closeCb.emit();
    }

    public selection(item): boolean {
        if (this.selectionAction) {
            return this.selectionAction(item);
        }

        return item === this.selected;
    }
}
