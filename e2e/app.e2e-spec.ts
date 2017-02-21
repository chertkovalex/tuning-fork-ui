import { TuningForkUiPage } from './app.po';

describe('tuning-fork-ui App', () => {
  let page: TuningForkUiPage;

  beforeEach(() => {
    page = new TuningForkUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
