import {AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {PopupConfigure, PopupService} from './popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements AfterViewInit {
    public popup: PopupConfigure = null;

    public isPopupOpen: boolean = false;

    public isLoading: boolean = false;

    @ViewChild('content', {read: ViewContainerRef}) content;

    constructor(
        private popupService: PopupService,
        private componentResolve: ComponentFactoryResolver
    ) {
        this.popupService.setPopupInstance(this);

        this.popupService
            .getLoading()
            .subscribe(next => this.isLoading = next)
        ;

        this.popupService
            .isPopupOpen()
            .subscribe(next => this.isPopupOpen = next)
        ;
    }

    ngAfterViewInit(): void {
        this.popupService
            .getPopupConfiguration()
            .subscribe((configuration: PopupConfigure) => {
                if (configuration) {
                    this.content.clear();
                    this.popup = configuration;

                    if (configuration.component) {
                        const componentInstance = this.componentResolve.resolveComponentFactory(configuration.component);
                        const componentTemplate = this.content.createComponent(componentInstance);

                        if (configuration.bindings) {
                            componentTemplate.instance.bindings = configuration.bindings;
                        }
                    }
                    this.popupService.openPopup();
                }
            })
        ;
    }

    hidePopup(): void {
        this.popupService.closePopup();
    }

    testPopupMethod(): void {
        console.log('yeeeeeee');
    }
}
