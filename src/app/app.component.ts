import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild(ChildComponent) child: ChildComponent

  constructor() { }

  ngAfterViewInit() {
    // After the view is initialized, this.child will be available
    this.update();
  }

  update() {
    this.child.sendData();
  }
}


