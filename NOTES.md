# Notes and Reference

- Root RPG quick start: https://drive.google.com/drive/folders/12YXSNKgV59R-vuW4icNgIGiEOxM27aIy
- App Design: https://beta.tldraw.com/r/v2_c_cPeU9aK5KojGoMlm0H-z8

pscale connect createvagabondapp dev-sam --port 3309

clerk mail 2FA redirect
  login 2FA --> email --> redirect back to /auth/verify

character creation
  [X] Name

  [X] Class

  [X] Nature
    diff by class
    pick one
    CAN BE CHANGED AFTER ADVANCEMENTS

  [X] Drives
    diff by class
    choose 2
    CAN BE CHANGED AFTER ADVANCEMENTS

  [X] Stats
    each class with diff default
    when create + 1
    max value 2

  [X] Roguish Feats
    list same
    each class with 2
    choose extra 1

  [X] Weapon Skills
    list same
    when created
      choose 1 in the bold one(diff by class)
      other can be pick later with progressing
    // (weapon can has it own moves)

  [X] Class Moves
    diff by class
    when create choose 3
    always start with 3 moves
    tinker start with 2 default move(choose 1) --> still 3 in total

  [X] Vagabond Equipment's stats
    when create
      [X] class starting value [money]
      [X] Carying: number (total weight of items)
      [X] Burdened: some sort of tired... limit (Might + 4)
      [X] Max: max carry weight (Burdened * 2)

  [X] Species
  [X] Details
  [X] Demeanor
  [X] Background
    Where do you call home?
    Why are you a vagabond?
    Whom have you left behind?
    Which faction have you served the most?
    With which faction have you earned a special enmity?
  [X] Connections
    connectionConnection
  [ ] Reputation
    5 x faction with value [-3, 3] and ticks (in sheet)

///
[ ] Equipment
  weight
  weapon skills
  tags

Moves
  basic moves
  class moves
  weapon moves
  travel moves
  reputation moves

resources
  https://github.com/Vagabottos
  https://github.com/Vagabottos/rootbot/tree/master/content/root/cards

factions
  Marquise
    http://root.livingrules.io/assets/image/Faction_M.png
  Eyrie
    http://root.livingrules.io/assets/image/Faction_E.png
  Alliance
    http://root.livingrules.io/assets/image/Faction_A.png
  Vagabond
    http://root.livingrules.io/assets/image/Faction_V.png
  Cult
    http://root.livingrules.io/assets/image/Faction_L.png
  Riverfolk
    http://root.livingrules.io/assets/image/Faction_O.png
  Underground Duchy
    https://root.seiyria.com/assets/inicon/faction-duchy.png
  Corvid Conspiracy
    https://root.seiyria.com/assets/inicon/faction-corvid.png
  Lord of the Hundreds
    https://root.seiyria.com/assets/inicon/faction-warlord.png
  Keepers in Iron
    https://root.seiyria.com/assets/inicon/faction-keepers.png

other characters
  blushing bluejays
    https://ksr-ugc.imgix.net/assets/037/968/976/00364392ada116f1bf9f3031e02c9459_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1657905516&gif-q=50&q=92&s=a0feecb8aa94f0791b65e4139a325378
  balmy badgers (arbiter)
    https://ksr-ugc.imgix.net/assets/037/379/045/dac2f756f2f73fe25da2e6ae0cf1a438_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1653067749&gif-q=50&q=92&s=af3df7a7a39fbadc58b1d8682641f9c0
  redoubtable raccoons (thief)
    https://ksr-ugc.imgix.net/assets/037/059/051/deef8d6278d3ce1f0567dda0b86b604e_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1650569788&gif-q=50&q=92&s=b1fd4ce915586a9a01ab7cf6666ed3b6
  baffling bunnies
    https://ksr-ugc.imgix.net/assets/036/541/359/b9147dae2403a934fc957f308594beef_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1646323964&gif-q=50&q=92&s=b6aed0f82b9b8f0deb924ccba5ea647d
  exquisite eagles
    https://ksr-ugc.imgix.net/assets/036/501/067/294b3f240f92ded1e8d31d18ee67c0fa_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1646094432&gif-q=50&q=92&s=73c4956fb824c8dde317e6506cf69d63
  confounding cats
    https://ksr-ugc.imgix.net/assets/036/179/568/3b4d53a2ff9a00f89cc2b9af24a538b2_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1643231691&gif-q=50&q=92&s=c657853b22d44343b48857a73d3840ae
  harmonic hawks
    https://ksr-ugc.imgix.net/assets/035/875/736/b357216d68b6c8a0757a0812ebae0111_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1639778355&gif-q=50&q=92&s=a555e2445beea21762eed957ec38ff87
  foolhardy foxes
    https://ksr-ugc.imgix.net/assets/035/682/279/5d66abf16b3bef780382aaa6b26e6bc2_original.jpeg?ixlib=rb-4.0.2&w=700&fit=max&v=1637785322&gif-q=50&q=92&s=a8dc03a672379fd87e6ad5bcbd9317c0

page 0
  class

page 1
  name
  species
  details
  demeanor
  background

page 2
  nature
  drives
  stats
  roguish feats
  weapon skills
  class moves

page 3
  connections
  reputations

------

# TODO:

- Vagabond Info Page
- Edit Vagabond
  - Create a link in the Vagabond Info page for this.
  - Can be used for advancements?
  - This could just be opening the create page, but prefill with existing info of that vagabond.
- Advancement page
  - Can be combined with above?
  - See note for advancements below.
- Add a home page
  - Detach the "layout" Relay fetch function hook from this.
- Create some private routes for logged-in users only (like vagabonds-related page).
  - Only allow access if there's an active Clerk session
  - If not, redirect to Home or Login page.
- Rework the Clerk functionalities in the Layout hook.
  - if clerk session is not active => throw an error
- Find out if there are any other paths needed by Clerk and fill this in.

# Advancements

- Advancement can be declared by fulfilling a drive.
- When declared, pick an action from the list.
  - Take +1 to a stat (max is still +2)
  - Take a new move from the current vagabond class' playbook (max 5 moves from the current class playbook, include starting 3.)
  - Take a new move from another vagabond class' playbook (max 2 moves from other playbooks)
  - Take up to 2 new weapon skills (max 7 weapon skills)
    - max 7 include the starting weapon skills
    - NOT counting any of the skills learnt via a playbook move or via a weapon skill tag.
  - Take up to 2 new roguish feats (max 6 roguish feats)
  - Add 1 box to one harm track (Injury, Exhaustion, Depletion) (max 6 each track)
  - Make up to 2 new connections (max 6 connections)
