import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhotoPerfil } from 'src/app/pages/photo-perfil/photo-perfil.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() photo: PhotoPerfil;
  @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.onDelete.emit(id);
  }
}
