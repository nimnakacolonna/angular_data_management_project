import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from '../../services/post.service';
import { SnakBarService } from '../../services/snak-bar.service';

@Component({
  selector: 'app-delete',
  standalone: false,

  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {

  constructor( private _snackBar:SnakBarService, private postService:PostService) {}

  delete(id: any) {
    if(confirm('are you sure')){
      this.postService.delete(id)      
      .subscribe((response: any) => {
        if(response){
          this._snackBar.trigger('deleted', 'close');
          for(let i=0; i < this.list.length; i++){
            if(this.list[i].id == id){
              this.list.splice(i,1);  
              return;
            }
          }
        }
      });
    }

  }
  list: Array<any> = [];


  ngOnInit(): void {
    this.postService.findAll()
    .subscribe((response: any) => {
      console.log(response);
      this.list = response;
      console.log(this.list);
      });
  }
}
