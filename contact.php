<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST["message"]) && isset($_POST["name"])) { 
    // Verifica que tanto el mensaje como el nombre estén presentes

        $name = $_POST["name"]; 
        // Obtén el nombre del remitente

        $message = $_POST["message"];
        $destinatario = "marc.yperlaan@gmail.com"; 
        // Dirección de correo del destinatario

        $asunto = "Message from your website";
         // Incluye el nombre en el asunto del correo

        $headers = "From: $name <$destinatario>" . "\r\n" .
                   "Reply-To: $name <$destinatario>" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();
                   // Envía el correo electrónico

        if (mail($destinatario, $asunto, $message, $headers)) 
        {echo "Mail sent successfully.";} else 
        {echo "Error sending email.";}
        }
        }
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/estilosv2.css">
<title>Contact</title>
</head>

<body>
    <div class="container">
        <header>
            <a href="index.html" class="Logo">
            <img src="https://marcyperlaan.github.io/migaleria/comun/Logo.png"></a> 
            <img class="marcyperlaan" src="https://marcyperlaan.github.io/migaleria/comun/marcy.png" alt="marcyperlaan">
        </header>

        <main>
            <br></br>
            <h2>Contact</h2>
            <form action="contact.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="nombre" name="name" required>

                 <!--<label for="email">Email:</label>
                <input type="email" id="email" name="email" required>-->

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        
        </main>

        <footer>
        <br></br>
        <a href="https://www.instagram.com/dash_bcn">
            <img src="https://marcyperlaan.github.io/migaleria/comun/insta.png" class="insta">
        </a>
        </footer>
    </div>
</body>
</html>
