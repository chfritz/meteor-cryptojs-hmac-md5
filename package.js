Package.describe({
  summary: "Meteor package for CryptoJS's Hmac MD5 library.",
  version: '0.1.0',
  git: "https://github.com/chfritz/meteor-cryptojs-hmac-md5.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.add_files('hmac-md5.js', ['server']);
  if (api.export) {
    api.export('CryptoJS');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.add_files('hmac-md5.js', ['server']);
  api.add_files('test.js', ['server']);
});
