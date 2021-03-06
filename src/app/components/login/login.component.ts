import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


// JSON
import usersList from 'src/assets/json/users.json';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject();

  user = new UserModel();

  loginForm: FormGroup;
  dataLoading = false;
  users: any = usersList;
  unregistered = false;
  invalid = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  loginUser(): boolean {

    if (this.loginForm.invalid) { return false; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait please'
    });
    Swal.showLoading();


    this.auth.login(this.loginForm.value)
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(response => {
        Swal.close();
        this.router.navigate(['/principal/ships']);
        return true;

      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'wrong username or password'
        });

        return false;
      });

    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    // var userLogin = this.loginForm.value.username;
    // var filterJson = this.users.filter(function (user) { return user.first_name === userLogin  });
    // if (filterJson.length > 0) {
    //   this.router.navigate(['/principal/ships'])
    // } else {
    //   this.unregistered = true;
    // }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
