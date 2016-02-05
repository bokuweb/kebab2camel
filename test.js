const c2k    = require('./index');
const expect = require('chai').expect;

describe('camel2kebab test', function() {
  it('Should return kebab case string', function () {
    expect(c2k('camelKebab')).to.equal('camel-kebab');
    expect(c2k('helloWorld')).to.equal('hello-world');
    expect(c2k('camel-kebab')).to.equal('camel-kebab');
    expect(c2k('hello-world')).to.equal('hello-world');
  });

  it('Should return camel case string', function () {
    expect(c2k.reverse('camel-kebab')).to.equal('camelKebab');
    expect(c2k.reverse('hello-world')).to.equal('helloWorld');
    expect(c2k.reverse('camelKebab')).to.equal('camelKebab');
    expect(c2k.reverse('helloWorld')).to.equal('helloWorld');
    expect(c2k.reverse('id')).to.equal('id');
  });

});
