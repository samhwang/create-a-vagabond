import { ClassMove, PrismaClient } from '@prisma/client'

export const classMoveSeeding = async (prisma: PrismaClient) => {
  await prisma.classMove.deleteMany({})
  return prisma.classMove.createMany({ data: classMoves })
}

export const classMoves: ClassMove[] = [
  {
    id: 'sterling_reputation',
    name: 'Sterling Reputation',
    description: `Whenever you mark any amount of prestige with a faction, mark one additional prestige. When you mark any amount of notoriety with a faction, you can instead clear an equivalent amount of marked prestige.`,
  },
  {
    id: 'subduing_strikes',
    name: 'Subduing Strikes',
    description: `When you aim to subdue an enemy quickly and nonlethally, you can engage in melee with Cunning instead of Might. You cannot choose to inflict serious harm if you do.`,
  },
  {
    id: 'talon_on_the_pulse',
    name: 'Talon on the Pulse',
    description: `When you gather information about the goings-on in a clearing, roll with Cunning. On a 10+, ask 3. On a 7-9, ask 2. On a miss, your questions tip off someone dangerous.
      Who holds power in this clearing?
      Who is the local dissident?
      What are the denizens afraid of?
      What do the denizens hope for?
      What opportunities exist for enterprising vagabonds?
    `,
  },
  {
    id: 'orator',
    name: 'Orator',
    description: `When you give a speech to interested denizens of a clearing, say what you are motivating them to do and roll with Charm. On a hit, they will move to do it as they see fit. On a 10+, choose 2. On a 7-9, choose 1. On a miss, they twist your message in unpredictable ways.
      They don't try to take your intent too far
      They don't disband at the first sign of real resistance
      They don't demand you stand at their head and lead
    `,
  },
  {
    id: 'well_read',
    name: 'Well-Read',
    description: `Take +1 Cunning (max +3).`,
  },
  {
    id: 'fast_friends',
    name: 'Fast Friends',
    description: `When you try to befriend an NPC you've just met by matching their personality, body language, and desires, mark exhaustion and roll with Cunning. On a hit, they'll look upon you favorably—ask them any one non-compromising question and they'll answer truthfully, or request a simple favor and they'll do it for you. On a 10+, they really like you—they'll share a valuable secret or grant you a serious favor instead. On a miss, you read them totally wrong, and their displeasure costs you.`,
  },

  {
    id: 'brute',
    name: 'Brute',
    description: `Take +1 Might (max +3).`,
  },
  {
    id: 'carry_a_big_stick',
    name: 'Carry a Big Stick',
    description: `When you use words to pause an argument or violent conflict between others, roll with Charm. On a hit, they choose: mark 2-exhaustion and keep going, or stop for now. On a 10+, take +1 ongoing to dealing with them peacefully. On a miss, NPCs turn their anger to you, and PCs take +1 ongoing against you for the scene.`,
  },
  {
    id: 'crash_and_smash',
    name: 'Crash and Smash',
    description: `When you smash your way through scenery to reach someone or something, roll with Might. On a hit, you reach your target. On a 10+, choose 1. On a 7-9, choose 2. On a miss, you smash through, but you leave yourself totally vulnerable on the other side.
      You hurt yourself: mark injury
      You break an important part of your surroundings
      You damage or leave behind a piece of gear (GM's choice)
    `,
  },
  {
    id: 'hardy',
    name: 'Hardy',
    description: `Take 1 additional injury box. Whenever time passes or you journey to a new clearing, you can clear 2 injury boxes automatically.`,
  },
  {
    id: 'strong_draw',
    name: 'Strong Draw',
    description: `When you target someone with a bow, mark wear on the bow to roll with Might. On a hit, mark exhaustion to inflict 1 additional injury. Mark exhaustion again to make your shot ignore the enemy's armor—they cannot mark wear to absorb the injury.`,
  },
  {
    id: 'guardian',
    name: 'Guardian',
    description: `When you defend someone or something from an immediate NPC or environmental threat, roll with Might. On a hit, you keep them safe and choose one. On a 7-9, it costs: expose yourself to danger or escalate the situation. On a miss, you take the full brunt of the blow intended for your protectee, and the threat has you where it wants you.
      Draw the attention of the threat; they focus on you now
      Put the threat in a vulnerable spot; take +1 forward to counterstrike
      Push the threat back; you and your protectee have a chance to maneuver or flee
    `,
  },

  {
    id: 'cross_country',
    name: 'Cross Country',
    description: `Take one extra box of exhaustion. When your exhaustion track is full and you must mark exhaustion, you may choose to mark an equivalent amount of injury instead of being removed from the situation or going unconscious.`,
  },
  {
    id: 'fleet_of_foot_and_hand',
    name: 'Fleet of Foot and Hand',
    description: `Take +1 Finesse (max +3).`,
  },
  {
    id: `dont_shoot_the_messenger`,
    name: `Don't Shoot the Messenger`,
    description: `Take the Counterfeit roguish feat (it does not count against your limit.) When you pretend to be an innocuous messenger carrying a missive of import to trick someone, roll with Luck instead of Cunning.`,
  },
  {
    id: 'parkour',
    name: 'Parkour',
    description: `When you dash your way through a chaotic scene or fight, roll with Finesse. On a 10+, hold 3. On a 7-9, hold 2. Spend your hold 1-for-1 to dash to something within sight and reach without being stopped, or to dash away from something nearby without being stopped. You can dash away from an enemy even at the moment they attack. On a miss, your surroundings trip you up, and you're caught in place while danger closes in.`,
  },
  {
    id: 'traveler_extraordinaire',
    name: 'Traveler Extraordinaire',
    description: `When you travel along the paths to another clearing, you can always give +1 to the roll or clear 2-exhaustion, your choice. When you travel through the forest to another clearing, you can always give +1 to the roll or clear 2-depletion, your choice. In both cases, before you arrive at the next clearing, you can ask the GM any two questions about the next clearing, based on what you remember from your last time through.`,
  },
  {
    id: `smugglers_path`,
    name: `Smuggler's Path`,
    description: `You've got a good sense for finding secret paths and doors. When you spend time looking for a secret way in or out of a place that might have one, mark exhaustion and roll with Luck. On a hit, you find a hidden path—the GM will detail it and to where it leads. On a 10+, there's something along or inside the path of value to you—the GM will tell you what. On a miss, you find a secret path...and someone else is using`,
  },

  {
    id: 'silent_paws',
    name: 'Silent Paws',
    description: `You are adept at slipping into and out of dangerous situations without anyone noticing. When you attempt a roguish feat to sneak or hide, you can mark 2-exhaustion to shift a miss to a 7-9.`,
  },
  {
    id: 'slip_away',
    name: 'Slip Away',
    description: `When you take advantage of an opening to escape from a dangerous situation, roll with Finesse. On a hit, you get away. On a 10+, choose 1. On a 7-9, choose 2. On a miss, you escape, but it costs you—mark injury or exhaustion, GM's choice—and you leave ample evidence behind for your foes to track and follow you.
      You suffer injury or exhaustion (GM's choice) during your escape
      You end up in another dangerous situation
      You leave something important behind
    `,
  },
  {
    id: 'poisons_and_antidotes',
    name: 'Poisons and Antidotes',
    description: `You have expertise in the poisons and antidotes of the Woodland. When you brew a poison, mark depletion and say what effect you want it to have: sleep, weakness, inebriation, or death. Any poison you make requires ingestion or injection; you can use the poison on your weapon or put it in your target's food or drink. When you study a poison or its effects to make an antidote, the GM will tell you what special ingredient you'll need. Get the ingredient and mark depletion to brew the antidote.`,
  },
  {
    id: 'forager',
    name: 'Forager',
    description: `When you travel or pass into a forest, before making any travel move, you can clear your choice of:
      Up to 3-depletion
      Up to 2-exhaustion
      Up to 2-injury
    `,
  },
  {
    id: 'threatening_visage',
    name: 'Threatening Visage',
    description: `When you persuade an NPC with open threats or naked steel, roll with Might instead of Charm.`,
  },
  {
    id: 'dirty_fighter',
    name: 'Dirty Fighter',
    description: `Take two of the following weapon skills: Trick Shot, Confuse Senses, Improvise Weapon, Disarm, Vicious Strike. None of the skills you take with this move count against your maximum for advancement.`,
  },

  {
    id: 'always_armed',
    name: 'Always Armed',
    description: `Take the weapon skill Improvise a Weapon (it does not count against your limit). When you deal harm with an improvised weapon, deal +1 harm.`,
  },
  {
    id: 'knowing_a_lords_will',
    name: `Knowing a Lord's Will`,
    description: `When you figure out a denizen of status, authority, or power, roll with
    Might instead of Charm. When you trick a denizen of status, authority, or
    power by playing subordinate, roll with Might instead of Cunning.`,
  },
  {
    id: 'well_mannered',
    name: 'Well-Mannered',
    description: `When you enter a social environment dependent on manners and etiquette, roll with Cunning. On a 10+, hold 3. On a 7-9, hold 2. Lose all hold when you leave or when social rules fall apart. Spend hold 1-for-1 to:
      Cover up a social faux pas on behalf of yourself or an ally; clear 1-exhaustion
      Call out someone else's social faux pas; inflict 1-morale harm on them
      Charm someone; take +1 ongoing to speak to them while you have hold
      Demonstrate your value; mark prestige with a powerful denizen's faction
    On a miss, the rules of etiquette here are far different from what you expected; mark exhaustion as you commit a gravely impolite error.`,
  },
  {
    id: 'fealty',
    name: 'Fealty',
    description: `When you commit yourself to the cause of someone you deem worthy, swear an oath to them stating what task you will complete on their behalf. Mark exhaustion to reroll a move made in pursuit of that task. You cannot commit yourself to another cause until you accomplish the first, or break your oath. If you break your oath, fill your exhaustion track and mark 4-notoriety with the faction whose trust you betrayed. If you fulfill your oath, mark 4-prestige with the faction whose trust you kept.`,
  },
  {
    id: 'the_rules_of_war',
    name: 'The Rules of War',
    description: `When you call upon a reasonable foe to uphold a rule of war, roll with Might. On a hit, they feel obliged; choose one below they must follow. On a 7-9, they choose one that you must follow; disobey, and the obligation ends. On a miss, they feel no obligation to your ideas of war; prepare for a brutal lesson in the rules they adhere to.
      Show mercy to surrendering foes and prisoners
      Refrain from underhanded tactics in a fight
      Face each other without aid, back-up, or assistance
      Keep the violence away from the unarmed or innocent
      Fight to surrender or subdual, without retreat
    `,
  },
  {
    id: 'always_watching',
    name: 'Always Watching',
    description: `Take +1 Cunning (max +3).`,
  },

  {
    id: 'arsonist',
    name: 'Arsonist',
    description: `When you wreck something with flagrantly dangerous means (explosives, uncontrolled flame, etc.), roll with Luck instead of Might.`,
  },
  {
    id: 'create_to_destroy',
    name: 'Create to Destroy',
    description: `When you use available materials to rig up a dangerous device, roll with Finesse. On a hit, you cobble together something that will do what you want, one time. On a 10+, choose one. On a 7-9, choose two. The device is:
      More dangerous than intended
      Larger or more unwieldy than intended
      More temperamental and fragile than intended
    On a miss, you need some vital component to finish it; the GM will tell you what.`,
  },
  {
    id: 'its_a_distraction!',
    name: `It's a Distraction!`,
    description: `You gain the roguish feat Blindside (it does not count against your limit). When you attempt a roguish feat to blindside someone while they are distracted by environmental dangers (a raging fire, an oncoming flood, etc.), roll with Luck instead of Cunning.`,
  },
  {
    id: 'daredevil',
    name: 'Daredevil',
    description: `You're at your luckiest when you go into danger without hesitation. When you dive into a dangerous situation without forethought or planning, treat yourself as having “Luck Armor,” with 1 box of wear (remember, armor is only “destroyed” when you would mark another box of wear, and all its boxes are full). The “Luck Armor” automatically goes away once the danger has passed, and the next time you would have “Luck Armor,” you gain it as if it was brand new with clear boxes.`,
  },
  {
    id: 'danger_mask',
    name: 'Danger Mask',
    description: `You have a mask or outfit you wear when you go about your most destructive work—more of a calling card, an identifier of “the real you,” than a disguise. Treat it as a piece of equipment with two boxes of wear. While you have your mask on, any notoriety you gain is doubled, any prestige you gain is halved, and take +1 to trust fate and all Scoundrel playbook moves. If your mask is ever taken from you, mark exhaustion. If your mask is ever destroyed, mark 4-exhaustion. If your mask is destroyed, you can make a new mask when time passes.`,
  },
  {
    id: 'better_lucky_than_good',
    name: 'Better Lucky than Good',
    description: `When you use a weapon move (basic or skilled), mark exhaustion to roll with Luck instead of the listed stat.`,
  },

  {
    id: 'breaking_and_entering',
    name: 'Breaking and Entering',
    description: `When you attempt roguish feats to get into or out of a place you've previously been, you can mark exhaustion to make the move as if you had rolled a 10+, instead of rolling.`,
  },
  {
    id: 'disappear_into_the_dark',
    name: 'Disappear Into the Dark',
    description: `When you slip into shadows while unnoticed, mark exhaustion and hold 1. As long as you remain quiet, move slowly, and hold 1 for this move, you will remain hidden. If you inadvertently reveal yourself, lose your hold. Spend your hold to reveal yourself from a darkened place, suddenly and without warning. If you attack someone immediately after spending the hold, take +3 on the roll.`,
  },
  {
    id: 'rope_a_dope',
    name: 'Rope-a-Dope',
    description: `When you evade and dodge your enemy so as to tire them out, roll with Finesse. On a hit, you can mark exhaustion to make them mark 2-exhaustion. On a 10+, you can mark exhaustion to make them mark 3-exhaustion. On a miss, they catch you in the middle of a dodge—you're at their mercy.`,
  },
  {
    id: 'small_hands',
    name: 'Small Hands',
    description: `When you grapple with an enemy larger than you, roll with Finesse instead of Might. On a miss, they overpower you—you're at their mercy.`,
  },
  {
    id: 'master_thief',
    name: 'Master Thief',
    description: `Take +1 Finesse (max +3).`,
  },
  {
    id: 'nose_for_gold',
    name: 'Nose for Gold',
    description: `When you figure someone out, you can always ask (even on a miss): what is the most valuable thing they are carrying? When you read a tense situation, you can always ask (even on a miss): what is the most valuable thing here?`,
  },

  {
    id: 'toolbox',
    name: 'Toolbox',
    description: `You have a kit of tools and supplies with which you work on long-term projects.
      Choose two features: [assorted scrap wood, assorted gears and springs, esoteric hand tools, manuals, assorted medicines, portable alchemy kit, sewing kit, cookware, minor explosives].
      Choose one drawback: [heavy (counts as 2 Load instead of 1), bulky & obvious, stolen, fragile]. When you open up your toolkit and dedicate yourself to making a thing or to getting to the bottom of something, decide what and tell the GM. The GM will give you between 1 to 4 conditions you must fulfill to accomplish your goal, including time taken, materials needed, help needed, facilities/tools needed, or the limits on the project. When you accomplish the conditions, you accomplish the goal.
    `,
  },
  {
    id: 'repair',
    name: 'Repair',
    description: `When you repair destroyed personal equipment with your toolbox, the GM will set one condition as per the Toolbox move. Fulfill it, and clear all wear for that equipment. When you repair damaged personal equipment with your toolkit, you do it as long as you spend depletion or Value, 1 for 1, for each box of wear you clear.`,
  },
  {
    id: 'big_pockets',
    name: 'Big Pockets',
    description: `Take two extra boxes of depletion.`,
  },
  {
    id: 'jury_rig',
    name: 'Jury Rig',
    description: `When you create a makeshift device on the fly, roll with Cunning. On a hit, you create a device that works once, then breaks. On a 10+, choose one. On a miss, the device works, but it has an unintended side effect that the GM will reveal when you use it.
      It works exceptionally well
      You get an additional use out of it
    `,
  },
  {
    id: 'nimble_mind',
    name: 'Nimble Mind',
    description: `When you attempt roguish feats involving mechanisms or locks, mark depletion to roll with Cunning instead of Finesse.`,
  },
  {
    id: 'dismantle',
    name: 'Dismantle',
    description: `When you dismantle a broken or disabled piece of equipment or machinery, clear 2-depletion.`,
  },

  {
    id: 'instigator',
    name: 'Instigator',
    description: `When you trick an NPC into fighting another NPC, you can remove one option from the 7-9 list—they cannot choose that option instead of doing what you want.`,
  },
  {
    id: 'pleasant_facade',
    name: 'Pleasant Facade',
    description: `When you suck up to or otherwise butter up an unsuspecting NPC, roll with Charm. On a 10+, hold 3. On a 7-9, hold 2. Spend your hold 1 for 1 to deflect their suspicion or aggression away from you onto someone or something else. On a miss, your attempts at flattery are suspicious—they're going to keep their eye on you.`,
  },
  {
    id: 'desperate_smile',
    name: 'Desperate Smile',
    description: `When you trust fate to see you through by begging, pleading, or abasing yourself, roll with Charm instead of Luck.`,
  },
  {
    id: 'charm_offensive',
    name: 'Charm Offensive',
    description: `When you play upon an enemy's insecurities, concerns, or fears to distract them with words during a fight, roll with Cunning. On a hit, you create an opening for yourself—make any available weapon move against them at +1, or strike quickly and deal injury to them. On a 7-9, you also tick them off; they aren't listening to you anymore, no matter what you do, until the situation drastically changes. On a miss, you infuriate them—they come at you, hard, and you're not prepared.`,
  },
  {
    id: `lets_play`,
    name: `Let's Play`,
    description: `When you play a game of skill and wit to loosen another's tongue, roll with Charm. On a hit, they let slip something useful or valuable. On a 7-9, you have to lose the game to get them there; mark depletion. On a miss, they're better than you ever thought; either mark depletion and cut your losses, or mark 3-depletion and they'll start talking.`,
  },
  {
    id: 'pocket_sand',
    name: 'Pocket Sand',
    description: `Take the weapon skill Confuse Senses (it does not count against your limit). When you throw something to confuse an opponent's senses at close or intimate range, roll with Cunning instead of Finesse.`,
  },
]
