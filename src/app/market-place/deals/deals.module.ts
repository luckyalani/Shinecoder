import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals/deals.component';
import { MatIconModule } from '@angular/material/icon';
import { DealsInstallComponent } from './deals-install/deals-install.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NewDealComponent } from './new-deal/new-deal.component';
import { DealsStepperComponent } from './deals-stepper/deals-stepper.component';
import { StepperProductComponent } from './deals-stepper/stepper-product/stepper-product.component';
import { StepperDetailsComponent } from './deals-stepper/stepper-details/stepper-details.component';
import { WonComponent } from './deals-stepper/stepper-details/won/won.component';
import { LostComponent } from './deals-stepper/stepper-details/lost/lost.component';
import { AddNewTaskComponent } from './deals-stepper/stepper-details/add-new-task/add-new-task.component';
import { EditDealComponent } from './edit-deal/edit-deal.component';
import { EditComponent } from './edit-deal/edit/edit.component';
import { AddNewCustomFieldComponent } from './edit-deal/edit/add-new-custom-field/add-new-custom-field.component';
import { CallComponent } from './deals-stepper/call/call.component';
import { CommentsComponent } from './deals-stepper/comments/comments.component';
import { AttachmentsComponent } from './deals-stepper/attachments/attachments.component';
import { NotesComponent } from './deals-stepper/notes/notes.component';
import { TasksComponent } from './deals-stepper/tasks/tasks.component';
import { MeetingsComponent } from './deals-stepper/meetings/meetings.component';
import { EmailComponent } from './deals-stepper/email/email.component';
import { ProductsComponent } from './deals-stepper/products/products.component';
import { ActivitiesComponent } from './deals-stepper/activities/activities.component';
import { AddItemsComponent } from './deals-stepper/products/add-items/add-items.component';
import { EditItemsComponent } from './deals-stepper/products/edit-items/edit-items.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SalesModule } from 'src/app/sales/sales.module';





@NgModule({
    declarations: [
        DealsComponent,
        DealsInstallComponent,
        NewDealComponent,
        DealsStepperComponent,
        StepperProductComponent,
        StepperDetailsComponent,
        WonComponent,
        LostComponent,
        AddNewTaskComponent,
        EditDealComponent,
        EditComponent,
        AddNewCustomFieldComponent,
        CallComponent,
        CommentsComponent,
        AttachmentsComponent,
        NotesComponent,
        TasksComponent,
        MeetingsComponent,
        EmailComponent,
        ProductsComponent,
        ActivitiesComponent,
        AddItemsComponent,
        EditItemsComponent,
        // StepperDealComponent    
    ],
    imports: [
      CommonModule, 
        DealsRoutingModule,
        MaterialModule,
        SalesModule
    ]
})
export class DealsModule { }
