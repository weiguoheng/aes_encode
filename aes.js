(function(win){
	let script =  document.createElement('script');
	script.src = './crypto-js/crypto-js.js';
	script.setAttribute('async', 'true');
	document.querySelector('head').appendChild(script);
})(window)

var aes_encode = function(str){
	var IV = '1234567890123412';
	var KEY = 'jadetangshitv123';
	var key = CryptoJS.enc.Utf8.parse(KEY);
	var iv = CryptoJS.enc.Utf8.parse(IV);
	var encrypted = CryptoJS.AES.encrypt(str, key, {iv:iv, mode: CryptoJS.mode.CBC, padding:CryptoJS.pad.Pkcs7});
	return encrypted.toString();
};