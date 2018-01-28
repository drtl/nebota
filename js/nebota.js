        function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
                var u = username.hashCode();
                var p = password.hashCoder();
            if (username == null || username == "") {
                alert("Please enter the username.");
                return false;
            }
            if (password == null || password == "") {
                alert("Please enter the password.");
                return false;
            }
            if (u == amplify.store("uu") || p == amplify.store("pp")){
                alert('Login successful');
                return true;
            }
            
        } 

