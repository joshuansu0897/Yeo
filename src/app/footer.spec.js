'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Footer = require('./footer');

describe('Footer', function () {
  it('should be a footer', function () {
    var footer = TestUtils.renderIntoDocument(<Footer/>);
    var footerNode = ReactDOM.findDOMNode(footer);
    expect(footerNode.tagName).toEqual('FOOTER');
  });
});
