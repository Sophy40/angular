import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, throwError, Observable, of } from 'rxjs';
import { filter ,tap,map, catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {
       http:HttpClient
private __producturl = 'app/products.json';
  constructor(private _http:HttpClient) {
   
   }
//    getProdlist(){
     
//    return this.http.get('http://localhost:4200/assets/product.json')
//    .pipe(tap(() => console.log("HTTP requestexecuted")),
//    map(res => Object.values(res["payload"]) ),
//    shareReplay()
//    .retryWhen(errors => {return errors
//    .pipe(
//    tap(() => console.log('retrying...'))
//    delayWhen(() => timer(2000)),
// tap(() => console.log('retrying...'))

//    );
//    } )
  
   
  //    map((data:any[])=>{
  //      const ndata=[]
  //      data.forEach((el)=>{
  //        console.log('El:',el)
  //        const sid=  'S-'+el.id
  //        const sname ='S-'+ el.name
  //        //data.splice(el,1)
  //        ndata.push({
  //          'id':sid,
  //          'name': sname
  //        })
  //      })
  //      return ndata
  //    }),
  //    catchError(this.handleError('getProdlist'))
     
  //    ,tap((data) => {
  //      console.log('received frm server:E',data)
  //    })//,catchError(err =>of[err]))
  //    ,catchError(err => {
  //      console.log('Error in Ps:',err)
  //      return throwError(err)
  //    }
  //     )//,catchError(this.handleError('getProdlist'))
      
  //  )
  //  }
  //  handleError(op,result?:Observable<object>,err?:any){
  //    return (err):Observable<object> =>{
  //      console.log('Op:',op)
  //      console.log('error',err)
  //      return throwError(of(err))

       
  //    }   }
  // }
  // //  interval(1000).pipe(
  // //    filter(num=> (num %2) === 0),
  // //    map(num => num * num)
  // //  ).subscribe(
  // //    val=>{
  // //      console.log(val)
  // //    }
  // //    )
  // //   }

  //}
  
} 