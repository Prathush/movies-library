import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movies-library'`, () => {
    expect(app.title).toEqual('movies-library');
  });
});
