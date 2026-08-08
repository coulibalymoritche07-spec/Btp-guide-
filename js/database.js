// Base de données des ouvrages BTP
const BDD_OUVRAGES = {
    dalot: {
        id: 'dalot',
        nom: 'Dalot',
        type: 'Ouvrage hydraulique',
        description: 'Ouvrage hydraulique enterré permettant l\'écoulement des eaux pluviales ou de petits cours d\'eau sous les routes et voies ferrées.',
        phases: [
            {
                titre: 'Phase 1 : Études et préparations',
                duree: '2-3 semaines',
                taches: [
                    'Étude géotechnique du sol (portance, nappe phréatique)',
                    'Levée topographique du site',
                    'Étude hydrologique (calcul débit centennal)',
                    'Dimensionnement hydraulique (section mouillée)',
                    'Dimensionnement structurel (BAEL/Eurocode 2)',
                    'Élaboration des plans d\'exécution',
                    'Commande des matériaux (acier, ciment, granulats)'
                ]
            },
            {
                titre: 'Phase 2 : Implantation et terrassement',
                duree: '1-2 semaines',
                taches: [
                    'Implantation précise avec station totale',
                    'Piquetage des limites de fouille',
                    'Décapage terre végétale (20-30 cm)',
                    'Fouille en grande masse avec pelle mécanique',
                    'Blindage des parois si profondeur > 1.5m',
                    'Épuisement de la nappe si nécessaire',
                    'Réglage du fond de fouille au niveau fini'
                ]
            },
            {
                titre: 'Phase 3 : Béton de propreté et étanchéité',
                duree: '2-3 jours',
                taches: [
                    'Coulage béton de propreté dosé à 150 kg/m³',
                    'Épaisseur 5-10 cm avec pente pour drainage',
                    'Application produit de cure',
                    'Pose membrane d\'étanchéité si nécessaire'
                ]
            },
            {
                titre: 'Phase 4 : Ferraillage',
                duree: '1-2 semaines',
                taches: [
                    'Traçage précis des axes sur béton de propreté',
                    'Ferraillage radier : aciers longitudinaux et transversaux',
                    'Mise en place cales d\'enrobage (3 cm mini)',
                    'Ferraillage piédroits avec attentes',
                    'Ferraillage tablier (dalle supérieure)',
                    'Vérification enrobage et espacement',
                    'Pose coffrages perdus si nécessaire'
                ]
            },
            {
                titre: 'Phase 5 : Coffrage',
                duree: '1-2 semaines',
                taches: [
                    'Coffrage radier avec banches métalliques',
                    'Mise en place écarteurs et tirants',
                    'Vérification verticalité et alignement',
                    'Coffrage piédroits en une seule hauteur',
                    'Étanchéité des joints de coffrage',
                    'Coffrage tablier avec étaiement',
                    'Huilage des coffrages'
                ]
            },
            {
                titre: 'Phase 6 : Bétonnage',
                duree: '1-2 semaines',
                taches: [
                    'Commande béton prêt à l\'emploi C25/30 minimum',
                    'Bétonnage radier en continu',
                    'Vibration interne et externe soignée',
                    'Bétonnage piédroits par couches de 50 cm',
                    'Bétonnage tablier en une seule phase',
                    'Talochage et lissage de la surface',
                    'Cure du béton : arrosage 2x/jour pendant 7 jours'
                ]
            },
            {
                titre: 'Phase 7 : Finitions et remblaiement',
                duree: '2-3 semaines',
                taches: [
                    'Décoffrage après 48h minimum',
                    'Réparation des défauts de surface',
                    'Remblaiement par couches de 30 cm compactées',
                    'Compactage à 95% OPM minimum',
                    'Raccordement aux ouvrages existants',
                    'Essais d\'étanchéité',
                    'Remise en état des lieux'
                ]
            }
        ],
        metre: {
            terrassement: {
                decapage: 'Surface emprise × 0.30 m',
                fouille: '(L + 2m) × (l + 2m) × profondeur',
                remblai: 'Volume fouille - volume béton'
            },
            beton: {
                proprete: 'Surface radier × 0.10 m',
                radier: '(L + 0.40) × (l + 0.40) × épaisseur radier',
                piedroits: '2 × (L + 0.40) × épaisseur × hauteur',
                tablier: '(L + 0.40) × (l + 0.40) × épaisseur tablier'
            },
            acier: {
                ratioRadier: '80-100 kg/m³ de béton',
                ratioPiedroits: '90-110 kg/m³ de béton',
                ratioTablier: '100-120 kg/m³ de béton'
            }
        },
        normes: [
            'BAEL 91 modifié 99',
            'Eurocode 2 (NF EN 1992-1-1)',
            'Eurocode 7 (NF EN 1997-1)',
            'Fascicule 70 - Assainissement',
            'Fascicule 65 - Béton armé'
        ]
    },
    
    batiment: {
        id: 'batiment',
        nom: 'Bâtiment R+2',
        type: 'Construction bâtiment',
        description: 'Construction d\'un bâtiment à usage d\'habitation ou bureau avec Rez-de-chaussée plus 2 étages.',
        phases: [
            {
                titre: 'Phase 1 : Installation et préparation',
                duree: '2-3 semaines',
                taches: [
                    'Installation de chantier (baraquements, sanitaires)',
                    'Branchements provisoires (eau, électricité)',
                    'Clôture et signalisation du chantier',
                    'Implantation générale avec bornes',
                    'Nivellement du terrain'
                ]
            },
            {
                titre: 'Phase 2 : Fondations',
                duree: '3-4 semaines',
                taches: [
                    'Fouille en rigole pour semelles filantes',
                    'Béton de propreté sous fondations',
                    'Ferraillage semelles selon plan structure',
                    'Coffrage semelles filantes',
                    'Bétonnage fondations',
                    'Attentes poteaux et chainages verticaux'
                ]
            },
            {
                titre: 'Phase 3 : Élévation RDC',
                duree: '4-6 semaines',
                taches: [
                    'Coffrage poteaux RDC',
                    'Bétonnage poteaux',
                    'Coffrage poutres et chainages',
                    'Ferraillage plancher haut RDC',
                    'Coffrage plancher avec étaiement',
                    'Bétonnage plancher R+1'
                ]
            },
            {
                titre: 'Phase 4 : Élévation R+1 et R+2',
                duree: '8-12 semaines',
                taches: [
                    'Répétition phase 3 pour chaque niveau',
                    'Coulage poteaux d\'angle et intermédiaires',
                    'Planchers intermédiaires',
                    'Dalle de toiture avec pente',
                    'Acier en attente pour acrotères'
                ]
            },
            {
                titre: 'Phase 5 : Second œuvre',
                duree: '10-14 semaines',
                taches: [
                    'Maçonnerie cloisons en agglos',
                    'Réseaux électriques (encastrement)',
                    'Réseaux plomberie (alimentation, évacuation)',
                    'Enduits intérieurs et extérieurs',
                    'Menuiseries (portes, fenêtres)',
                    'Revêtements sols et murs',
                    'Peinture'
                ]
            }
        ],
        metre: {
            fondations: {
                semelles: 'Longueur totale × largeur × hauteur',
                longrine: 'Longueur × section'
            },
            elevation: {
                poteaux: 'Nombre × section × hauteur',
                poutres: 'Longueur totale × section',
                planchers: 'Surface × épaisseur (20 cm standard)'
            }
        },
        normes: [
            'BAEL 91 modifié 99',
            'Eurocode 2 (NF EN 1992-1-1)',
            'Eurocode 8 (calcul sismique)',
            'Règlement parasismique RPA',
            'DTU 21 - Béton armé'
        ]
    },
    
    route: {
        id: 'route',
        nom: 'Route revêtue',
        type: 'Voirie et réseaux',
        description: 'Construction de voie routière avec corps de chaussée en béton bitumineux.',
        phases: [
            {
                titre: 'Phase 1 : Études et piquetage',
                duree: '2-3 semaines',
                taches: [
                    'Étude géotechnique (CBR, portance)',
                    'Profil en long et profils en travers',
                    'Calcul cubatures déblais/remblais',
                    'Piquetage axe et limites emprise'
                ]
            },
            {
                titre: 'Phase 2 : Terrassements',
                duree: 'Variable selon longueur',
                taches: [
                    'Décapage terre végétale',
                    'Déblais à la pelle ou niveleuse',
                    'Remblais par couches de 30 cm',
                    'Compactage par couche (95% OPM)',
                    'Réglage plateforme PF2 ou PF3'
                ]
            },
            {
                titre: 'Phase 3 : Couche de forme',
                duree: '1-2 semaines',
                taches: [
                    'Mise en œuvre graveleux latéritique',
                    'Épandage et réglage',
                    'Compactage intense',
                    'Contrôle de portance'
                ]
            },
            {
                titre: 'Phase 4 : Corps de chaussée',
                duree: '2-4 semaines',
                taches: [
                    'Couche de base en grave bitume (0/31.5)',
                    'Réglage finisseur',
                    'Compactage compacteur à pneus',
                    'Couche de roulement béton bitumineux (0/10)',
                    'Compactage final',
                    'Marquage au sol'
                ]
            }
        ],
        metre: {
            terrassement: {
                decapage: 'Largeur emprise × longueur × 0.30',
                deblai: 'Volume calculé par profils',
                remblai: 'Volume + 15% foisonnement'
            },
            chaussee: {
                coucheForme: 'Largeur × longueur × 0.30',
                base: 'Largeur × longueur × 0.20',
                roulement: 'Largeur × longueur × 0.06'
            }
        },
        normes: [
            'Guide Terrassements Routiers (GTR)',
            'Normes AFNOR NF P 98',
            'CCTP type routes'
        ]
    }
};

// Fonction de recherche
function rechercherOuvrage(terme) {
    terme = terme.toLowerCase();
    
    for (let [cle, ouvrage] of Object.entries(BDD_OUVRAGES)) {
        if (cle.includes(terme) || 
            ouvrage.nom.toLowerCase().includes(terme) ||
            ouvrage.type.toLowerCase().includes(terme)) {
            return ouvrage;
        }
    }
    
    return null;
          }
