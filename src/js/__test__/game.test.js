/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import getHealth from '../game';

test('check health 90', () => {
  const warrior = { name: 'Маг', health: 90 };
  const expected = 'healthy';
  const received = getHealth(warrior);
  expect(received).toBe(expected);
});

test('check health 51', () => {
  const warrior = { name: 'Маг', health: 51 };
  const expected = 'healthy';
  const received = getHealth(warrior);
  expect(received).toBe(expected);
});

test('check health 50', () => {
  const warrior = { name: 'Маг', health: 50 };
  const expected = 'wounded';
  const received = getHealth(warrior);
  expect(received).toBe(expected);
});

test('check health 16', () => {
  const warrior = { name: 'Маг', health: 16 };
  const expected = 'wounded';
  const received = getHealth(warrior);
  expect(received).toBe(expected);
});

test('check health 15', () => {
  const warrior = { name: 'Маг', health: 15 };
  const expected = 'wounded';
  const received = getHealth(warrior);
  expect(received).toBe(expected);
});

test('check health 14', () => {
  const warrior = { name: 'Маг', health: 14 };
  const expected = 'critical';
  const received = getHealth(warrior);
  expect(received).toBe(expected);
});

test('check health 0', () => {
  const warrior = { name: 'Маг', health: 0 };
  const expected = 'critical';
  const received = getHealth(warrior);
  expect(received).toBe(expected);
});
