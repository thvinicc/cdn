<?

$nome=$_POST['nome'];

$email=$_POST['email'];

$titulo=$_POST['titulo'];

$texto=$_POST['texto'];


$Destinatario="aquivaiseuemail";


$Titulo="$titulo";


$mensagem1="

Uma mensagem vinda do site !

Algum vistante mandou essa mensagem pelo site.

Nome: $nome

Email: $email

Mensagem: $mensagem";


mail("$Destinatario","$Titulo", "$mensagem1","From:$email");

?>
