function backend(operation) {

    function Signup() {
        let database = { 0: [] };
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let phone = document.getElementById("phone-number").value;
        database[Object.keys(database).length] = [name, phone, password];
        return database;
    }
    if (operation == true) {
        result = Signup()
        window.location.href = "./Master_login.html";
                
    } else if (operation == false) {
        user_name = document.getElementById("name").value;
        password = document.getElementById("Password").value;
        for (let i = 1; i <= Object.keys(result).length; i++){
            if ((result[i][1] == user_name) && (result[i][2] == password)) {
                alert("Good!");
            }
        }
        
        
    }


    
}