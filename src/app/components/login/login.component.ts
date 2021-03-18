import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import  Swal  from 'sweetalert2';


// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new UserModel();

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    


    this.loginForm = this.fb.group({
      email: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {

    
    if (this.loginForm.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Wait please'
    });
    Swal.showLoading();


      this.auth.login( this.loginForm.value).subscribe( response => {
        Swal.close();
        this.router.navigate(['/principal/ships']);
        
    }, (err) => {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'wrong username or password'
      });
      

    })

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
}

