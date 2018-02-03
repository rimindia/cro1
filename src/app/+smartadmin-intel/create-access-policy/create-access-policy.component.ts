import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AccessPolicyService} from '../access-policy.service';
import {AccessPolicy} from '../access-policy';

import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import {Router, RouterModule} from "@angular/router";


@FadeInTop()
@Component({
    selector: 'app-create-access-policy',
    templateUrl: './create-access-policy.component.html',
    styleUrls: ['./create-access-policy.component.css']
})
export class CreateAccessPolicyComponent implements OnInit {


    accessPolicy: AccessPolicy = new AccessPolicy();
    statusCode: number;
    requestProcessing = false;
    accessIdToUpdate = null;
    processValidation = false;

    /*accessForm = new FormGroup({
        policyId: new FormControl('', Validators.required),
        policyName: new FormControl('', Validators.required),
        policyDescription: new FormControl('', Validators.required)
    });*/

    constructor(private router: Router, private accessService: AccessPolicyService) { }

    ngOnInit() {
        /*this.getAllAccess();*/
    }


    onArticleFormSubmit() {
        this.processValidation = true;
        this.preProcessConfigurations();
        this.accessService.createAccess(this.accessPolicy)
            .then(successCode => {
                    this.statusCode = successCode;
                    this.backToCreateArticle();
                },errorCode => this.statusCode = errorCode);
    }

    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }
    //Go back from update to create
    backToCreateArticle() {
        this.accessIdToUpdate = null;
        /*this.accessForm.reset();*/
        this.processValidation = false;
    }

    /*save(){
        console.log("save method");
        /!*this.accessService.accessUrl;*!/
    }*/

    clear(){
        /*this.accessForm.reset();*/
    }

    back(){
        console.log("Back to access policy page");
        this.router.navigate(['/smartadmin/accessPolicy']);
    }


}
