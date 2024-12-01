import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { url } from 'inspector';

@Component({
  selector: 'app-all',
  standalone: false,
  
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent implements OnInit {

  list:Array<any>= [];

constructor(private http:HttpClient){

}

  ngOnInit(): void {
    this.http.get<any>( 'https://jsonplaceholder.typicode.com/posts')
      .subscribe((response: any) => {
        console.log(response);
        this.list = response;
        console.log(this.list);
      });
    
  }

}
