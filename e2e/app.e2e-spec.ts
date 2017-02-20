import { AngmemoPage } from './app.po';

describe('angmemo App', function() {
  let page: AngmemoPage;

  beforeEach(() => {
    page = new AngmemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
