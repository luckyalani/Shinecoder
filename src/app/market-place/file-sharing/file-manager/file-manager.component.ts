import { Dialog } from '@angular/cdk/dialog';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { SidebarService } from 'src/app/services/sidebar.service';
import { FileSharingMenu, accountingMenu } from 'src/app/shared/menu-data';
import { MountNetworkVolumeIconPopUpComponent } from './mount-network-volume-icon-pop-up/mount-network-volume-icon-pop-up.component';



/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Main File Sharing',
    children: [{ name: 'Client Files' },
    {
      name: 'gtssolution-gtss',
      children: [{ name: 'My Files' }, { name: 'Shared' }]
    },
    {
      name: 'Public',
      children: [{ name: 'aaa' }, { name: 'Catalogue' }, { name: 'Demo' }, { name: 'NuovaCartella' }, { name: 'Test' }]
    }],
  },
  {
    name: 'Trash',
    children: [
      {
        name: 'Client Files',
        children: [{ name: '00640' }, { name: '00728' },
        {
          name: '00728 1',
          children: [{ name: 'Billing' }, { name: 'Views' }]
        },
        { name: '00728 2' }, { name: '00773' }, { name: '00777' }
        ],
      },
      {
        name: 'Client Files',
        children: [{ name: '00640' }],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */


@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent {
  constructor(private SidebarService: SidebarService, public dialog: MatDialog) {
    this.SidebarService.updateData(FileSharingMenu)

    this.dataSource.data = TREE_DATA;
  }

  mountNetworkVolumeIconPopUp() {
    const dialog = this.dialog.open(MountNetworkVolumeIconPopUpComponent, {
      minWidth: '70%'
    })
  }



  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
