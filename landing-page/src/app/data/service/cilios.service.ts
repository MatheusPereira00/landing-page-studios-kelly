import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Cilios } from '../interface/cilios-interface';

@Injectable({
  providedIn: 'root',
})
export class CiliosService {
  private _http = inject(HttpClient);

  apiUrl = "http://localhost:3000/cilios"

  private _getAllCiliosSubject = new BehaviorSubject<Cilios[]>([]);
  public getAllCilios$ = this._getAllCiliosSubject.asObservable();

  public getAllCilios(): void {
    this._http
      .get<Cilios[]>(this.apiUrl)
      .pipe(take(1))
      .subscribe((cilios) => {
        this._getAllCiliosSubject.next(cilios);
      });
  }
}
