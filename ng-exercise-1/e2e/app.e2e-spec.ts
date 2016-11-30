import { NgExercise1Page } from './app.po';

describe('ng-exercise-1 App', function() {
  let page: NgExercise1Page;

  beforeEach(() => {
    page = new NgExercise1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
