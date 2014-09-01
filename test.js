
Tinytest.add('value', function (test) {
    var x = CryptoJS.HmacMD5("test", "notverysecure").toString();
    test.isTrue(x == "a60f3d13186cd857c40e0bd470f5d090");
});
