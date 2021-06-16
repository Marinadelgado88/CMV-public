import { Ejercicio11Page } from './app.po';

describe('ejercicio11 App', function() {
  let page: Ejercicio11Page;

  beforeEach(() => {
    page = new Ejercicio11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
