# Fake_belastingsdienst_form
Belastingsdienstformulier gebaseerd op de styling van NS. Dit is een neppe webstite voor het vak Web development

Website:
[Overheidsform met NS styling](https://fake-belastingsdienst-form.onrender.com/)


## Onderbouwingen

* Ik heb ervoor gekozen om alles op 1 pagina weer te geven, omdat de gebruiker dan elk moment nog terug kan gaan om de vorige vraag/vragen aan te kunnen passen.

* Het BSN input veld is voorzien van de elfproef en een 9 karakter limiet. Het limiet zorgt ervoor dat er fouten vanuit de gebruiker voorkomen worden. Door de elfproef toe te passen wordt er gelijk gecontroleerd op de mogelijkheid tot bestaan van het BSN nummer. Als het BSN nummer niet bestaat, dan wordt dit door de "error handler" weergegeven.

* Bij versie 1 zaten de labels genest in de input. De label gaat vervolgens uit de input, zodra de gebruiker de input heeft aangeklikt. Aan de hand van feedback, heb ik het design van de label veranderd. Ik heb de label vervolgens links van de input gezet. Op de design verandering heb ik opnieuw feedback ontvangen. De gemiddelde gebruiker scant de form van boven naar beneden. Als er een label en input naast elkaar worden weergegeven dan moet de gebruiker ook bepaalde velden naast elkaar scannen. Om dit te voorkomen is er weer een design verandering gemaakt. Hierbij is de label boven de input geplaatst. Ook is het voordeel van deze methode, dat er op mobiel formaat, ruimte wordt bespaard.

* Ik heb ook progressive disclosure toegepast, zodat het formulier alleen de stukken weergeeft die voor de gebruiker van toepassing zijn.

* Om van de eerste naar de volgende vraag te kunnen komt er een "volgende" knop tevoorschijn zodra de gebruiker de inputvelden heeft ingevuld. De gebruiker kan vervolgens met de knop door naar de volgende vraag.

* Er is een toevoeging gedaan aan het formulier. Deze toevoeging geeft de gebruiker de mogelijkheid om verkrijgers toe te voegen. Ook kan er met de plus knop meerdere verkrijgers toegevoegd worden aan het formulier.

* Ik heb verschillende animaties toegevoegd aan de formulier. De animaties zorgen ervoor dat de gebruiker feedback ontvangt bij een interactie. Ook kunnen de animaties kleinschallig of grootschallig zijn. De grootschalige animaties zitten vooral in de knoppen, omdat die goede feedback kunnen weergeven. De kleinschallige animaties zitten in het gebruik van de form. Zo ziet de gebruiker waar de gebruiker is met de input velden.

* De "error messages" heb ik onder de input gezet. De reden hiervoor is de style van NS zelf. NS laat de "error" onder de input zien. Ook is dit de beste plek om de error neer te zetten, omdat boven de input al de label staat. Als de "message" boven de input komt dan kan het voor de gebruiker verwarend zijn. De verwarring kan ontstaan doordat de label en de "error" door elkaar worden gehaald. Ook is het plaatsten van de "error" naast de input een minder goed idee, omdat de gebruiker, zoals hierboven beschreven, van bove naar beneden de formulier scant.
