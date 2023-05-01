    let enter_encode = document.getElementById('enter_encode');
    
   enter_encode.onclick = function () {
  
 
  const rusToLat = function(str) {
  let ru = {
    'a': 'f0Z', 'b': '@1Y', 'c': 'd2X', 'd': 'u3DW', 'д': 'l4V', 
    'e': 't5U', 'f': '#6T', 'g': ':7S', 'h': 'p8R', 'и': 'b9Q', 
    'i': 'r0P', 'j': 'k1O', 'k': 'v2N', 'l': 'y3M', 'm': 'j4L', 
    'n': 'g5K', 'o': 'h6J', 'p': 'c7I', 'q': 'n8H', 'у': 'e9G', 
    'r': 'a0F', 's': '&1E', 't': 'w2D', 'u': 'x3C', 'ш': 'i4B', 
    'v': 'o5A', 'w': 's6ch', 'x': '!7sh', 'y': '?8zh', 'z': 'z9', 
    '.': '$0', ':': 'm', ';': 'q', '1':'0a','2':'9B','3':'8c','4':'7D','5':'6e','6':'5F','7':'4g','8':'3H','9':'2i','0':'1J'
  };
  
  
  
  
  let newString = [];
  
  return [...str].map(l => {
    
    let latL = ru[l.toLocaleLowerCase()];
    
    if (l !== l.toLocaleLowerCase()) {

      latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);

    } else if (latL === undefined) {

      latL = l;

    }
    
    return latL;
  }).join('');
}
  
  
let encode = document.getElementById('encode').value;

const str = encode;

let out_encode = rusToLat (str);



let out_code = document.getElementById('out_code');

   out_code.innerHTML = out_encode;



};




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/*let enter_decode = document.getElementById('enter_decode');

enter_decode.onclick = function () {
  
let decode = document.getElementById('decode').value;

console.log(decode);

let out_decoder = Base64.decode(decode);
/*let out_decode1 = window.atob(out_decoder);

let out_decode = document.getElementById('out_decode');

   out_decode.innerHTML = out_decoder;

/*let out1 = document.getElementById('out1');

out1.innerHTML = ver_os;

};*/




/*let text = "Hello World!";
let encoded = window.btoa(text);
let decoded = window.atob(encoded);

document.getElementById("demo").innerHTML = "Encoded: " + encoded + "<br>" + "Decoded: " + decoded;*/