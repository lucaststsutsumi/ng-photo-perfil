import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { PhotoPerfilCollection } from './../../../../shared/models/photo-perfil-collection';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoCollectionComponent implements OnInit {
  @Input() datasource: PhotoPerfilCollection;
  constructor() { }

  ngOnInit(): void {

  }

}
