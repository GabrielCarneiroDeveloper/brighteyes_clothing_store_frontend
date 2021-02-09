import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  ClothesCreateDTO,
  ClothesDetailsDTO,
  ClothesStatus,
  ClothesUpdateDTO,
} from '../clothes.interface';

@Component({
  selector: 'app-clothes-form',
  templateUrl: './clothes-form.component.html',
  styleUrls: ['./clothes-form.component.scss'],
})
export class ClothesFormComponent implements OnInit {
  formGroup: FormGroup;
  isUpdating: boolean;
  uploader: FileUploader;

  @ViewChild('photo', { static: false })
  photoInput: ElementRef<HTMLInputElement>;

  @Input() statusList: Observable<ClothesStatus[]>;

  @Output() createObject = new EventEmitter<ClothesCreateDTO>();
  @Output() updateObject = new EventEmitter<ClothesUpdateDTO>();

  constructor(private fb: FormBuilder, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.isUpdating = false;
    this.formGroup = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantityInStock: [null, [Validators.required, Validators.min(0)]],
      status: [null, [Validators.required]],
      photo: [null, [Validators.required]],
    });
    this.loadFileModule();
  }

  async sendForm(): Promise<void> {
    try {
      if (!this.isUpdating) {
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = async (
          _: FileItem,
          response: string
        ) => {
          const resp = JSON.parse(response) as {
            success: boolean;
            filename: string;
          };
          this.formGroup.patchValue({ photo: resp.filename });
          this.createObject.next(this.formGroup.value);
        };
      } else {
        this.updateObject.next(this.formGroup.value);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private loadFileModule(): void {
    this.uploader = new FileUploader({
      url: `${environment.BACKEND_ADDRESS}/clothes/upload`,
      itemAlias: 'image',
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      console.log('Uploaded File Status', status);
      this.toastrService.success('File successfully uploaded!');
    };

    this.uploader.onErrorItem = (item: FileItem, response: string) => {
      console.error(item);
      this.toastrService.error(response);
    };
  }

  setPhoto(value: string): void {
    this.formGroup.patchValue({ photo: value });
  }

  setClothesToUpdate(clothes: ClothesDetailsDTO) {
    this.isUpdating = true;
    this.formGroup.patchValue(clothes);
    this.formGroup.patchValue({ status: clothes.status.id });
  }

  resetForm(): void {
    this.formGroup.reset();
    this.isUpdating = false;
    // const photoInputValue = this.photoInput.nativeElement.files[0]?.name;
    // if (photoInputValue) console.log(photoInputValue);
    this.photoInput.nativeElement.value = '';
  }

  isValid(attr: string): string {
    return this.formGroup.get(attr).valid ? 'is-valid' : 'is-invalid';
  }

  fileSelected(): string {
    return this.uploader.getNotUploadedItems().length
      ? 'is-valid'
      : 'is-invalid';
  }

  showInvalidFeedback(attr: string): boolean {
    return this.isValid(attr) === 'is-invalid' ? true : false;
  }
}
