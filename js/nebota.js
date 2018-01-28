        function validate() {
            var username = document.getElementById("username".hashCode()).value;
            var password = document.getElementById("password".hashCode()).value;
            if (username == null || username == "") {
                alert("Please enter the username.");
                return false;
            }
            if (password == null || password == "") {
                alert("Please enter the password.");
                return false;
            }
            if (username == amplify.store("uu") || password == amplify.store("pp")){
                alert('Login successful');
                return true;
            }
            
        } 

