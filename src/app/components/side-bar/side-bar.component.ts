import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {trigger, state, group, style, animate, transition} from '@angular/animations';
import { About } from 'src/app/models/about';
import { GalleryService } from 'src/app/gallery.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
// Component for displaying mobile/desktop navbar/about/footer
export class SideBarComponent implements OnInit {

  // Determines whether mobile about panel is shown
  showInfo = true;

  // Determines whether screen size is mobile
  mobile = false;
  aboutData: Observable<About>;

  constructor(private service: GalleryService, private eRef: ElementRef) { }

  ngOnInit() {
    // Check for screen size
    this.checkInfo();
    // Initialise about data observable
    this.aboutData = this.service.getAbout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // Check pane modes on screen resize
    this.checkInfo();
  }

  // Logic to determine whether about text is shown
  checkInfo() {
    // If new screen size is mobile
    if (window.innerWidth < 760) {
      if (!this.mobile) {
        // Don't hide about content if already in mobile
        this.showInfo = false;
      }
      this.mobile = true;
    } else {
      // If desktop sized, show info
      this.showInfo = true;
      this.mobile = false;
    }
  }

  // Toggle about text if in mobile view
  toggleInfo(e) {
    e.stopPropagation();
    this.showInfo = !this.showInfo;
  }

  // Hide about info if click outside about text
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      if (this.mobile) {
        this.showInfo = false;
      }
    }
  }

}
