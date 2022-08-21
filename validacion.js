function validar(){
  event.preventDefault();
    /*creo una variable de tipo booleano que en principio tendrá un valor true(verdadero),
    y que se convertirá en false(falso) cuando la condición no se cumpla*/
    var todo_correcto = true;
    
    /*El primer campo a comprobar es el del nombre. Lo traemos por id y verificamos
    la condición, en este caso, por ejemplo, le decimos que tiene que tener más de dos dígitos
    para que sea un nombre válido. Si no tiene más de dos dígitos, la variable todo_correcto
    devolverá false.*/
    
    if(document.getElementById('nombre').value.length <= 3){
      alert('ingrese un nombre de minimo 3 caracteres');  
      todo_correcto = false;
        console.log(todo_correcto);
    }
    


    
    /*Para comprobar el email haremos uso de una expresión regular. Esto es una secuencia
    de caracteres que nos dirá si el valor ingresado por el usuario tiene estructura de
    correo electrónico. Lo que hacemos es obtener el value del campo de texto destinado
    al email, y le aplicamos el método test() del objeto global RegExp(que nos permite
    trabajar con expresiones regulares).*/
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.form.email.value;
    if (!expresion.test(email)){
      alert('un mail valido');    
      todo_correcto = false;

        console.log(todo_correcto);
    }
    
    /*Para validar el select debemos añadir un value distinto a cada option. En el
    código, he asignado un value con  valor vacío al primer option. Los siguientes,
    al no estar definidos toman el valor por defecto. Por tanto, si todos tienen value,
    lo único que tenemos que comprobar es que este no sea vacío. Si es vacío, todo_correcto
    será false.*/
    if(document.getElementById('asunto').value == ''){
        todo_correcto = false;
        alert('ingrese un asunto');  
        console.log(todo_correcto);
    }
    
    if(document.getElementById('mensagem').value == ''){
      todo_correcto = false;
      alert('ingrese un mensaje');  
      console.log(todo_correcto);
  }
 
    /*Por último, y como aviso para el usuario, si no está todo bién, osea, si la variable
    todo_correcto ha devuelto false al menos una vez, generaremos una alerta advirtiendo
    al usuario de que algunos datos ingresados no son los que esperamos.*/
    if(!todo_correcto){
    alert('Algunos campos no están correctos, vuelva a revisarlos');
    }else{
    event.currentTarget.submit();
    alert('mensaje enviado');  
    }
    console.log(todo_correcto);
    return todo_correcto;
    }
    
 
   