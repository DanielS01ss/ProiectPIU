import { Dialog } from '@angular/cdk/dialog';
import { Component,OnInit,Inject } from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog ,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

   constructor( public dialogRef:MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data:string , private formBuilder:FormBuilder){

   }
    form!:FormGroup;

    ngOnInit(): void{
      this.createForm();
    }

    private createForm():void{
      this.form = this.formBuilder.group({
        name:[null],
        descriere:[null],
        cantitate:[null]
      })
    }
}
