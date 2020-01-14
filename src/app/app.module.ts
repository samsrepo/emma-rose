import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { GalleryContainerComponent } from './containers/gallery-container/gallery-container.component';
import { DetailContainerComponent } from './containers/detail-container/detail-container.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SanitiseHtmlPipe } from './sanatise.pipe';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { AppErrorHandler } from './error-handler';
import { ErrorComponent } from './containers/error/error.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    GalleryContainerComponent,
    DetailContainerComponent,
    FooterComponent,
    LoadingComponent,
    SanitiseHtmlPipe,
    ImageViewerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PinchZoomModule,
    NgxMasonryModule
  ],
  providers: [SanitiseHtmlPipe, AppErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
