import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signUpForm: FormGroup;
    newUser: User;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.newUser = {};
        this.generateForm();
    }

    generateForm() {
        this.signUpForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],
            passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    get firstName() {
        return this.signUpForm.get('firstName');
    }

    get lastName() {
        return this.signUpForm.get('lastName');
    }

    get email() {
        return this.signUpForm.get('email');
    }

    get password() {
        return this.signUpForm.get('password');
    }

    get passwordConfirm() {
        return this.signUpForm.get('passwordConfirm');
    }

    submitForm() {
        Object.keys(this.signUpForm.controls).forEach(
            (controlName) => {
                const control = this.signUpForm.get(controlName);
                control.markAsDirty();
            }
        );
    }
}
