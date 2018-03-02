import {PopupService} from './popup.service';

export class PopupBaseComponent {
    constructor(
        protected popupService: PopupService
    ) { }

    public startLoading(): void {
        this.popupService.startLoading();
    }

    public stopLoading(): void {
        this.popupService.endLoading();
    }

    public hidePopup(): void {
        this.popupService.closePopup();
    }
}
