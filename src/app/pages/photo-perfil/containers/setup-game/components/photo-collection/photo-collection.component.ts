import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhotoPerfil } from 'src/app/pages/photo-perfil/photo-perfil.model';



@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoCollectionComponent implements OnInit {
  @Input() datasource: PhotoPerfil[] = [];
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  _onDelete(id: number) {
    this.onDelete.emit(id)
  }
}
