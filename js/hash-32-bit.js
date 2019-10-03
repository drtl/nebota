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


function alerttarget(){
let msg = document.getElementById("msg").value;
let hash = msg.hashCode();
  if(msg == null || msg == ''){
   let m = prompt('Please Put A Message', '');
    if(m == null || m == ''){
    alert('O.o Pls help');
      return false;
    }else{
    let e = m.hashCode();
      alert(e);
      return false;
    }
  }else{
alert(hash);
return false;}
}
