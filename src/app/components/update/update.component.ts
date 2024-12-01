import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../services/post.service';
import { SnakBarService } from '../../services/snak-bar.service';

@Component({
  selector: 'app-update',
  standalone: false,

  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent {
  searchId = '';
  list: Array<any> = [];
  constructor(private postService:PostService, private _snackBar:SnakBarService) {}

  form = new FormGroup({
    id: new FormControl('samana', [
      Validators.required,
      Validators.maxLength(5),
    ]),
    userId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  loadData() {
    this.postService.find(  this.searchId)
      .subscribe((response: any) => {
        // console.log(response);
        // this.list = response;
        // console.log(this.list);
        this.form.patchValue({
          id:response[0].id,
          userId:response[0].userId,
          title:response[0].title,
          body:response[0].body,
        })
      });
  }
  updateData() {
    this.postService.update( this.form.get('id')?.value,this.form.get('userId')?.value,this.form.get('title')?.value,this.form.get('body')?.value,
     )
      .subscribe((response: any) => {
        if (response) {
          this._snackBar.trigger('updated', 'close');
        }
      });
  }
}
