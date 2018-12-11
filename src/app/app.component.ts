import { Component } from '@angular/core';
import { MatDialog, MatDialogContent } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novaaplicacao';
  constructor ( public dialog:MatDialog) { }

  openDialog(){
    const dialogref = this.dialog.open(AppComponent, {
      height: '350px'
    });
    dialogref.afterClosed().subscribe(result => {
      console.log('Resultado: ${result}');
    });
  }
}
