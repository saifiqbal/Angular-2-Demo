import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class GlobalEventsManager{

    private _showNavBar:BehaviorSubject<boolean> =new BehaviorSubject<boolean>(null);
    public _showNavBarEmitter:Observable<boolean>=this._showNavBar.asObservable();

    constructor(){}

    showNavBar(_show:boolean){
      this._showNavBar.next(_show);       /**/
    }
}