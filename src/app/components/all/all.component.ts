import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { url } from 'inspector';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all',
  standalone: false,
  
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent implements OnInit {

  list:Array<any>= [];

constructor(private postService:PostService){

}

  ngOnInit(): void {
    this.postService.findAll()
      .subscribe((response: any) => {
        console.log(response);
        this.list = response;
        console.log(this.list);
      });
    
  }

}
