import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Role } from '../role';
import { UserService } from '../user.service';

import {Router, RouterModule} from "@angular/router";
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";
import { config } from "../../config/config";
import {AccessPolicy} from "../access-policy";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    user: User = new User();
    roles: Role = new Role();
    statusCode: number;
    requestProcessing = false;
    accessIdToUpdate = null;
    processValidation = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }


    onUserFormSubmit() {
        this.processValidation = true;
        this.preProcessConfigurations();
        this.userService.createUsers(this.user, this.roles)
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


    /*dynamic place holders/labels for user*/
    theadAction = config.theadAction;
    username = config.username;
    password = config.password;
    firstName = config.firstName;
    lastName = config.lastName;
    description = config.description;
    mobileNumber = config.mobileNumber;
    accountStatus = config.accountStatus;
    postalCode = config.postalCode;
    reportingTo = config.reportingTo;
    city = config.city;
    state = config.state;
    country = config.country;
    role = config.role;
    lfsStore = config.lfsStore;
    lfsstoreCluster = config.lfsstoreCluster;
    phoneNo = config.phoneNo;
    address = config.address;
}
