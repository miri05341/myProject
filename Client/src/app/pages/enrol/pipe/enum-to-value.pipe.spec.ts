import { EnumToValuePipe } from './enum-to-value.pipe';

describe('EnumToValuePipe', () => {
  it('create an instance', () => {
    const pipe = new EnumToValuePipe();
    expect(pipe).toBeTruthy();
  });
});
