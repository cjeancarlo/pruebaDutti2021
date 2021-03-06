import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
// JSON
import usersList from 'src/assets/json/users.json';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  registerForm: FormGroup;
  dataLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  registerUser(): boolean {
    if (this.registerForm.invalid) { return };

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait please'
    });
    Swal.showLoading();


    this.auth.newUser(this.registerForm.value).pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe(response => {
      Swal.close();

      this.router.navigate(['/principal/ships']);
      return true;

    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'email exists'
      });

    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
