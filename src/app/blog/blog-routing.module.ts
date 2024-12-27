import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewArticleComponent } from './add-new-article/add-new-article.component';
import { NewGroupPopupComponent } from './new-group-popup/new-group-popup.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ClickViewPageComponent } from './click-view-page/click-view-page.component';
import { BlogGroupbtnPageComponent } from './blog-groupbtn-page/blog-groupbtn-page.component';
import { BlogClickGbEditbtnpopupComponent } from './blog-click-gb-editbtnpopup/blog-click-gb-editbtnpopup.component';

const routes: Routes = [
  { path: 'add-new', component: AddNewArticleComponent },
  { path: 'add-new-popup', component: NewGroupPopupComponent },
  { path: 'blog-page', component: BlogPageComponent },

  { path: 'edit-article', component: EditArticleComponent },
  { path: 'click-view', component: ClickViewPageComponent },
  { path: 'group-btn', component: BlogGroupbtnPageComponent },
  { path: 'edit-popup', component: BlogClickGbEditbtnpopupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
