import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,NgForm,FormGroup,FormControl} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'story',
    templateUrl: 'story.component.html'    /*create dynamic template based on xml file*/
})

export class StoryComponent implements OnInit {
    constructor() { }
    user: FormGroup;

    ngOnInit() {
      this.user = new FormGroup({
         Analysis: new FormControl(null,Validators.required),
         DesignReview: new FormControl(null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])),
         DesignDocument: new FormControl(null,Validators.required), /**/
         DesignTestCases: new FormControl(null,Validators.required),
         CodeAudit: new FormControl(null,Validators.required),
         CodeDeployment: new FormControl(null,Validators.required),
         QATesting : new FormControl(null,Validators.required),
         CodeMerge : new FormControl(null,Validators.required),
         FunctionalReview : new FormControl(null,Validators.required),
         DeploymentToDev : new FormControl(null,Validators.required),
         QAIntegration : new FormControl(null,Validators.required)
      });
    }
}