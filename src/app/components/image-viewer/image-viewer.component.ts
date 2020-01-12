import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// Component to view images full screen
export class ImageViewerComponent implements OnInit {

  @Input() open: boolean;
  @Input() imageURL: string;

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
