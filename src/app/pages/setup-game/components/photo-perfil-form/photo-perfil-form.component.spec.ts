import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPerfilFormComponent } from './photo-perfil-form.component';

describe('PhotoPerfilFormComponent', () => {
  let component: PhotoPerfilFormComponent;
  let fixture: ComponentFixture<PhotoPerfilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPerfilFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPerfilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
