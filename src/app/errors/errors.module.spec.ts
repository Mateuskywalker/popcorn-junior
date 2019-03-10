import { ErrorsModule } from './errors.module';

describe('ErrorsModule', () => {
  let errorsModule: ErrorsModule;

  beforeEach(() => {
    errorsModule = new ErrorsModule();
  });

  it('deve ser criado uma instancia de ErrorsModule', () => {
    expect(errorsModule).toBeTruthy();
  });
});
