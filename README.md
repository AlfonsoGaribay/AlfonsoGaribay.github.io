<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <!-- google fonts link  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet">

  <!-- my style sheet -->
  <link rel="stylesheet" href="styles.css">
  <title>Alfonso</title>
</head>

<body>

  <div class="container-fluid" id="contentView">

    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#hero-section">Welcome</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#hero-section"></a>
            <a class="nav-link" href="#about-section">About</a>
            <a class="nav-link" href="#projects-section">Projects</a>
            <a class="nav-link" href="#contact-section">Contact</a>
          </div>
        </div>
      </div>
    </nav>



    <section id='hero-section' class="fullscreen-sections">
      <div class="container-fluid" id="hero-content">
        <img src="imgs/portrait-min.jpg" alt="profile-pic">
        <div id="hero-text">
          <h1> Alfonso Garibay </h1>
          <p>Student of Engineering.</p>

        </div>

      </div>
    </section>



    <section id="about-section" class="fullscreen-sections">
      <div class="container-fluid">
        <div class="row">

          <div class="col">
            <h2> About_me </h2>
          </div>

          <div class="col about-topics">
            <h4> Education </h4>

            <p>
              Currently enrolled at SJSU, finishing
              this year with a BS in Computer Engineering
            </p>

            <h4 class="seperable"> Work Experience </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Convallis aenean et tortor at risus.
            </p>

            <h4 class="seperable"> Human Languages </h4>
            <p>
              Im a native English speaker.
              <br>
              Hablo Espanol.
              <br>
              Parlo Italiano
            </p>

            <h4 class="seperable"> Programming Languages</h4>
            <p>
              JavaScript, Express.js, Node.js, EJS, jQuery
              <br>
              HTML/CSS
              <br>
              Swift
              <br>
              C++
            </p>

          </div>
        </div>
      </div>
    </section>



    <section id="projects-section" class="fullscreen-sections ">
      <div class="container-fluid">
        <div class="row">

          <div id="project-title">
            <h2 > Projects </h2>
          </div>

          <div class="row">


            <div class="row card-deck">
              <div class="col project-card">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title"> Flixster App</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark" target="_blank">See it</a>
                  </div>
                </div>
              </div>


              <div class="col project-card">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Lorum App</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark" target="_blank">See it</a>
                  </div>
                </div>
              </div>

              <div class="col project-card">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Lorum Site</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark" target="_blank">See it</a>
                  </div>
                </div>
              </div>


              <div class="col project-card">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Lorum Site</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark" target="_blank">See it</a>
                  </div>
                </div>
              </div>


              <div class="col project-card ">
                <div class="card" style="width: 18rem;">
                  <img src="imgs/Hero Section-min.png" class="card-img-top " alt="...">
                  <div class="card-body">
                    <h5 class="card-title">ChatApp Design</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.figma.com/file/3IYoDFuMcrNgf2fb0aYh4t/ChatApp-Site-Design-Mock?node-id=0%3A1" target="_blank" class="btn btn-dark">See it</a>
                  </div>
                </div>
              </div>


              <div class="col project-card">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Lorum Design</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-dark" target="_blank">See it</a>
                  </div>
                </div>
              </div>
            </div> <!-- last inner row -->




          </div> <!-- inner row-->


        </div> <!-- fin row -->
      </div>

    </section>





    <section id="contact-section" class="fullscreen-sections">
      <div class="container-fluid">

        <div class="row">
          <div class="col">
            <h2> Contact_me </h2>
          </div>

          <div class="col contact-buttons">
            <h4 class="contact-links"><a class="light" href="mailto:alfonsogaribay89@gmail.com"> Email</a></h4>
            <h4 class="contact-links"><a class="light" href="https://www.linkedin.com/in/alfonso-garibay/"> LinkedIn</a></h4>
          </div>
        </div>

      </div>
    </section>





    <footer> ©2022, Alfonso Garibay. All rights reserved. </footer>

    <!--keeps tags within this to keep them in the content view that you are using :) -->
  </div>
  </div>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="index.js" charset="utf-8"></script>

</body>

</html>
