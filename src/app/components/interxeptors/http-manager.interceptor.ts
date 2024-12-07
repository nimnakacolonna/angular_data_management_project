import { HttpEvent, HttpHandler, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { request } from 'http';

export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {

   //constructor(private service: LoadingService){}

  console.log('Functional interceptor triggered');
  return next(req);

  
//  intercept(request:HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
//    this.service.loading.next(true);
//      return next.handle(request).pipe(
//       catchError(err=>{
//         console.log(err);
//         return throwError(err);
//       }),
//       finalize(()=>{
//         this.service.loading.next(false));
//       ;
//      )
//}

};
