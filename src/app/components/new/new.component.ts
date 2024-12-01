import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { title } from 'process';

@Component({
  selector: 'app-new',
  standalone: false,
  
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {

  constructor(private http:HttpClient,private _snackBar : MatSnackBar ) {

  }

  form = new FormGroup({
    id:new FormControl('samana', [Validators.required, Validators.maxLength(5)]),
    userId:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    body: new FormControl('',Validators.required)  
  });

  createData(){
    this.http.post<any>( 'https://jsonplaceholder.typicode.com/posts', 
     { id: this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      title:this.form.get('title')?.value,
       body :this.form.get('body')?.value,
      }
    )
    .subscribe((response: any) => {
      if(response){
this._snackBar.open('saved','close',{
  horizontalPosition:'end',
  verticalPosition:'bottom',
  duration:5000,
  direction: 'ltr'
})      }
    });
  }

}
