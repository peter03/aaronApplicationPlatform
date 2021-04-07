import { Component, Input, ViewChild, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";

import { FilespecRepository } from "src/app/repository/aaap/filespec.repository";
import { Filespec } from "src/app/model/aaap/filespec.model";
import { BaseDetailComponent } from '../base.detailComponent';

import { LookupRepository } from "src/app/repository/aaap/lookup.repository";
import { Lookup } from 'src/app/model/aaap/lookup.model';

import { FileMetadata } from './file.metadata';

@Component({
  selector: "psk-file-detail",
  templateUrl: "fileDetail.component.html"
})
export class FileDetailComponent extends BaseDetailComponent<FilespecRepository, Filespec>  {

  filetypeList: Lookup[] = [];

  @ViewChild('fileControl', { static: true }) fileControl;

  imageUrl: string;
  fileToUpload: File = null;

  constructor(
    repo: FilespecRepository,
    router: Router,
    activeRoute: ActivatedRoute,
    location: Location,
    injector: Injector,
    private lookupRepo: LookupRepository) {
    super(repo, router, activeRoute, location, FileMetadata, injector);
    this.imageUrl = this.repo.getFileUrl(this.entity.id);
    this.filetypeList = this.lookupRepo.getFiletypeList();
  }

  onSelectFile(file: FileList) {

    //const allowed_types = ['image/png', 'image/jpeg'];

    this.fileToUpload = file.item(0);
    this.entity.filename = this.fileToUpload.name;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;

      // var img = new Image();
      // img.onload = () => {
      //     console.log(img.width + ", " + img.height);
      // };
      // img.src = this.imageUrl;

    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit() {

    let formData = new FormData();
    formData.append('Filespec', JSON.stringify(this.entity));
    formData.append('FileData', this.fileControl.nativeElement.files[0]);
    this.repo.uploadFile(formData);
    this.location.back();
  }


}
