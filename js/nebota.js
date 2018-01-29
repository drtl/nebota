        function validate() {
                var store = "hyglobalhd";
                var stone = "hyglobalhdiscool";
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
                     return false;
             }
                if(username !== store && password !== stone){
                alert("OwO");
                        return false;
                }
        } 

