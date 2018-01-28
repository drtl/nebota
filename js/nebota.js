        function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username.hashCode() == null || username.hashCode() == "") {
                alert("Please enter the username.");
                return false;
            }
            if (password.hashCode() == null || password.hashCode() == "") {
                alert("Please enter the password.");
                return false;
            }
            if (username.hashCode() == amplify.store("uu") || password.hashCode() == amplify.store("pp")){
                alert('Login successful');
                return true;
            }
            
        } 

