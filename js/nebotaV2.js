String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function getVar(id) {
  localStorage.setItem("stone", "hyglobalhdiscool".hashCode());
  localStorage.setItem("store", "hyglobalhdisawesome".hashCode());
  
  
  var stone = localStorage.getItem("stone");
  var store = localStorage.getItem("store");
  
  switch(id.toLowerCase()){
    case "uu":
      return store;
    case "pp":
      return stone;
  }
}

        function validate() {
            var uu = document.getElementById("username").value;
            var pp = document.getElementById("password").value;
            var username = uu.hashCode();
            var password = pp.hashCode();
            if (username == null || username == "") {
                alert("The Form Is In-Complete.");
                return false;
            }
            if (password == null || password == "") {
                alert("The Form Is In-Complete.");
                return false;
            }
             if (username == getVar("uu") && password !== getVar("pp")){
                alert("Please Check If There A Wrong In Username Or Password.");
                     return false;
            }
             if (username !== getVar("uu") && password == getVar("pp")){
                alert("Please Check If There A Wrong In Username Or Password.");
                     return false;
             }
             if (username == getVar("uu") && password == getVar("pp")){
                alert("Granted!");
                     return false;
             }
                if(username !== getVar("uu") && password !== getVar("pp")){
                alert("OwO");
                        return false;
                }
        }
