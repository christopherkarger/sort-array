var x = [
  {
   sale: true,
   up: 5
 },
 {
   sale: false,
   up: 10
 },
  {
    sale: true,
    up: 15
  },
  {
    sale: true,
    up: 2
  },
  {
    sale: false,
    up: 50
  },
  {
    sale: true,
    up: 1
  }

];

var sortedbyTwoProperties = x.sort(function(a,b) {
  
  return b.sale - a.sale || a.up - b.up;  
  
});

console.log(sortedbyTwoProperties);
