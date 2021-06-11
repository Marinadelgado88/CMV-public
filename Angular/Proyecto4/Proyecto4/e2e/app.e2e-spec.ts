import { Proyecto4Page } from './app.po';

describe('proyecto4 App', function() {
  let page: Proyecto4Page;

  beforeEach(() => {
    page = new Proyecto4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
