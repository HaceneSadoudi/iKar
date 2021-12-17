<?php

use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name="jabaianb.trajet")
 */

class trajet {

    /**
     * @Id @Column(type="integer")
     * @GeneratedValue
     */
    public $id;

    /**
     * @Column(type="string", length=25)
     */
    public $depart;

    /**
     * @Column(type="string", length=25)
     */
    public $arrivee;

    /**
     * @Column(type="integer")
     */
    public $distance;
}
