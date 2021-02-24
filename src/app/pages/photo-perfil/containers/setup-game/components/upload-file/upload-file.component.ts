import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadFileComponent implements OnInit {

  @ViewChild('inputFile') inputFileVariable: ElementRef;
  @Output() selectedFile = new EventEmitter();

  imageURL: string;
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      originalFile: [null],
      imageURL: ['']
    })
  }

  resetComponentState() {
    this.uploadForm.reset();
    this.imageURL = '';
    this.inputFileVariable.nativeElement.value = "";

    this.cdr.detectChanges();
  }

  showPreview(event: Event) {
    const el = event.target as HTMLInputElement;

    if (el.files && el.files.length > 0) {

      const file = el.files[0];

      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
        this.updateFormFileValues(file);
        this.submit();
      }
      reader.readAsDataURL(file)
    }

  }

  updateFormFileValues(file: File) {
    this.uploadForm.patchValue({
      originalFile: file,
      imageURL: this.imageURL,
    });
    this.uploadForm.get('originalFile').updateValueAndValidity()
    this.uploadForm.get('imageURL').updateValueAndValidity()
  }

  submit() {
    this.selectedFile.emit(this.uploadForm.value);
  }
}
