import {Component, Input, OnInit} from '@angular/core';
import {PopupBaseComponent} from '../popup/popup.base.component';
import {PopupService} from '../popup/popup.service';

export interface PositionEditorBindings {
    startPosition: Array<string>;
}

@Component({
  selector: 'app-position-editor',
  templateUrl: './position-editor.component.html',
  styleUrls: ['./position-editor.component.scss']
})
export class PositionEditorComponent extends PopupBaseComponent implements OnInit {

    @Input() bindings: PositionEditorBindings;

    constructor(
        protected popupService: PopupService
    ) { super(popupService); }


    ngOnInit(): void {
        console.log(this.bindings);
    }

    startTimerLoading(): void {
        this.startLoading();

        setTimeout(() => {
            this.stopLoading();
        }, 2000);
    }
}
