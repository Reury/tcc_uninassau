import { GroupByPipe } from './group-by.pipe';

describe('Pipe: GroupBye', () => {
  it('create an instance', () => {
    let pipe = new GroupByPipe();
    expect(pipe).toBeTruthy();
  });
});
