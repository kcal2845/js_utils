input_md5    = document.getElementById('input_md5');
input_sha1   = document.getElementById('input_sha1');
input_sha256 = document.getElementById('input_sha256');

output_md5    = document.getElementById('output_md5');
output_sha1   = document.getElementById('output_sha1');
output_sha256 = document.getElementById('output_sha256');

input_md5.oninput = function(){
  output_md5.value = CryptoJS.MD5(this.value);
}
input_sha1.oninput = function(){
  output_sha1.value = CryptoJS.SHA1(this.value);
}
input_sha256.oninput = function(){
  output_sha256.value = CryptoJS.SHA256(this.value);
}
