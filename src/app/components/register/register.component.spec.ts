
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UserModel } from 'src/app/models/user.model';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let name = component.registerForm.controls['name'];
    expect(name.valid).toBeFalsy();

    name.setValue("");
    expect(name.hasError('required')).toBeTruthy();
    name.setValue("A");
    expect(name.hasError('minlength', ['minlength'])).toEqual(false);
  });


  it('password field validity', () => {
    let password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue("");
    expect(password.hasError('required')).toBeTruthy();
    password.setValue("A");
    expect(password.hasError('minlength', ['minlength'])).toEqual(false);
  });


  it('email field validity', () => {
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue("");
      expect(email.hasError('required')).toBeTruthy();
    email.setValue("A");
      expect(email.hasError('minlength', ['minlength'])).toEqual(false);
    email.setValue("badEmail");
      expect(email.hasError('email')).toBeTruthy();


   
  });



  it('submitting a form register  user', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['email'].setValue("test@test.com");
    component.registerForm.controls['name'].setValue("name");
    component.registerForm.controls['password'].setValue("123456789");
    expect(component.registerForm.valid).toBeTruthy();
    
  });


});
