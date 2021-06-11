import { Proyecto3Page } from './app.po';

describe('proyecto3 App', function() {
  let page: Proyecto3Page;

  beforeEach(() => {
    page = new Proyecto3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
