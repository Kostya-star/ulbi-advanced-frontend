import { classNames } from './classNames';

describe('classNames', () => {
  test('with first param only', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class only', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered focused';
    expect(classNames('someClass', { hovered: true, focused: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with some mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, focused: false }, ['class1', 'class2'])).toBe(expected);
  });

  test('with some mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, focused: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
