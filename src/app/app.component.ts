// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'observable';
//   // myObservable=new Observable((observer)=>{
//   //   console.log('observable starts');
//   //   setTimeout(()=>{  observer.next('1')},1000)
//   //   setTimeout(()=>{  observer.next('2')},2000)
//   //   setTimeout(()=>{  observer.next('3')},3000)
//   //   setTimeout(()=>{  observer.error(new Error('something went wrong please try again!'))},3000)
//   //   setTimeout(()=>{  observer.next('4')}, 4000)
//   //   setTimeout(()=>{  observer.next('5')},5000)
//   //   setTimeout(()=>{  observer.complete()},6000)


//   // });
//   myObservable= Observable.create((observer)=>{
//         console.log('observable starts');
//     setTimeout(()=>{  observer.next('1')},1000)
//     setTimeout(()=>{  observer.next('2')},2000)
//     setTimeout(()=>{  observer.next('3')},3000)
//     setTimeout(()=>{  observer.error(new Error('something went wrong please try again!'))},3000)
//     setTimeout(()=>{  observer.next('4')}, 4000)
//     setTimeout(()=>{  observer.next('5')},5000)
//     setTimeout(()=>{  observer.complete()},6000)


//   })
//   ngOnInit(){
//     this.myObservable.subscribe((val)=>{
// console.log(val);
//     })
//   }
// }
import { Component } from '@angular/core';
// import { Observable , from, of ,interval} from 'rxjs';
// import { filter, map, subscribeOn } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';
  // myObservable = new Observable((observer) => {
  //       setTimeout(()=>{  observer.next('1')},1000)
  //   setTimeout(()=>{  observer.next('2')},2000)
  //   setTimeout(()=>{  observer.next('3')},3000)
  //   // setTimeout(()=>{  observer.error(new Error('something went wrong please try again!'))},3000)
  //   setTimeout(()=>{  observer.next('4')}, 4000)
  //   setTimeout(()=>{  observer.next('5')},5000)
  //   setTimeout(()=>{  observer.complete()},6000)
  // });
  // ar1 = [1, 2, 3, 6];
  // ar2 = ['a', 'b', 'c', 'd'];

  // myObservable = from(this.ar1).pipe(
  //   map((val) => val * 5),
  //   filter((val) => val >= 30),
    
    
  //   // Use the correct predicate function
  // ); // Use `from` to create an observable from the array


  // fltrobs=this.trasObsr.pipe(filter((val)=>{
  //   return val >=30
  // }))

  counterObs=interval(1000);
  counterSub:any;

  ngOnInit() {
  //   this.myObservable.subscribe((val) => {
  //     console.log(val);
  //   },(error)=>{
  //     alert("something went wrong! ok ? to continue")
  //   },()=>{
  //     alert("observable is completed!")
  //   });
  // }
  
}

unsubscribe(){
  this.counterSub.unsubscribe();
}
subscribe(){
  // this.counterSub=this.counterObs.subscribe();


  this.counterSub=this.counterObs.subscribe((val)=>{
    console.log(val);
      })
}
}
