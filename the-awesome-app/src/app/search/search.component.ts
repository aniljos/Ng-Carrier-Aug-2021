import { Component, OnInit } from '@angular/core';
import {Observable, interval, Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import {filter, map, take, tap, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { 

   
    
    // const $o = interval(1000)
    //                 .pipe(
    //                   take(10),
    //                   tap(i => console.log("tapping", i)),
    //                   filter(i => i % 2 == 0),
    //                   map(i => i * i)
    //                 );

    // $o.subscribe((result) => {
    //   console.log("subscriber", result);
    // })

    //const subject = new Subject<Number>();
    //const subject = new ReplaySubject<Number>();
    const subject = new BehaviorSubject<Number>(100);


    let count = 0;
    const handle = setInterval(() => {

        subject.next(++count);
        if(count == 3){
          subject.subscribe((result) => {console.log("subscriber #2", result)});
        }
        if(count == 10){
          clearInterval(handle);
        }
    }, 1000)

    subject.subscribe((result) => {console.log("subscriber #1", result)});

  }

  ngOnInit(): void {



  }

}
