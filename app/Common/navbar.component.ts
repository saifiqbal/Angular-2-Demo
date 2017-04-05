import {Component} from '@angular/core'
import {GlobalEventsManager}from '../Events/global.events'

@Component({
   moduleId:module.id,
   templateUrl:'navbar.component.html',
   selector:'navbar'
})

export class NavBarComponent{
    showNavBar:boolean=false;
    
    constructor(private _eventManager:GlobalEventsManager) {
        this._eventManager._showNavBarEmitter.subscribe((mode)=>{
            if(mode!==null){
                this.showNavBar=mode;
            }
        });
    }
}