import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,NgForm,FormGroup,FormControl} from '@angular/forms';

@Component({
    moduleId:module.id,
    selector:'register',
    templateUrl:'registration.component.html'
})
export class RegistrationComponent implements OnInit {
    user: FormGroup;
    ngOnInit() {
      this.user = new FormGroup({
         FirstName: new FormControl(null,Validators.required),
         LastName: new FormControl(null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])),
         Email: new FormControl(null,Validators.required), /**/
         CellPhone: new FormControl(null,Validators.required),
         Country: new FormControl(null,Validators.required),
         State: new FormControl(null,Validators.required),
         City: new FormControl(null,Validators.required)
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
