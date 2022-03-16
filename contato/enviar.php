<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $GetPost = filter_input_array(INPUT_POST,FILTER_DEFAULT);

    $Erro = true;
    $Nome = $GetPost['name'];
    $Email = $GetPost['email'];
    $Cidade = $GetPost['cidade'];
    $Estado = $GetPost['estado'];
    $Cep = $GetPost['cep'];
    $Telefone = $GetPost['telefone'];
    $Chegada = $GetPost['chegada'];
    $Saida = $GetPost['saida'];
    $Apartamento = $GetPost['apartamento'];
    $Descricao = $GetPost['descricao'];
    $Mensagem = $GetPost['message'];

    include_once 'class/class.smtp.php';
    include_once 'class/class.phpmailer.php';

    $Mailer = new PHPMailer;
    $Mailer->CharSet = 'utf-8';
    $Mailer->SMTPDebug = 3;
    $Mailer->IsSMTP();
    $Mailer->Host = "smtp.pousadadaneve.com.br";
    $Mailer->SMTPAuth = 'true';
    $Mailer->Username = 'contato@pousadadaneve.com.br';
    $Mailer->Password = 'PousadaNeve2018';
    $Mailer->AddReplyTo($Email, $Nome);
    $Mailer->SMTSecure = 'tls';
    $Mailer->Port = 587;
    $Mailer->FromName = "{$Nome}";
    $Mailer->From = 'contato@pousadadaneve.com.br';
    $Mailer->AddAddress('pousadadaneve@pousadadaneve.com.br');
    $Mailer->IsHTML(true);
    $Mailer->Subject = "Novo e-mail de {$Email} ".date("H:i")." - ".date("d/m/Y");
    $Mailer->Body = "E-mail enviado por {$Nome} <br>Telefone: {$Telefone} <br>Cidade: {$Cidade} <br>Estado: {$Estado} <br>CEP: {$Cep} <br>Data de Chegada: {$Chegada} <br>Data de Saída: {$Saida} <br>Apartamento Escolhido: {$Apartamento} <br>Descrição dos Visitantes: {$Descricao}<br>Mensagem: {$Mensagem}";

    if($Mailer->Send()) {
        $Erro = false;
    }
    
    var_dump($Erro);
    
    header("location:index.php?msg=enviado");
    }else{
        header("location:index.php");
    }

?>