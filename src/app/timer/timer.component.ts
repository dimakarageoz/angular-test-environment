import {Component, Input,  OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

    @Input() parentName: string;

    @Input() action: any;

    public time = Date().normalize();

    ngOnInit() {
        setInterval(() => {
            this.time = Date().normalize();
        });
    }

    timerAction() {
        this.action(this.time);
    }

}
