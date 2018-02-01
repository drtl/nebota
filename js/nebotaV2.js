String.prototype.hashCode = function() {
  let hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
        function validate() {
  let stone = "-1529248925";
  let store = "1603460617";
          
            let uu = document.getElementById("username").value;
            let pp = document.getElementById("password").value;
            let username = uu.hashCode();
            let password = pp.hashCode();
            if (username == null || username == "") {
                alert("The Form Is In-Complete.");
                return false;
            }
            if (password == null || password == "") {
                alert("The Form Is In-Complete.");
                return false;
            }
             if (username == store && password !== stone){
                alert("Please Check If There A Wrong In Username Or Password.");
                     return false;
            }
             if (username !== store && password == stone){
                alert("Please Check If There A Wrong In Username Or Password.");
                     return false;
             }
             if (username == store && password == stone){
                alert("Granted!");
                window.location.href="wait.htm";
                     return false;
             }
                if(username !== store && password !== stone){
                alert("OwO");
                        return false;
                }
        }
