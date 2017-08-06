import { PropertyBindingPage } from './app.po';

describe('property-binding App', () => {
  let page: PropertyBindingPage;

  beforeEach(() => {
    page = new PropertyBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
