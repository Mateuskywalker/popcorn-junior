import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SignInComponent } from './signin.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { AuthService } from 'src/app/core/auth/auth.service';


describe('SignIn Component', () => {

  function setup() {
      const fixture = TestBed.createComponent(SignInComponent);
      const component = fixture.debugElement.componentInstance;
      const authService = fixture.debugElement.injector.get(AuthService);
      const httpClientController: HttpTestingController = TestBed.get(HttpTestingController);
      return { component, fixture, authService, httpClientController };
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignInComponent
      ],
      imports: [ReactiveFormsModule,
                VMessageModule,
                RouterTestingModule,
                HttpClientTestingModule ]
    }).compileComponents();
  }));

  it('should create the signin component', async(() => {
    const fixture = TestBed.createComponent(SignInComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it('should login the user', () => {
  //   const mockUserName = 'Mateus Costa';
  //   const mockUserPassword = 's';
  //   const { authService, httpClientController } = setup();

  //   authService.authenticate(mockUserName, mockUserPassword).subscribe(data => {

  //   });

  //   const testResquest = httpClientController.expectOne('http://localhost:3000/user/login');

  //   testResquest.flush(null, {
  //     headers: {
  //       'x-access-token': '1234567890'
  //     }
  //   });

  // });
});
