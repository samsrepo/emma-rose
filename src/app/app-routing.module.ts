import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryContainerComponent } from './containers/gallery-container/gallery-container.component';
import { DetailContainerComponent } from './containers/detail-container/detail-container.component';
import { ErrorComponent } from './containers/error/error.component';

const routes: Routes = [
  { path: '',  redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'gallery', pathMatch: 'full', component: GalleryContainerComponent},
  { path: 'piece/:id', pathMatch: 'full', component: DetailContainerComponent},
  { path: 'error/:code', pathMatch: 'full', component: ErrorComponent},
  { path: '**', redirectTo: '/gallery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
