import { FileSelectionComponent } from 'src/app/module/aaap/file/fileSelection.component';
import { FileDetailComponent } from 'src/app/module/aaap/file/fileDetail.component';
import { FileListComponent } from 'src/app/module/aaap/file/fileList.component';

export const fileRoutes = [
    {
        path: 'file', component: FileSelectionComponent,
        children: [
            { path: '', component: FileListComponent},
            { path: 'detail/:id', component: FileDetailComponent}
        ]
    }
];

export const fileComponents = [
    FileSelectionComponent,
    FileListComponent,
    FileDetailComponent,
];
