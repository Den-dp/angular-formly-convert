module.exports = ngModule => {
  require('./formly-custom-validation')(ngModule);
  require('./formly-dynamic-name')(ngModule);
  require('./formly-field')(ngModule);
  require('./formly-form')(ngModule);
};
