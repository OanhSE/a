import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerifyComponent } from './verify/verify.component';
import {HomeModule} from '../home/home.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotpasswordComponent, VerifyComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ReactiveFormsModule,
        HomeModule

    ]
})
export class AuthenticationModule { }
