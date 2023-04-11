import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from 'src/app/form/form.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  constructor(public dialog:MatDialog){}

  async openDialog(){
    const dialogRef = this.dialog.open(FormComponent,{
      width:"250px",
      data:{items:this.allItems}
    })

    dialogRef.afterClosed().subscribe(()=>{
      console.log("The dialog was closed!")
    });
  };

  allItems = [{
    title:'Pizza',
    description:'Best food in the world',
    qty:'20'
  },
  {
    title:'Pain au chocolate',
    description:'French desert found in bakeries',
    qty:'1200'
  },
  {
    title:'Eclair',
    description:'Tasty desert coming from France',
    qty:'20'
  }
]

 handleClick(){
  this.openDialog();
 }
}
