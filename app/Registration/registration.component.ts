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
         FirstName: new FormControl('',Validators.required),
         LastName: new FormControl('',Validators.required),
         Email: new FormControl('',Validators.required),
         CellPhone: new FormControl('',Validators.required),
         Country: new FormControl('',Validators.required),
         State: new FormControl('',Validators.required),
         City: new FormControl('',Validators.required)
         
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
        console.log(this.user.value);
    }
}
