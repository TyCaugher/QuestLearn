import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestDialogComponent } from '../add-quest-dialog/add-quest-dialog.component';

@Component({
  selector: 'questlearn-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {
  opened = false;
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openQuestDialog() {
    const dialogRef = this.dialog.open(AddQuestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
