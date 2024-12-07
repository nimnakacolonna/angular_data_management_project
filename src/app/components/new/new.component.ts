import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { title } from 'process';
import { PostService } from '../../services/post.service';
import { SnakBarService } from '../../services/snak-bar.service';
import Post from '../../dto/Post';

@Component({
  selector: 'app-new',
  standalone: false,

  templateUrl: './new.component.html',
  styleUrl: './new.component.scss',
})
export class NewComponent {
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

  createData() {
    // this.postService.create(
    //      this.form.get('id')?.value,
    //      this.form.get('userId')?.value,
    //      this.form.get('title')?.value,
    //      this.form.get('body')?.value,
    //   )
    //   .subscribe((response: any) => {
    //     if (response) {
    //       this._snackBar.trigger('saved', 'close');
    //     }
    //   });

    let post = new Post(
      this.form.get('id')?.value!,
      this.form.get('userId')?.value!,
      this.form.get('title')?.value!,
      this.form.get('body')?.value!,
    );
    this.postService.createDataFireStore(post);
  }
}
