import { UserinformationPage } from './app.po';

describe('userinformation App', function() {
  let page: UserinformationPage;

  beforeEach(() => {
    page = new UserinformationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
