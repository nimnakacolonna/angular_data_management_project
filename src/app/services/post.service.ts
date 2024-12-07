import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import Post from '../dto/Post';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { response } from 'express';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl='https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient , private fireStoreService:AngularFirestore) { }

  findAll():Observable<any>{
      return this.http.get<any>( this.baseUrl + 'posts');
  }

  delete(id:any):Observable<any>{
    return this.http.delete<any>( this.baseUrl + 'posts/' + id);
}
find(id:any):Observable<any>{
  return this.http.get<any>( this.baseUrl + 'posts?id=' + id);
}

createDataFireStore(post:Post){
  return new Promise<any>((resolve, reject)=>{ this.fireStoreService.collection('post-data')
  .add(post) 
  .then(response=>{
    console.log(response); 
  }, error=> {
    console.log(error)
  });
});
}


//   create(id:any , userId:any , title:any, body:any):Observable<any>{
//   return this.http.post<any>( this.baseUrl + 'posts',{
//     id,userId,title,body
//   });
// }
update(id:any , userId:any , title:any, body:any):Observable<any>{
  return this.http.put<any>( this.baseUrl + 'posts/',{id,userId,title,body} );
}
}

