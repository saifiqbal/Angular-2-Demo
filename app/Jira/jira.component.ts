import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jira',
    templateUrl: 'jira.component.html'
})

export class JiraComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    CreateSubTask(){
        console.log('waaaaaat');
    }
}