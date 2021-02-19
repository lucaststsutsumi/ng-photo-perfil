import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { PhotoPerfil } from './../../../../shared/models/photo-perfil.model';
import { initDb } from './db/test';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoCollectionComponent implements OnInit {
  @Input() datasource: PhotoPerfil[];
  constructor() { }

  ngOnInit(): void {

   // this.datasource = initDb;
  }

}
