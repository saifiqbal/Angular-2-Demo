import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,NgForm,FormGroup,FormControl} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'bugs',
    templateUrl: 'bugs.component.html'
})

export class BugsComponent {
    bugs: FormGroup;
    jiraUsers:any[];
    selecteUser:any;
    constructor() {
        this.jiraUsers=[{ name:'anum.10p', value:'Anum Iftikhar'},
        { name:'saad', value:'Saad Khan (10P)'},
        { name:'asad.zubair', value:'Asad Zubair (10Pearls)'},
        { name:'nizar', value:'Nizar Ilyas (10Pearls)'},
        { name:'mubashir', value:'Mubashir Hussain (10Pearls)'},
        { name:'Ahmed.10p', value:'Ahmed Raza (10Pearls)'},
        { name:'sadaf.10p', value:'Sadaf Saeed'},
        { name:'sharjeel.ahmed', value:'Sharjeel Ahmed'},
        { name:'mudassir.10p', value:'Mudassir Khan'},
        { name:'saifullah.iqbal', value:'Saifullah Iqbal'},
        { name:'Ziauddin', value:'Ziauddin'},
        { name:'Usman.10p', value:'usman.10p'},
        { name:'Kashif', value:'kashif'}
        ];
    }
    ngOnInit() {
      this.bugs = new FormGroup({
         Analysis: new FormControl(null,Validators.required),
         Development: new FormControl(null,Validators.required),
         DesignTestCases: new FormControl(null,Validators.required),
         CodeAudit: new FormControl(null,Validators.required),
         CodeDeployment: new FormControl(null,Validators.required),
         QaTesting : new FormControl(null,Validators.required),
         CodeMerge : new FormControl(null,Validators.required),
         DeploymentToDev : new FormControl(null,Validators.required),
         QaIntegration : new FormControl('',Validators.required),
         UserName:new FormControl('mudassir.10p',Validators.required),
         Password:new FormControl('Password9',Validators.required),
         Ticket:new FormControl('',Validators.required)
      });
    }
    onSubmit(){
        console.log(this.bugs);
    }
}