import {AfterViewInit, Component, HostBinding, ViewChildren} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

    @ViewChildren('mat-drawer') toolbarElement;

    public label: string;

    constructor(
        private homeService: HomeService
    ) {
        this.label = this.homeService.getLabel().value;
        this.homeService.getLabel().subscribe(
            next => this.label = next
        );
    }

    ngAfterViewInit(): void {
        console.log(this.toolbarElement);
    }
}
