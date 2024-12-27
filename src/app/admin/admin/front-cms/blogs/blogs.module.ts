import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { NewBlogDialogComponent } from './new-blog-dialog/new-blog-dialog.component';


@NgModule({
  declarations: [
    BlogsComponent,
    NewBlogComponent,
    NewBlogDialogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MaterialModule
  ]
})
export class BlogsModule { }
