import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {PopupService, PopupType} from '../popup/popup.service';
import {PositionEditorComponent} from '../position-editor/position-editor.component';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
    constructor(
        private popupService: PopupService
    ) { }

    showConfirmPopup(): void {
        this.popupService.showPopup(
            PopupType.message,
            'Google map',
            'For using google map you should allow to track your position.\n Do you agree?',
            () => console.log('User agree'),
            {
                label: 'Fuck you!',
                callback: () => console.log('User refuse')
            }
        );
    }

    showMessagePopup(): void {
        this.popupService.showPopup(
            PopupType.message,
            'Funny message :)',
            'Hello, this message should makes you happy. If it\'s not happened, we return your money ;)',
            null , null, {
                unclosable: true
            }
        );
    }

    showComponentPopup(): void {
        this.popupService.showPopup({
            type: PopupType.component,
            title: 'Edit user position',
            component: PositionEditorComponent,
            bindings: {
                startPosition: ['27.2231132', '28.8464422']
            },
            buttons: [
                {
                    label: 'Close',
                    callback: () => this.popupService.getPopupInstance().testPopupMethod()
                }
            ]
        });
    }
}
