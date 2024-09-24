import { transports } from 'winston';
import generalLogger from './general';

describe('Logger Configuration', () => {
  it('should have the correct default transports', () => {
    const transportNames = generalLogger.transports.map(
      (t) => t.constructor.name
    );

    expect(transportNames).toContain('File');
    expect(transportNames).toContain('Console');
  });

  it('should configure error log transport correctly', () => {
    const errorTransport = generalLogger.transports.find(
      (t) => t instanceof transports.File && t.filename === 'errors.log'
    );
    expect(errorTransport).toBeDefined();
    if (!errorTransport) {
      throw new Error('Error transport not found');
    }

    expect(errorTransport.level).toBe('error');
  });

  it('should configure combined log transport correctly', () => {
    const combinedTransport = generalLogger.transports.find(
      (t) => t instanceof transports.File && t.filename === 'combined.log'
    );
    expect(combinedTransport).toBeDefined();
    if (!combinedTransport) {
      throw new Error('Combined transport not found');
    }

    expect(combinedTransport.level).toBeUndefined();
  });
});
