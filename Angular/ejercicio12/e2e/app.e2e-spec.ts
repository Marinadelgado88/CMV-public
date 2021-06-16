import { Ejercicio12Page } from './app.po';

describe('ejercicio12 App', function() {
  let page: Ejercicio12Page;

  beforeEach(() => {
    page = new Ejercicio12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
