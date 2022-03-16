<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" type="text/css" href="../_css/style.css">
        <link rel="stylesheet" type="text/css" href="../_css/contato.css">
        <link rel="shortcut icon" href="../_img/hotel-header.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Coda|Open+Sans" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Cinzel|Open+Sans+Condensed:300" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:700i|Fira+Sans" rel="stylesheet">
        <script src="../_js/jquery.js"></script>
        <script src="../_js/jquery.flexslider.js"></script>
        <script type="text/javascript" src="../_js/script.js"></script>
        <title>Hotel Pousada da Neve | Contato</title>
    </head>
    <body>
      <div id="preloader">
          <div id="status">
            <img src="../_img/hotel.png" alt="">
             <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
            </div>
          </div>
        </div>
       <header class="scroll-header">
           <div class="scroll-header-logo">
                <a href="../index.html"><img src="../_img/hotel.png" alt="Logo Hotel Pousada da Neve"></a>
            </div>
            <nav class="scroll-header-nav">
               <ul>
                   <li><a href="../o-hotel/index.html">O Hotel</a></li>
                   <li><a href="../eventos/index.html">Eventos</a></li>
                   <li><a href="../infraestrutura/index.html">Infraestrutura</a></li>
                   <li><a href="../tarifario/index.html">Tarifário</a></li>
                   <li><a href="index.php">Contato</a></li>
               </ul>
            </nav>
            <a href="https://reservas.desbravador.com.br/reservas/rol1/?token=G25CpPpaGyLLcyvYF6%2F0cC%2FFwydrW6ScMLeH4IIn7lyEQsmSoZFYgswOKgCmbtT9S1NldxEIPQgXWOyahEn81w%3D%3D" target="_blank"><button id="resevar" class="scroll-headerBtn" type="submit">Reservar agora</button></a>
        </header>
        <div class="mobile mobile-menu">
            <div class="logo">
                <a href="../index.html"><img src="../_img/hotel.png" alt="Logo Hotel Pousada da Neve"></a>
            </div>
            <ul class="menu-mobile">
                <li>
                    <a href="../o-hotel/index.html" id="current">O Hotel</a>
                    <a href="#!" class="btn hotBtn">
                         <i class="hotplus-icon">&#x2b;</i>
                         <i class="hotminus-icon">&#x2212;</i>
                    </a>
                    <ul class="hotel">
                        <li><a href="../apartamentos/index.html">Apartamento Luxo</a></li>
                        <li><a href="../apartamentos/index.html#luxosuperior">Apartamento Luxo Superior</a></li>
                    </ul>
                </li>
                <li><a href="../tarifario/index.html">Tarifário</a>
                   <a href="#!" class="btn hotBtn">
                         <i class="hotplus-icon">&#x2b;</i>
                         <i class="hotminus-icon">&#x2212;</i>
                    </a>
                    <ul class="tarifario">
                        <li><a href="../tarifario/index.html#bandeiras">Cartões Aceitos</a></li>
                        <li><a href="../tarifario/index.html#voucher">Voucher Presente</a></li>
                        <li><a href="../tarifario/index.html#politica">Política de Reserva e Cancelamento</a></li>
                    </ul>
                </li>
                <li><a href="../eventos/index.html">Eventos</a></li>
                <li><a href="../infraestrutura/index.html">Infraestrutura</a></li>
                <li><a href="index.php">Contato</a></li>
            </ul>
            <a href="https://reservas.desbravador.com.br/reservas/rol1/?token=G25CpPpaGyLLcyvYF6%2F0cC%2FFwydrW6ScMLeH4IIn7lyEQsmSoZFYgswOKgCmbtT9S1NldxEIPQgXWOyahEn81w%3D%3D" target="_blank"><button id="resevar" class="menu-mobileBtn" type="submit">Reservar agora</button></a>
        </div>
        <header class="scroll-header-mobile mobile">
            <div class="logo">
                <a href="../index.html"><img src="../_img/hotel.png" alt="Logo Hotel Pousada da Neve"></a>
            </div>
        </header>
        <div id="parallax-world-of-ugg">
           <div class="icon mobile">
                <div class="hamburguer"></div>
            </div>
            <section>
                <div class="parallax-one">
                    <h2>Fale conosco!</h2>
                    <div class="icon-scroll">
                          <div class="mouse">
                            <div class="wheel"></div>
                          </div>
                          <div>
                            <span class="a1"></span>
                            <span class="a2"></span>
                            <span class="a3"></span>
                          </div>
                    </div>
                </div>
            </section>
            <section id="form">
              <div class="title">
                <h1>Formulário de Reservas e Consultas</h1>
              </div>
              <p class="line-break margin-top-10"></p>
            </section>
            <section class="contactForm">
               <?php if(isset($_GET['msg']) && $_GET['msg'] === "enviado"): ?>
                      <div class="block">
                           <h3>Mensagem enviada.<br> Retornaremos o mais breve possível!</h3>
                           <a href="../index.html"><button id="retornar" class="rooBtn" type="button">Retornar à página inicial</button></a>
                       </div>
                <?php else: ?>
                <form action="enviar.php" method="post">
                    <input id="name" name="name" type="text" placeholder="Nome completo" required>
                    <input id="telefone" name="telefone" type="text" placeholder="Telefone" required>
                    <input id="email" name="email" type="text" placeholder="E-mail" required>
                    <input id="cidade" name="cidade" type="text" placeholder="Cidade" required>
                    <input id="estado" name="estado" type="text" placeholder="Estado" required>
                    <input id="cep" name="cep" type="text" placeholder="CEP" required>
                    <input id="chegada" name="chegada" type="text" placeholder="Data de chegada" required>
                    <input id="saida" name="saida" type="text" placeholder="Data de saída" required>
                    <select name="apartamento" id="apartamento" required>
                            <option value="select-apto"><p>Escolha a categoria do seu apartamento:</p></option>
                            <option value="Luxo"><p>Apartamento Luxo</p></option>
                            <option value="Luxo Superior"><p>Apartamento Luxo Superior</p></option>
                    </select>
                    <textarea name="descricao" id="descricao" type="text" placeholder="Descrição dos visitantes (Nome e idade)"></textarea>
                    <textarea name="message" id="message" type="text" placeholder="Deixe aqui sua mensagem"></textarea>
                    <input class="rooBtn" id="submit" type="submit" value="Enviar">
                </form>
                <?php endif; ?>
            </section>
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.261696009332!2d-51.10502548562225!3d-29.362625806857057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951eb385b2675379%3A0x3b788aea30d9b2cf!2sHotel+Pousada+da+Neve!5e0!3m2!1spt-BR!2sbr!4v1521493324791" frameborder="0" style="border:0" allowfullscreen></iframe>
            </section>
            <footer>
               <div class="container">
                   <div class="social">
                        <div class="footer-logo">
                              <img src="../_img/hotel.png" alt="">
                        </div>
                        <div class="selos">
                            <a href="https://www.facebook.com/HotelPousadaDaNeve/" target="_blank"><img id="facebook" src="../_img/icons/facebook.png" alt=""></a>
                            <a href="https://www.novapetropolis.rs.gov.br/" target="_blank"><img id="np" src="../_img/icons/np.png" alt=""></a>
                            <a target="_blank" href="https://www.tripadvisor.com.br/Hotel_Review-g775231-d2096127-Reviews-Hotel_Pousada_da_Neve-Nova_Petropolis_State_of_Rio_Grande_do_Sul.html">
                            <img id="selotrip" src="../_img/trip.png" alt=""></a>
                            <img id="selobooking" src="../_img/selobooking.png" alt=""> 
                        </div>
                    </div>
                    <div class="contact">
                        <p><a href="mailto:pousadadaneve@pousadadaneve.com.br?Subject=Hello%20again" target="_top"><img src="../_img/icons/mail.png" alt="">pousadadaneve@pousadadaneve.com.br</a></p>
                        <p><a href="tel:54-3281-1354" target="_top"><img src="../_img/icons/phone.png" class="fone-icon" alt="">+55 (54) 3281 1354</a></p>
                        <p><a href="tel:54-99641-0669" target="_top"><img src="../_img/icons/phone.png" class="fone-icon" alt="">+55 (54) 99641 0669</a></p>
                        <p><a href="tel:0800-643-1354" target="_top"><img src="../_img/icons/phone.png" class="fone-icon" alt="">+55 0800 643 1354</a></p>
                    </div>
                    <div class="footer-credits">
                        <p>Rua Munique, 523. Bairro Pousada da Neve, Nova Petrópolis - RS.<br>&copy; Hotel Pousada da Neve 2018 | Todos os direitos reservados.<br>Website desenvolvido por <a href="http://jeibel.com.br" target="_blank">J.Eibel</a></p>
                    </div>
                </div>
            </footer>
        </div>
        <nav class="sidebar desktop">
            <div class="icon">
              <div class="hamburguer"></div>
            </div>
            <div class="sidebarlogo">
                <a href="../index.html"><img src="../_img/hotel.png" alt="Logo Hotel Pousada da Neve"></a>
            </div>
            <ul class="desktop-menu">
                <li>
                    <a href="../o-hotel/index.html" id="current">O Hotel</a>
                    <a href="#!" class="btn hotBtn">
                         <i class="hotplus-icon">&#x2b;</i>
                         <i class="hotminus-icon">&#x2212;</i>
                    </a>
                    <ul class="hotel">
                        <li><a href="../apartamentos/index.html">Apartamento Luxo</a></li>
                        <li><a href="../apartamentos/index.html#luxosuperior">Apartamento Luxo Superior</a></li>
                    </ul>
                </li>
                <li><a href="../tarifario/index.html">Tarifário</a>
                   <a href="#!" class="btn hotBtn">
                         <i class="hotplus-icon">&#x2b;</i>
                         <i class="hotminus-icon">&#x2212;</i>
                    </a>
                    <ul class="tarifario">
                        <li><a href="../tarifario/index.html#bandeiras">Cartões Aceitos</a></li>
                        <li><a href="../tarifario/index.html#voucher">Voucher Presente</a></li>
                        <li><a href="../tarifario/index.html#politica">Política de Reserva e Cancelamento</a></li>
                    </ul>
                </li>
                <li><a href="../eventos/index.html">Eventos</a></li>
                <li><a href="../infraestrutura/index.html">Infraestrutura</a></li>
                <li><a href="index.php">Contato</a></li>
            </ul>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.261696009332!2d-51.10502548562225!3d-29.362625806857057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951eb385b2675379%3A0x3b788aea30d9b2cf!2sHotel+Pousada+da+Neve!5e0!3m2!1spt-BR!2sbr!4v1521493324791" frameborder="0" style="border:0" allowfullscreen></iframe>
            <div class="mailwrapper">
                <p>pousadadaneve@pousadadaneve.com.br</p>
            </div>
        </nav>
        <script type="text/javascript" src="../_js/script.js"></script>
        <script type="text/javascript">
            datePicker();
            loading();
        </script>
    </body>
</html>
