import { Ejercicio10Page } from './app.po';

describe('ejercicio10 App', function() {
  let page: Ejercicio10Page;

  beforeEach(() => {
    page = new Ejercicio10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
