import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Piece } from 'src/app/models/piece';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.css']
})
// Page responsible for displaying details about selected art piece
export class DetailContainerComponent implements OnInit {

  piece: Observable<Piece>;
  modalOpen = false;

  constructor(private route: ActivatedRoute, private service: GalleryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // Subscribe to router parameters to fetch page slug
      const id = params.get('id');
      // Use slug to find page
      this.piece = this.service.getPiece(id);
    });
  }

  @HostListener('wheel', ['$event'])
  handleWheelEvent(event) {
    if (this.modalOpen) {
      event.preventDefault();
    }
  }

  @HostListener('touchmove', ['$event'])
  handleTouchMoveEvent(event) {
    if (this.modalOpen) {
      event.preventDefault();
    }
  }

}
