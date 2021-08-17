import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { filter, map, take, tap, debounceTime } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchFormGroup: FormGroup;

  constructor(private httpClient: HttpClient) {

    this.searchFormGroup = new FormGroup({
      search: new FormControl("", [Validators.required, Validators.minLength(3)], [])
    });

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

    const subject = new Subject<Number>();
    //const subject = new ReplaySubject<Number>();
    //const subject = new BehaviorSubject<Number>(100);


    let count = 0;
    const handle = setInterval(() => {

      //publish
      subject.next(++count);
      if (count == 3) {
        subject.subscribe((result) => { console.log("subscriber #2", result) });
      }
      if (count == 3) {
        clearInterval(handle);
      }
    }, 1000)

    subject.subscribe((result) => { console.log("subscriber #1", result) });

  }

  ngOnInit(): void {

    const searchFormControl = this.searchFormGroup.get("search");
    searchFormControl?.valueChanges
      .pipe(
        debounceTime(1500),
        filter(() => searchFormControl.valid)
      )
      .subscribe((value) => {
        console.log(value);

        const url = "https://en.wikipedia.org/w/api.php";
        const params
          = new HttpParams()
            .set("action", "opensearch")
            .set("format", "json")
            .set("limit", "10")
            .set("origin", "*")
            .set("search", value)

        this.httpClient
          .get(url, {params})
          .subscribe((data) => {
            console.log(data);
          })

      })



  }

}


