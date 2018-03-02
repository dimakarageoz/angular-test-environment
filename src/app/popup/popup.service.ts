import {Component, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {PopupComponent} from './popup.component';
import {Subject} from 'rxjs/Subject';

export enum PopupType {
    component = 'popup-component',

    message = 'popup-message',

    confirm = 'popup-confirm'
}

export enum PopupBtnPosition {
    left = 'LEFT',

    right = 'RIGHT',

    center = 'CENTER'
}

export interface PopupButton {
    label: string;

    callback: any;

    position?: PopupBtnPosition;
}

export interface PopupOptionalProperty {
    buttons?: Array<PopupButton>;

    openCallback?: Function;

    closeCallback?: Function;

    bindings?: object;

    unclosable?: boolean;
}

export interface PopupConfigure extends PopupOptionalProperty {
    type: PopupType;

    title: string;

    message?: string;

    component?: any;
}


@Injectable()
export class PopupService {
    private popupConfig: BehaviorSubject<PopupConfigure> = new BehaviorSubject(null);

    private popupOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private popupSubject = new Subject();

    private popup: PopupComponent;

    constructor(
    ) {
        this.popupSubject.subscribe(
        (next: PopupComponent) => this.popup = next
        );
    }

    showPopup(
        configuration: PopupConfigure | PopupType,
        title?: string,
        message?: string,
        buttonCb?: PopupButton | any,
        closeCb?: PopupButton | any,
        options?: PopupOptionalProperty
    ) {
        if (typeof configuration === 'string') {
            let config = {
                type: <PopupType>configuration,
                title,
                message,
                buttons: [ (buttonCb && 'label' in buttonCb)
                    ? buttonCb
                    : {
                        label: 'Okay',
                        callback: () => {
                            if (buttonCb) buttonCb();
                        }
                    }
                ]
            };

            if (closeCb) {
                config.buttons.push((closeCb && 'label' in closeCb)
                ? closeCb
                : {
                    label: configuration === PopupType.confirm ? 'Refuse' : 'Close',
                    callback: ()  => {
                        if (closeCb) closeCb();
                    }
                });
            }

            if (options) {
                config = Object.assign(config, options);
            }

            config.buttons.forEach(item => {
                const cb = item.callback;
                item.callback = () => {
                    cb();
                    this.closePopup();
                };
            });

            this.popupConfig.next(config);
        }

        if (typeof configuration === 'object') {
            if (configuration.buttons) {
                configuration.buttons.forEach((button: PopupButton) => {
                    const cb = button.callback;
                    button.callback = () => {
                        cb();
                        this.closePopup();
                    };
                });
            }

            this.popupConfig.next(<PopupConfigure>configuration);
        }
    }

    getPopupConfiguration(): BehaviorSubject<PopupConfigure> {
        return this.popupConfig;
    }

    isPopupOpen(): BehaviorSubject<boolean> {
        return this.popupOpen;
    }

    getLoading(): BehaviorSubject<boolean> {
        return this.isLoading;
    }

    closePopup(): void {
        this.popupOpen.next(false);
    }

    openPopup(): void {
        this.popupOpen.next(true);
    }

    startLoading(): void {
        this.isLoading.next(true);
    }

    endLoading(): void {
        this.isLoading.next(false);
    }

    getPopupInstance(): PopupComponent {
        return this.popup;
    }

    setPopupInstance(inst: PopupComponent): void {
        return this.popupSubject.next(inst);
    }
}
