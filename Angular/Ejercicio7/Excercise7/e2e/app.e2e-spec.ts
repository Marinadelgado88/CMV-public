import { Excercise7Page } from './app.po';

describe('excercise7 App', function() {
  let page: Excercise7Page;

  beforeEach(() => {
    page = new Excercise7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
