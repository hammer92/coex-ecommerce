//verificacion de usuario en el login
import './stylelogin.css'
var inicio=false
var user = new Object ();
user.email= 'admin@admin.com';
user.password= 'admin'; 
    const form = document.getElementById('form_login');
    form.onsubmit = () => {
        const mail = document.getElementById('email');
        const con = document.getElementById('password');
        const correo = mail.value;
        const contra = con.value;

        
        if (correo == ""  || contra ==""){
            alert("Debe llenar todos los campos");
        }else{if(correo == user.email  && contra == user.password){
            alert("inicio de sesion correcto");
            inicio=true;

        }else{
            alert("Credenciales invalidas");
        }   
        console.log(correo, contra);
            
        }
    }