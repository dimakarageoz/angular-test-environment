import { Component } from '@angular/core';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent {

    public label: string;

    constructor(
        private homeService: HomeService
    ) { }

    saveLabel(label: string): void {
        this.homeService.setLabel(label);
    }
}
