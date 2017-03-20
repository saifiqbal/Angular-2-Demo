import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,NgForm,FormGroup,FormControl} from '@angular/forms';

@Component({
    moduleId:module.id,
    templateUrl:'registration.component.html'
})
export class RegistrationComponent implements OnInit {
       
    // loginForm: FormGroup;
       
    // ngOnInit() {
    //     this.loginForm=new FormGroup({
    //          email: new FormControl(''),
    //          password: new FormControl('')
    //      });
    // }

  user: FormGroup;
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl(''),
      account: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      }),
      address:new FormControl(''),
      lastname:new FormControl('')
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

//     onSubmit() {
//     console.log(this.user.value, this.user.valid);
//   }
}
