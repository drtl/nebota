        function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
                var u = username.hashCode();
                var p = password.hashCode();
            if (u == null || u == "") {
                alert("Please enter the username.");
                return false;
            }
            if (p == null || p == "") {
                alert("Please enter the password.");
                return false;
            }
            if (u == amplify.store("uu") || p == amplify.store("pp")){
                alert('Login successful');
                return true;
            }
            
        } 

