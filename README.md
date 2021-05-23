# GenshinImpactDMGvisualizer_WEB

![](https://yunlu18.net/wp-content/uploads/2021/05/captureganyu0.9-2000x766.png)

Genshin Damage Calculator & Visualizer
====================================================

**[https://genshin.yunlu18.net/](https://genshin.yunlu18.net/){:target="_blank" rel="noopener"}**
================================================================

About this project
------------------

Genshin Damage Calculator & Visualizer is a tool aimed to visualize the damage number and damage buff of characters in Genshin Impact. This project is based on flutter web technology.

Why this project?
-----------------

Although there are several great damage calculators for Genshin Impact online , it is still difficult to use them to build up a Character in Genshin Impact .And many people still have no idea how the numbers build up to Character’s damage. So we decided to build our own Damage Calculator and visualizer. Our project is specified on characters and you can select to see all the buffs build up .we use slider for a better input experience and animated bar for direct damage comparison.

What is Genshin Damage Calculator & Visualizer for and not for
--------------------------------------------------------------

#### For

*   Compare between your artifacts and get the direct Damage comparison
*   Have better understanding of how damage build up in Genshin impact
*   Maximize your damage in certain situation(enemy , buffs, support)
*   Help decision on leveling up character level ,talent level ,weapon level
*   Help decision on artifact set and weapon selection
*   Help decision on getting character constellations
*   Get a glance of your kit within a page

#### Not For (currently)

*   Calculation on a period of time(DPS calculation)
*   Calculation on event buff or extreme situation.
*   Expect a super precise result of your damage output
*   Use screenshot to brag in other platforms or forums
*   Calculation of multiple characters

Disclaimer
----------

This is a project of individuals and free for redistribution with a link to this page. Please contact us if there is any problem.

How to use Genshin Damage Calculator & Visualizer
-------------------------------------------------

1.  Input Character stats on Character Page
2.  Input Weapon stats on Weapon&Artifact Page
3.  Input Artifact stats on Weapon&Artifact Page
4.  Click to enable/disable Options(Character, artifact set, and other buff ) on Stats&Options Page
5.  Input and click to enable/disable Manual buff on Stats&Options Page
6.  Select your enemy type in EnemyResistance Panel on Stats&Options Page
7.  Select your enemy lv in EnemyDefence Panel on Stats&Options Page
8.  Click on the down arrow in Damage Page for reaction damage
9.  If some of your stats bar or damage bar exceeds the page width, scroll the see the result or change the scale on the bottom right of the page.

About Genshin Damage Calculator & Visualizer ver Ganyu 0.9
----------------------------------------------------------

As this is a tool to cater to every Character , it is hard to develop all characters at once. So we decided to develop widely use Ganyu for the first release of this project.

#### Points

*   “Frostflake arrow All” is a combination of the Arrow and Bloom damage to give a direct result of the Ganyu’s charged shoot
*   When selecting amo’s bow, the Frostflake bloom damage delay(0.2s) will be in calculation.
*   Prototype Crescent buff won’t apply on your first shot on weakness. The result will be correct on your second shot.

Q&A
---

##### Q:What is the Running requirement of this app?

*   Although this is flutter and we are working on the solution for mobile users, this version “Genshin Damage Calculator & Visualizer ver Ganyu 0.9” is only recommended on a pc with browser and display horizontal resolution for at least 1920 pixels( if not, scale the page for better experience)

##### Q:My stat is different from the app results.

*   Your artifacts actually have more precision than they appear to be , exp (On the page: 9.3% atk , Actual: 9.34542% atk ).But it won’t affect your decisions.
*   Some in game stats won’t show in your stat page.

##### Q:My damage output is different from the app results.

*   There are several reasons for a different result.
    *   Genshin Impact damage raw damage data precision is high and we only do the calculation on a low precision raw data.
    *   Some environmental adjust ,such as the damage loss when you shoot far away from the object, which is not taken in to calculation in our project.
    *   Some other buffs
    *   Unknown bugs: you can report to us (before reporting, make sure to check all of the Q&As)

##### Q:What does panel means？

*   Each panel is a individual multiplier of your final damage. Make sure to distribute your buffs in more panels for a great damage.

##### Q:The damage buff percentage is different from the character detail in game.

*   Not all the buffs are shown in the character detail view.

##### Q:What is the constellation slider doing here?

*   Constellation slider of character page is only for showcase .

##### Q:Why I can input super high stats in artifacts?

*   Our app is not foul proof, just input your stats and get your result. You can input stats of artifacts not existed but why.

##### Q:What is Superconduct : (100%) means?

*   We set the base superconduct damage output for 100% for better understanding of some reactions damage .

Feedback, Suggestion and Bug report
-----------------------------------

**All feedback ,suggestion or bug report is welcomed.** .

Before you do bug report. Please check the wiki online for damage calculation. (We didn’t know that the cryo damage plus won’t affect superconduct damage before making the app either)
