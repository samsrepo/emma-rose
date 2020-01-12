import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/app/models/piece';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
// Container responsible for displaying all pieces found in
// 'Gallery' page type in CMS
export class GalleryContainerComponent implements OnInit {

  constructor(private service: GalleryService) { }

  pieces: Observable<Piece[]>;

  ngOnInit() {
    // Setup our pieces observable
    this.pieces = this.service.getPieces();
  }

}
