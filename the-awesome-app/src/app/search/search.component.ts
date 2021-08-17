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
  public results: Array<string> = [];

  public $results: Observable<Array<string>> = new Observable<Array<string>>()

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

        //https://en.wikipedia.org/w/api.php?action=opensearch&format=json
        const url = "https://en.wikipedia.org/w/api.php";
        const params
          = new HttpParams()
            .set("action", "opensearch")
            .set("format", "json")
            .set("limit", "10")
            .set("origin", "*")
            .set("search", value)

        //Only response data
        // this.httpClient
        //   .get(url, { params })
        //   .subscribe((data) => {
        //     console.log(data);
        //   });

        //Full Response : observe: 'response' | observe: 'body'(default)
        // this.httpClient
        //   .get(url, { params, observe: 'response' })
        //   .subscribe((data) => {
        //     console.log(data);
        //   });


        //Only response data with mapping
        // this.httpClient
        // .get<Array<any>>(url, { params, observe: 'body' })
        // .pipe(
        //   map(data => data[1])
        // )
        // .subscribe((data) => {
        //   console.log(data);
        //   this.results = data;
        // });


        this.$results = this.httpClient
                                .get<Array<any>>(url, { params, observe: 'body' })
                                .pipe(
                                  map(data => data[1])
                                )

      })



  }

}


