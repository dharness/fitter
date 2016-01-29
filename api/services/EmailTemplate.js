/**
 * Represents an entire email
 * @type {Object}
 */
var fs = require('fs');

require.extensions['.html'] = function(module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

module.exports = {
    subject: 'Welcome to Fitter!', // Subject line
    text: '', // plaintext body
    html: require('./EmailTemplate.html') // html body
};
