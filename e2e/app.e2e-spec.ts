import { ZaoualiPage } from './app.po';

describe('zaouali App', () => {
  let page: ZaoualiPage;

  beforeEach(() => {
    page = new ZaoualiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
