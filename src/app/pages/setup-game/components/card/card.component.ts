import { Component, Input, OnInit } from '@angular/core';

import { PhotoPerfil } from './../../../../shared/models/photo-perfil.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() photo : PhotoPerfil;
  constructor() { }

  ngOnInit(): void {
  }

}
