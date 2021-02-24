import { UploadFileComponent } from './../upload-file/upload-file.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-perfil-form',
  templateUrl: './photo-perfil-form.component.html',
  styleUrls: ['./photo-perfil-form.component.scss']
})
export class PhotoPerfilFormComponent implements OnInit {

  @ViewChild(UploadFileComponent) uploadComponent: UploadFileComponent;
  @Output() formResponse = new EventEmitter();

  form: FormGroup;


  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      customName: ['', Validators.required],
      fromAnime: ['', Validators.required],
      characterDescription: ['', Validators.required],
      imageURL: ['', Validators.required],
      originalFile: [null],
    })
  }

  ngOnInit(): void {
  }

  readFile(responseObject: { file: File, imageURL: string }) {

    this.form.patchValue({
      originalFile: responseObject.file,
      imageURL: responseObject.imageURL
    });
    this.form.get('originalFile').updateValueAndValidity();
    this.form.get('imageURL').updateValueAndValidity();

  }

  submit() {
    this.formResponse.emit(this.form.value);

    this.reset();
  }

  reset() {
    this.form.reset();
    this.uploadComponent.resetComponentState();
  }
}
