import { RouterProjectPage } from './app.po';

describe('router-project App', () => {
  let page: RouterProjectPage;

  beforeEach(() => {
    page = new RouterProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
