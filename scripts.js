function validacion_newuser()
{
    Nombre=newuser.nombre.value;
    Apellidos=newuser.apellidos.value;
    Email=newuser.apellidos.value;
    Pass=newuser.pass.value;
    Pass_confirm=newuser.pass_confirm.value;

    if (Nombre == null || Nombre.length == 0 || /^\s+$/.test(Nombre))
	alert("Error: No has escrito tu nombre.");
    else if(Apellidos == null || Apellidos.length == 0 || /^\s+$/.test(Apellidos))
	alert("Error: No has escrito tus apellidos.");
    else if(Apellidos == null || Apellidos.length == 0 || /^\s+$/.test(Apellidos))
	alert("Error: No has escrito tus apellidos.");
    else if(Email == null || Email.length == 0 || /^\s+$/.test(Email))
	alert("Error: No has escrito tu email.");
    else if(Pass == null || Pass.length == 0 || /^\s+$/.test(Pass))
	alert("Error: No has escrito la contraseña.");
    else if(Pass != Pass_confirm)
	alert("Error: La confirmacion de la contraseña no coincide.");
    else
	newuser.submit();
}
