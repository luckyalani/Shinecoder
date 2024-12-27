import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { NewBlogDialogComponent } from './new-blog-dialog/new-blog-dialog.component';

const routes: Routes = [
  {
    path: '', component: BlogsComponent
  },
  {
    path: 'new-blog', component: NewBlogComponent
  },
  {
    path: 'new-blog-dialog', component: NewBlogDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
