import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpencesComponent } from './expences/expences.component';
import { AddNewExpenseComponent } from './add-new-expense/add-new-expense.component';
import { EditExpencesComponent } from './edit-expences/edit-expences.component';
import { ClickViewComponent } from './click-view/click-view.component';
import { ImportLeadsComponent } from './import-leads/import-leads.component';

const routes: Routes = [
  {path: '',component:ExpencesComponent },
  {path: 'add-new-expense',component:AddNewExpenseComponent },
  {path: 'edit-expencese',component:EditExpencesComponent },
  {path: 'click-view',component:ClickViewComponent },
  {path: 'import-leads',component:ImportLeadsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpencesRoutingModule { }
