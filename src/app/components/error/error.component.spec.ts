
import { Navigation, Router } from '@angular/router';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  const routerMock: Router = { getCurrentNavigation: {} } as Router;

  const extras = {} as Navigation;

  beforeEach(() => {
    spyOn(routerMock, 'getCurrentNavigation').and.returnValue(extras);
    component = new ErrorComponent(routerMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});