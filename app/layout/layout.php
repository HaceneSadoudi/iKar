<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="google-signin-client_id" content="393206312020-qrt02hp5bolq0diifh95qia7rc20lcqu.apps.googleusercontent.com">
  <title>
    Ton appli !
  </title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <link rel="stylesheet" href="css/mainStyle.css">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <div id="bandeau" class="alert alert-info alert-dismissible fade">
    <strong class="content"></strong>
  </div>
  <?php include("app/view/inc/header.inc.php") ?>
  <?php if ($context->getSessionAttribute('user_id')) : ?>
    <?php echo $context->getSessionAttribute('user_id') . " est connecte"; ?>
  <?php endif; ?>

  <div id="page">
    <?php if ($context->error) : ?>
      <div id="flash_error" class="error">
        <?php echo " $context->error !!!!!" ?>
      </div>
    <?php endif; ?>
    <div id="page_maincontent">
      <?php include($template_view); ?>
    </div>
  </div>


  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="validation.js"></script>
  <script src="js/lib.js"></script>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <script src="js/main.js"></script>
  <script src="js/app.js" type="module"></script>
  <script src="js/dispatcherAjax.js" type="module"></script>
</body>

</html>