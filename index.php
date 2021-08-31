<?php
$iv = '1234567890123412';
$key = 'jadetangshitv123';
$data = '6AWg5Ab0WlKNd47evmMKo6v7S1Yw4Uzx7z0TU8PDN/dExo8weeI7jzHTG1OnXPifxeDOErwLk9ZeTbY3YVz2oajcmQiIWHMJ3so91IyTFoo=';
$decodeStr = openssl_decrypt(base64_decode($data), "AES-128-CBC",$key,OPENSSL_RAW_DATA, $iv);

var_dump($decodeStr);