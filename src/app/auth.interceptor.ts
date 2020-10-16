import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloned = req.clone({
            headers: req.headers.append('Auth', "some random token")
        })
        return next.handle(cloned).pipe(
            tap(event => {
                if(event.type === HttpEventType.Response){
                    console.log('interceptor responsed', event)
                }
            })
        )
    }
}