Testing jQuery Mobile SplitView Extension
=========================================

The raison d'être - if you'll pardon my french (which it isn't, really, I mean, its not like I'm swearing or anything, right?) - is twofold

- working on my white belt js test-fu
- implementing a number of use cases on the jQuery Mobile SplitView Extension

Being aware of the traditional belt colours of martial arts, you will reckon that I am not even considering myself a newbie in this testing game!

Current state
-------------

You could say that so far I've only stated the obvious :(

On the other hand, you might just as well accolade that all the gruntwork is cleared :)

Anyways; I've described the use cases and added my 2 cents of view on the actions following the click event on a-tags and submit inputs and now I'm facing this small list of tasks:

- somehow the testing must be split into separate testing runs - 132 tests in one batch is on the brink of exhausting my browser entirely
- $.ajax really is the culprit; using jquery.mockajax.js has me just about within reach - now I'm left with a missing $('#jasmine-fixtures') content

Fixed issues:

- calling $.mobile.initializePage() in a beforeEach binds $.mobile to the Fixture

