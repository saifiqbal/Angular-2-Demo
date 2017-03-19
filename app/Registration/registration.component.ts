import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,NgForm,FormGroup } from '@angular/forms';

@Component({
    moduleId:module.id,
    templateUrl:'registration.component.html'
})
export class RegistrationComponent implements OnInit {
       
       loginForm: FormGroup;
       
        ngOnInit(): void {
             this.loginForm=this.fb.group({
                email:["",Validators.required],
                password:["",Validators.required]
         })
        }
    constructor(public fb:FormBuilder) {
    
    }
    Test(event:any){
        debugger;
        console.log('Button click event in registration');
    }
onSubmit(): void {  
    console.log('you submitted Form');  
  }
}
