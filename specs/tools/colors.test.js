import React from 'react';
import { hexToRgb, rgbToHex } from '../../src/loading/colorLoading';

describe('color tools', () => {
  describe('hexToRgb', () => {
    it('should convert white', () => {
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    });

    it('should convert black', () => {
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('should convert red', () => {
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should convert rose', () => {
      expect(hexToRgb('#ff00ff')).toEqual({ r: 255, g: 0, b: 255 });
    });
  });

  describe('rgbToHex', () => {
    it('should convert white', () => {
      expect(rgbToHex(255, 255, 255)).toEqual('#ffffff');
    });

    it('should convert black', () => {
      expect(rgbToHex(0, 0, 0)).toEqual('#000000');
    });

    it('should convert red', () => {
      expect(rgbToHex(255, 0, 0)).toEqual('#ff0000');
    });

    it('should convert rose', () => {
      expect(rgbToHex(255, 0, 255)).toEqual('#ff00ff');
    });
  });
});
