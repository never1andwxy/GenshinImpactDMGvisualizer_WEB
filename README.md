# GenshinImpactDMGvisualizer_WEB

![](https://yunlu18.net/wp-content/uploads/2021/05/captureganyu0.9-2000x766.png)

Genshin Damage Calculator & Visualizer
====================================================

**[https://genshin.yunlu18.net/](https://genshin.yunlu18.net/)**
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

Buy us a cup of coffee or 150primos
-----------------------------------
Thanks for your support.

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=67PP6KHPRB35E&lc=US&item_name=A%20cup%20of%20coffee&amount=2%2e50&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted)
====================================================

![](https://yunlu18.net/wp-content/uploads/2021/06/QQ截图20210606164534-2000x750.png)

原神伤害可视化计算器
==========

关于这个项目
------

原神伤害可视化计算器是一款旨在将原神游戏中产生的伤害数值和伤害buff进行可视化的工具。本项目基于flutter网页技术开发。

**[https://genshin.yunlu18.net/](https://genshin.yunlu18.net/)**
================================================================

为何要做这个计算器？
----------

尽管目前网络上有不少优秀的原神伤害计算器，但使用它们对构建和理解起对一个角色的伤害仍并不是非常方便。而且有许多人仍不清楚角色的伤害是如何构成的。于是我们决意要开发我们自己的伤害计算器和可视化工具。每个角色都有独特的对应的伤害构建页面，并且您能够看到所有buff的构建。为使数据输入体验更佳，我们采用了滑块来录入数据，且为了更加直观的伤害比较使用了动态的柱状图。

原神伤害可视化计算器的适用范围
---------------

#### 适用于

*   对比各种圣遗物并获得直观的伤害对比
*   对于原神的伤害构成和伤害计算过程有更深的了解
*   最大化在一些特殊情况下的伤害(敌人 , buff, 辅助)
*   了解角色等级、天赋等级和武器等级对于最终伤害的影响（帮助你决策是否要升级）
*   了解圣遗物套装和武器对于最终伤害的影响（帮助选择圣遗物和武器）
*   了解人物命之座对于最终伤害的影响（帮助决定是否要提升命之座）
*   在一个页面展示你的人物面板和伤害

#### 目前并不适用于

*   计算DPS
*   计算活动buff或者一些极端状态下的伤害
*   期待一个超级精确的伤害结果（面板和伤害因为游戏特性会有1到100的误差）
*   计算队伍的总体伤害

免责声明
----

这个项目是爱好原神的玩家们的个人项目，也欢迎在带有本页面链接的前提下分享，再开发这个项目。如果有什么问题，请联系我们。

如何使用原神伤害可视化计算器
--------------

1.  在角色页面输入角色属性
2.  在武器/圣遗物界面输入武器属性
3.  在武器/圣遗物界面输入圣遗物属性
4.  **在面板和设置界面中去点击激活/无效化选项（角色，圣遗物套装，其他buff）（√代表已经激活）（很多人忘了这一步）**
5.  在面板和设置界面去输入其他手动buff
6.  在面板和设置界面去选择敌人类型
7.  在面板和设置界面去选择敌人等级和减防buff
8.  在伤害界面点击打开下拉菜单可以看到对应反应伤害
9.  如果伤害条/属性条超过了页面宽度，拖动右下角伤害标尺/状态标尺
10.  左上角系统菜单可以更换语言

原神伤害可视化计算器 ver 甘雨 0.9
---------------------

作为一款要为所有角色提供独特的伤害计算界面，在一次开发任务就发布所有角色是比较困难的。于是我们决定首次的发布进行受欢迎的甘雨角色的开发。

#### 要点

*   霜华矢总伤害 会自动计算霜华矢命中和霜华矢绽放的总伤害 给你一个总体的伤害预期。
*   选择阿莫斯之弓的时候, 霜华矢绽放的延迟(0.2s) 会自动加入计算。
*   选择试作澹月的时候，第一次个命中弱点本身的伤害并不会计算buff.。计算器的结果是出发后第二次命中的伤害。

Q&A
---

##### Q:本软件的运行环境是什么？

*   尽管这个是flutter我们也尽力于把这个软件适配于每个平台, 这个版本 “原神伤害可视化计算器 ver 甘雨 0.9” 只推荐用pc浏览器打开。推荐显示器横向宽度超过1920(如果页面没有显示完所有内容，建议放大缩小页面来获得更好的使用体验)

##### Q:我的面板数值与计算器数值有差异是为什么？

*   人物的圣遗物内部的精度其实比显示出来的多 , (圣遗物面板: 9.3% 攻击力 , 实际内部计算: 9.34542% 攻击力) 会导致最终会有个位数到十位数的差异。不过这些差异不会影响你的最终装备决策。
*   一些buff并不会显示在你的人物详细面板。

##### Q:我的最终伤害与计算器数值有差异是为什么？

*   可能有以下原因：
    *   原神内部的数字精度很高，而我们只拿到了比较低精度的基础数值和公式.
    *   一些环境伤害和增益并不会在计算中计算.
    *   一些你没有想到的但是实际已经触发的增益
    *   可能是BUG，请报告给我们 (但是请报告前看完所有 Q&A)

##### Q:面板是什么意思？

*   每个面板是对于你最终伤害的一个独立计算乘区. 如果你能把增益有效的平摊到各个面板内就能获得更高伤害.

##### Q:为什么属性伤害加成和人物详细面板里面不一样？

*   在人物详细面板里面不会显示所有属性伤害加成

##### Q:角色页的命之座滑块有什么用？

*   仅用作为展示目的。请在面板和设置界面选择对应命之座的加成设置。

##### Q:为什么我可以输入不存在的圣遗物属性?

*   这个软件不是原神，所以也没加入可行性判断, 输入你的属性得到你的伤害就行了。

##### Q:超导: (100%) 是什么意思?

*   我们把没有任何buff的超导伤害设定为 100% 来让大家更加直观的了解剧变反应伤害 .

反馈, 建议 和 报告BUG
--------------

**欢迎各种反馈，建议和BUG报告.

在报告bug之前. 推荐去相关网页了解一下原神伤害计算公式。 (我们在做app之前也不知道冰伤加成原来不影响超导伤害)

![](https://yunlu18.net/wp-content/uploads/2021/06/QQ图片20210606181840-1.jpg)
