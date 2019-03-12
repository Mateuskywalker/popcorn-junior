import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from '../user/user.service';

describe('AuthService', () => {

  function setup() {

    const httpClientController: HttpTestingController = TestBed.get(HttpTestingController);
    const userService = TestBed.get(UserService);
    const authService = TestBed.get(AuthService);

    return {  httpClientController, authService, userService };
  }

  beforeEach(() => {
    const userService = jasmine.createSpyObj('UserService', ['setToken']);
    TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule ],
      providers: [
        AuthService,
        { provide: UserService, useValue: userService }
      ]
    });
  });

  afterEach(() => {
    const {httpClientController} = setup();
    httpClientController.verify();
  });

  it('servico deve ser criado', () => {
    const {authService} = setup();
    expect(authService).toBeTruthy();
  });

  it('should authenticate and set user token', () => {

    const {userService, httpClientController, authService} = setup();

    authService.authenticate('asdkjahskd', 'sjdjasdk').subscribe(() => {
      expect(userService.setToken).toHaveBeenCalledWith('1234567890');
    });

    const testResquest = httpClientController.expectOne('http://localhost:3000/user/login');

    testResquest.flush(null, {
      headers: {
        'x-access-token': '1234567890'
      }
    });
  });

  it('should use method POST on URL API', () => {
    const {userService, httpClientController, authService} = setup();

    authService.authenticate('asdkjahskd', 'sjdjasdk').subscribe(() => {
      userService.setToken('1234567890');
      expect(testResquest.request.method).toBe('POST');
    });
    const testResquest = httpClientController.expectOne('http://localhost:3000/user/login');

    testResquest.flush(null, {
      headers: {
        'x-access-token': '1234567890'
      }
    });
  });
});
