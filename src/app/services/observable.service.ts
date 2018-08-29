import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableService {

    data: Observable<any>;

    constructor() {
    }

    test() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 5000);

            setTimeout(() => {
                observer.next(2);
            }, 10000);

            setTimeout(() => {
                observer.next(3);
            }, 15000);

            setTimeout(() => {
                observer.next({ name: 'Amitabh' });
            }, 20000);
        });

        return this.data;
    }
}
