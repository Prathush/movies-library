import { TranslatePipe } from './translate.pipe';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;

  beforeEach(() => {
    pipe = new TranslatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform error', () => {
    expect(pipe.transform('test')).toEqual('Something went wrong, Please try after some time!!');
    expect(pipe.transform('Too many results.')).toEqual('Too many results found for search keyword, Please try again after some time');
  });
});
