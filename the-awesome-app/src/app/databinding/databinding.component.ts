import { Component } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./databinding.component.html"
})
export class DataBindingComponent{

    public name: string;
    public count: number;
    public  message: string;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 5;
        this.message = "Hello";
    }

    increment(evt: any){
        this.count++;
        console.log(evt)
        this.message = this.message + ' ' + this.count
    }
}