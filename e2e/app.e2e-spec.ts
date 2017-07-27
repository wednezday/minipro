import { MiniproPage } from './app.po';

describe('minipro App', function() {
  let page: MiniproPage;

  beforeEach(() => {
    page = new MiniproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
