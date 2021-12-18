<?php

use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Entity
 * @Table(name="jabaianb.voyage") 
 */

class voyage {

    /**
     * @Id
     * @Column(type="integer")
     * @GeneratedValue
     */
    public $id;


    /**
     * @ManyToOne(targetEntity="utilisateur")
     * @JoinColumn(name="conducteur", referencedColumnName="id")
     */
    public $conducteur;

    /**
     * @ManyToOne(targetEntity="trajet")
     * @JoinColumn(name="trajet", referencedColumnName="id")
     */
    public $trajet;
    /**
     * @Column(type="integer", length=45);
     */
    public $tarif;

    /**
     * @Column(type="integer", length=45)
     */
    public $nbPlace;


    /**
     * @Column(type="integer", length=45)
     */
    public $heureDepart;


    /**
     * @Column(type="string", length=200)
     */
    public $contraintes;


}
