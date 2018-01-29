        function validate() {
                var store = amplify.store("uu");
                var stone = amplify.store("pp");
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username == null || username == "") {
                alert("The Form Is In-Complete.");
                return false;
            }
            if (password == null || password == "") {
                alert("The Form Is In-Complete.");
                return false;
            }
             if (username.hashCode() == store && password.hashCode() !== stone){
                alert("Please Check If There A Wrong In Username Or Password.");
                     return false;
            }
             if (username.hashCode() !== store && password.hashCode() == stone){
                alert("Please Check If There A Wrong In Username Or Password.");
                     return false;
             }
             if (username.hashCode() == store && password.hashCode() == stone){
                alert("Granted!");
                     return true;
             }
        } 

