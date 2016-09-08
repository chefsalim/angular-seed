import {Component} from '@angular/core';

@Component({
    selector: 'ng2-book',
    template: '<h2>{{someText}}</h2>'
})
export class Ng2Book {
    public someText: string;

    constructor() {
        this.someText = "This is an Angular 2 book."
    }
}
