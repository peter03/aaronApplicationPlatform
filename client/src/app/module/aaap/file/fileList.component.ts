import { Component, inject, Injector, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { FilespecRepository } from "src/app/repository/aaap/filespec.repository";
import { Filespec } from "src/app/model/aaap/filespec.model";
import { BaseListComponent } from '../baseList.component';
import { AuthenticationService } from "src/app/service/aaap/authentication.service";
import { FileMetadata } from './file.metadata';

@Component({
    selector: "aaap-file-list",
    templateUrl: "fileList.component.html"
})
export class FileListComponent extends BaseListComponent<FilespecRepository, Filespec> implements OnDestroy {

    constructor(
      public repo: FilespecRepository,
      public router: Router,
      public authService: AuthenticationService,
      injector: Injector) {
      super(repo, router, authService, injector, FileMetadata)

      this.getListAsObservable().subscribe(res =>
        this.entities = res
      );
      
  }

  ngOnDestroy() {
    // this.repo.reset();
  }
  
  getFileUrl(id: number) : string {
      return this.repo.getFileUrl(id);
  }

  getFileWidthAndHeight(id: number) : any {

      const maxWidth = 300;
      let width: number, height: number;
            
      let filespec = this.repo.getEntityById(id);
      if (filespec && filespec.imagewidth && filespec.imageheight)
      {
          if (filespec.imagewidth> maxWidth) {
              width = maxWidth;
              let aspectRatio = filespec.imagewidth / filespec.imageheight || 1;
              height = width / aspectRatio;
          }
          else
          {
              width = filespec.imagewidth;
              height = filespec.imageheight;
          }
      }
      return {width: width, height: height}
  }
    
}
