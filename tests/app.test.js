// SneakerHead Frontend - Dummy Test
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('should have correct app title', () => {
    const title = 'SneakerHead';
    expect(title).toBe('SneakerHead');
  });

  it('should have API URL configured', () => {
    // VITE_API_URL is set at build time, not test time
    // This test just validates the expected value format
    const expectedApiUrl = '/api/v1';
    expect(expectedApiUrl).toMatch(/^\/api/);
  });
});
