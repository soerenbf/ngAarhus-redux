import { TodoAngularPage } from './app.po';

describe('todo-angular App', function() {
  let page: TodoAngularPage;

  beforeEach(() => {
    page = new TodoAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
