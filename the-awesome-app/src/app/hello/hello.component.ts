import { Component } from "@angular/core";


//  @Component- Decorator
@Component({
    selector: "hello",
    template: `
        <div>
            <h4>Hello Component</h4>
            <p>This is a simple Angular Component</p>
        </div>
    `
})
export class HelloComponent{
    
}