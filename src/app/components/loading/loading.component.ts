import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// Generic loading component
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
