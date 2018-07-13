import * as utils from './index';

describe('startCase', () => {
  it('capitalizes every word in a sentence', () => {
    expect(utils.startCase('JANE DOE')).to.eql('Jane Doe');
  });
});
