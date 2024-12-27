import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/customer/delete/delete.component';
import { ItemMappingSetupAddComponent } from './item-mapping-setup-add/item-mapping-setup-add.component';
import { PaymentModeMappingAddComponent } from './payment-mode-mapping-add/payment-mode-mapping-add.component';
import { ExpensesCategoriesComponent } from 'src/app/setting/Finance/expenses-categories/expenses-categories.component';
import { ExpensesCategoryAddComponent } from './expenses-category-add/expenses-category-add.component';
import { TaxMappingAddComponent } from './tax-mapping-add/tax-mapping-add.component';

@Component({
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.css']
})
export class GeneralTabComponent {
  default=false;
  sales=false;
  expenses=false;
  creditNote=false;
  expenseDefault=false;
  taxDefault=false;
  SalesExpences=false;
  constructor(public dialog: MatDialog) { }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {},
    });
  }
  itemMappingSetup(): void {
    const dialogRef = this.dialog.open(ItemMappingSetupAddComponent, {
      data: {},
      width:'80%'
    });
  }
  paymentModeMapping(): void {
    const dialogRef = this.dialog.open(PaymentModeMappingAddComponent, {
      data: {},
      width:'80%'
    });
  }
  expensesCategory(): void {
    const dialogRef = this.dialog.open(ExpensesCategoryAddComponent, {
      data: {},
      width:'80%'
    });
  }
  taxMapping(): void {
    const dialogRef = this.dialog.open(TaxMappingAddComponent, {
      data: {},
      width:'80%'
    });
  }
}
