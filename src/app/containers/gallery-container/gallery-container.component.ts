import { Component, OnInit, HostListener } from '@angular/core';
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

  // Main pieces property for gallery
  pieces: Piece[];

  // Initialise the next page to 1 as it will be the first on load
  nextPage = 1;

  ngOnInit() {
    // Setup our pieces observable
     this.service.getPieces(this.nextPage).subscribe(resp => {
      // Set our pieces property
      this.pieces = resp.pieces;
      // Set page to the next page
      this.nextPage = resp.nextPage;
     });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1 && this.nextPage) {
      // Once we've hit the bottom of the page, load the next page if there's another
      this.service.getPieces(this.nextPage).subscribe(resp => {
        // Add the new page's pieces to the ones we have
        this.pieces = this.pieces.concat(resp.pieces);
        // Set the next page
        this.nextPage = resp.nextPage;
      });
    }
}

}
