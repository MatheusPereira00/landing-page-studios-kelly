import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Cilios } from 'src/app/data/interface/cilios-interface';
import { CiliosService } from 'src/app/data/service/cilios.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public cilios!: Cilios[];

  private _ciliosService = inject(CiliosService);

  public getAllCilios$ = this._ciliosService.getAllCilios$;

  ngOnInit(): void {
    this._ciliosService.getAllCilios();
  }
}
