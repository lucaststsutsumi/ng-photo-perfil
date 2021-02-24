import { TestBed } from '@angular/core/testing';

import { PhotoPerfilService } from './photo-perfil.service';

describe('PhotoPerfilService', () => {
  let service: PhotoPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
