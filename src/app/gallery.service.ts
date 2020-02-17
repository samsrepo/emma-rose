import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Piece } from './models/piece';
import { About } from './models/about';
import * as Butter from 'buttercms';
import { AppErrorHandler } from './error-handler';
import { environment } from './../environments/environment';

export const butterService = Butter(environment.butter_cms_token);

@Injectable({
  providedIn: 'root'
})
// Main service reponsible for making calls to CMS service
export class GalleryService {

  constructor(private errorHandler: AppErrorHandler) {}

  // Fetch all items found under the 'gallery' page type in butter CMS
  public getPieces(): Observable<Piece[]> {
    return this.fromPromise(
      butterService.page.list('gallery', {page_size: 50})).pipe(
        map(resp => {
          const mappedPieces = [];
          for (const i in resp.data.data) {
            if (resp.data.data[i]) {
              // Map each page found to a Piece object
              mappedPieces.push(this.formatPiece(resp.data.data[i]));
            }
          }
          return mappedPieces;
        })
    );
  }

  // Fetch a specific art piece using the passed in slug
  public getPiece(id: string): Observable<Piece> {
    return this.fromPromise(
      butterService.page.retrieve('gallery', id)).pipe(map(pieces => this.formatPiece(pieces.data.data))
    );
  }

  // Format the piece as the application expects
  private formatPiece(rawPiece: any): Piece {
    return {...rawPiece.fields, slug: rawPiece.slug };
  }

  // Fetch the fields from the 'about' page
  public getAbout(): Observable<About> {
    return this.fromPromise(
      butterService.page.list('about')).pipe(map(resp => resp.data.data[0].fields)
    );
  }

  // Helper method to convert a promise to an observable
  private fromPromise(promise): Observable<any> {
    return from(<Promise<any>>promise).pipe(
      catchError(err => {
        this.errorHandler.handleError(err);
        return throwError('An error occurred');
        })
    );
  }
}
