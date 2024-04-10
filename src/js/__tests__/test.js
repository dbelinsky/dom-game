/* eslint-disable no-undef */
import goblinWidjet from '../goblin';
import { test, expect } from '@jest/globals';
import { JSDOM } from 'jsdom';

describe('goblinWidjet', () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;
    document.body.innerHTML = `<div class='widjet-container'>
      <div class='hole'></div>
      <div class='hole'></div>
    </div>`;
    const element = document.querySelector('.widjet-container');
    document.widget = new goblinWidjet(element);
  });
  test('create', () => {
    document.widget.putGoblin(0);
    const res = document.querySelector('.goblin');
    expect(res.className).toBe('goblin');
  });
  test('delete', () => {
    document.widget.putGoblin(0);
    document.widget.deleteGoblin();
    const res = document.querySelector('.goblin');
    expect(res).toBe(null);
  });
});
