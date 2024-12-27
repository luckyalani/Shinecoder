import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { AddNewArticleComponent } from './add-new-article/add-new-article.component';
import { MaterialModule } from '../material/material.module';
import { MatDivider } from '@angular/material/divider';
import { NewGroupPopupComponent } from './new-group-popup/new-group-popup.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CustomerModule } from '../customer/customer.module';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ClickViewPageComponent } from './click-view-page/click-view-page.component';
import { BlogGroupbtnPageComponent } from './blog-groupbtn-page/blog-groupbtn-page.component';
import { BlogClickGbEditbtnpopupComponent } from './blog-click-gb-editbtnpopup/blog-click-gb-editbtnpopup.component';


@NgModule({
  declarations: [
    AddNewArticleComponent,
    NewGroupPopupComponent,
    BlogPageComponent,
    EditArticleComponent,
    ClickViewPageComponent,
    BlogGroupbtnPageComponent,
    BlogClickGbEditbtnpopupComponent
   
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule,
    CustomerModule
  ]
})
export class BlogModule { }
