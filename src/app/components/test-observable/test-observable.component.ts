import { Component, OnInit } from '@angular/core';

import { ObservableService } from '../../services/observable.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  myData: any;
  observable: Observable<any>;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observable = this.observableService.test();
    this.observable.subscribe(this.performAction);
      }

  performAction(value) {
    console.log(value);
    this.myData = value;
  }
}
