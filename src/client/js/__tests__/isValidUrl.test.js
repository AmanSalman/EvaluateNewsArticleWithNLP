// import { isValidUrl } from '../utilityFunctions'; // Assuming you store the function in utilityFunctions.js

import { isValidUrl } from "../isValidUrl";

describe('isValidUrl', () => {
  test('should return true for valid URLs', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://sub.example.com')).toBe(true); // Subdomain case
    expect(isValidUrl('https://example.com/path?query=param')).toBe(true); // URL with path and query
  });

  test('should return false for invalid URLs', () => {
    expect(isValidUrl('invalid-url')).toBe(false);
    expect(isValidUrl('ftp://example.com')).toBe(false); // Invalid protocol
    expect(isValidUrl('http://')).toBe(false); // Incomplete URL
    expect(isValidUrl('http://example')).toBe(false); // Missing TLD
  });

  test('should return false for email addresses', () => {
    expect(isValidUrl('rapamansalman@gmail.com')).toBe(false);
    expect(isValidUrl('a.m.salman@students.ptuk.edu.ps')).toBe(false);
  });

  test('should return false for empty strings', () => {
    expect(isValidUrl('')).toBe(false);
  });
});
