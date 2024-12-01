import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-find',
  standalone: false,
  
  templateUrl: './find.component.html',
  styleUrl: './find.component.scss'
})
export class FindComponent {
searchId = '';
list:Array<any>= [];

constructor(private postService:PostService){

}

loadData(){
  this.postService.find(this.searchId)
  .subscribe((response: any) => {
    console.log(response);
    this.list = response;
    console.log(this.list);
  });

}
}
