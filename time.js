
exports.getDate = function(){
var options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
}
return new Date().toLocaleString("en-US", options);

}
