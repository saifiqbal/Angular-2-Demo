import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,NgForm,FormGroup,FormControl} from '@angular/forms';

@Component({
    moduleId:module.id,
    templateUrl:'registration.component.html'
})
export class RegistrationComponent implements OnInit {
    user: FormGroup;
    ngOnInit() {
      this.user = new FormGroup({
        name: new FormControl('',Validators.required),
        account: new FormGroup({
          email: new FormControl('',Validators.required),
          confirm: new FormControl('',Validators.required),
        }),
        address:new FormControl('',Validators.required),
        lastname:new FormControl('',Validators.required)
      });
    }

    constructor() {
    }

    Test(event:any){
        debugger;
        console.log('Button click event in registration');
    }
    onSubmit(data:any) {
        debugger;  
        console.log('you submitted Form');  
        console.log(data);
    }
}