
let points = 0;

function validate()
{
    let name = document.forms["Quiz"]["name"].value;
    let surname = document.forms["Quiz"]["surname"].value;
    let email = document.forms["Quiz"]["email"].value;
    let radio = document.forms["Quiz"]["favoriteColor"].value;
    var check_email = /\S+@\S+\.\S+/;
    is_true = true;
    message = "";
    
    if(name == "" || surname == "" || email == "")
    {
        message += "Name, Surname and Email cannot be empty \n";
        is_true = false;
    }
    if(parseInt(name) || parseInt(surname))
    {
        message += "Name and Last name can't have numbers \n";
        is_true = false;  
    }
    if(!check_email.test(email))
    {
        message += "Invalid format for email \n";
        is_true = false; 
    }
    if(radio == "")
    {
        message += "You must choose a color \n";
        is_true = false;
    }

    if(!is_true)
    {
        return alert(message);
    }else
    {
        checkPoints();
    }

    
}

function checkPoints()
{
    const sucess = document.getElementById("Success");
    sucess.innerHTML("Hi!");
}
