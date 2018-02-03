import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AccessPolicyService} from '../access-policy.service';
import {AccessPolicy} from '../access-policy';

import {Router, RouterModule} from "@angular/router";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import { config } from "../../config/config";


@FadeInTop()
@Component({
  selector: 'app-access-policy',
  templateUrl: './access-policy.component.html',
  styleUrls: ['./access-policy.component.css']
})
export class AccessPolicyComponent implements OnInit {

    accessPolicy: AccessPolicy = new AccessPolicy();
    statusCode: number;
    requestProcessing = false;
    accessIdToUpdate = null;
    processValidation = false;

    constructor(private router: Router, private accessService: AccessPolicyService) {
    }

    ngOnInit(): void {
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

   /* back(){
        console.log("Back to access policy page");
        this.router.navigate(['/smartadmin/accessPolicy']);
    }*/

    /*Access Policy Labels*/
    theadAction = config.theadAction;
    policyId = config.policyId;
    policyName = config.policyName;
    policyDescription = config.policyDescription;

    policyDetails = config.policyDetails;

}
