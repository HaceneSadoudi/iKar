<header>
    <nav class="navbar p-0">
        <div class="navbar-inner w-100">
            <div class="justify-content-between align-items-center top-nav d-none d-md-flex">
                <ul class="personal-info d-flex">
                    <li class="personal-info-item"><i class="fa fa-map-marker" aria-hidden="true"></i> 3 rue galante, Avignon</li>
                    <li class="personal-info-item"><i class="fa fa-phone" aria-hidden="true"></i> (+33) 758 765 104</li>
                    <li class="personal-info-item"><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:sadoudi2019@gmail.com">sadoudi2019@gmail.com</a></li>
                </ul>
                <ul class="social-media d-flex">
                    <li class="social-media-item"><a href=""><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    <li class="social-media-item"><a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li class="social-media-item"><a href=""><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div class=" main-nav">
                <div class="container">
                    <div class="row navbar navbar-dark navbar-expand-md d-flex justify-content-between align-items-center">
                        <a href="index.php" class="logo">iKar</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navlinks navbar-nav mt-2 ml-auto">
                                <li><a href="#" id="rechercher-btn">Rechercher</a></li>
                                <?php if ($context->getSessionAttribute('is_logged') != NULL) { ?>
                                    <li><a href="#" id="proposer-btn">Proposer</a></li>
                                <?php } ?>
                                <?php if ($context->getSessionAttribute('is_logged') != NULL) { ?>
                                    <!-- <li><a href="#"></a></li> -->
                                <?php } ?>
                                <?php if ($context->getSessionAttribute('is_logged') != NULL) { ?>
                                    <!-- <li id=""><a href=""></a></li> -->
                                <?php } ?>
                                <li class="dropdown-menu-trigger">
                                    <?php if ($context->getSessionAttribute('is_logged')) { ?>
                                        <a href="javascript:void(0)" class="navbar-profile-toggle">
                                            <img class="pf-img" src="https://img.icons8.com/external-becris-flat-becris/64/000000/external-user-avatars-becris-flat-becris.png" />
                                            <!-- <span class="pf-username"><?php echo $context->getSessionAttribute('identifiant'); ?></span> -->
                                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                                        </a>
                                        <div class="menu">
                                            <ul class="menu-list">
                                                <li class="menu-item">
                                                    <a href="" class="menu-button js-profile-button"><i class="fa fa-user-o" aria-hidden="true"></i>Profile</a>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="" class="menu-button"><i class="fa fa-sliders" aria-hidden="true"></i>Settings</a>
                                                </li>
                                            </ul>
                                            <ul class="menu-list">
                                                <li class="menu-item">
                                                    <a href="index.php?action=deconnexion" id="disconnect" class="menu-button menu-button"><i class="fa fa-power-off" aria-hidden="true"></i>Déconnexion</a>
                                                </li>
                                            </ul>
                                        </div>
                                    <?php } else { ?>
                                        <a href="javascript:void(0)" id="connexion-btn" class="button2 connexion-btn">Connexion</a>
                                    <?php } ?>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </nav>
</header>