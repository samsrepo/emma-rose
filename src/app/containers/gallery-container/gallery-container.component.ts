import { Component, OnInit, HostListener } from '@angular/core';
import { Piece } from 'src/app/models/piece';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/gallery.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
// Container responsible for displaying all pieces found in
// 'Gallery' page type in CMS
export class GalleryContainerComponent implements OnInit {

  constructor(private service: GalleryService) { }

  // Main pieces property for gallery
  pieces: Piece[];

  ngOnInit() {
    // Setup our pieces observable
     this.service.getPieces().pipe(debounceTime(500)).subscribe(pieces => {
      // Set our pieces property
      this.pieces = pieces;
     });
  }

}
