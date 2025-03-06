import { expect } from 'chai';
import sinon from 'sinon';
import { logger } from '../../utils/logger';

describe('Logger', () => {
  let consoleLogStub: sinon.SinonStub;
  let consoleErrorStub: sinon.SinonStub;

  beforeEach(() => {
    consoleLogStub = sinon.stub(console, 'log');
    consoleErrorStub = sinon.stub(console, 'error');
  });

  afterEach(() => {
    consoleLogStub.restore();
    consoleErrorStub.restore();
  });

  it('should log error messages', () => {
    logger.error('Test error message');
    expect(consoleErrorStub.calledOnce).to.be.true;
  });
});
