# About game assets - 关于游戏资料

这份文件主要是讲述这些json文件的编写规则，在全部完成前可能不会提供英文版。

## charactersInfo.json

### 1. 变量介绍

id：int，角色id

hp：int，角色理智

atk：int，角色“攻击力”

tags：string[]，用以描述角色被动技能类型，通常为id-sp，若有贞操带则有chastity标签

weak、good、crit：class，角色攻击方式，其中：
tags：string[]，对任务类型的总述，方便一些被动技能对任务类型的判定
type：string，对任务类型的判定，其中common表示无判定，edge是以寸止为结束，edge+表示需要多次寸止且完成后任务不结束，question表示任务有附加奖励判定，condition表示任务完成有条件
answer：list，表示完成附加任务后的奖励
failed：list，表示无法完成的惩罚
这两者下的type与value与在spacial中的作用一致
metronome：int，表示对节拍器的调用，0表示不调用

special：class，表示特殊技能，其中tags与上同作用：
length：int，可能无作用？表示特殊技能长度，其中0为buff当场上完，1为该我方回合有加成，2为该我方、敌方回合加成，3为我方下一回合和前两个回合都有加成……
buff：list，表示加成，其中：
round：int，表示作用回合，"round": 0可以不写
type：string，表示加成对象
value：int，表示加成数值，在1000x（帮我打一下上划线）中，10000表示相乘而x为倍数，以buff[].value >= 10000判定

### 2. （我还没开始写）

lorem ipsum......

### 3. 注意事项

通常而言，tag不能作为判定。但是，目前，当需要自动检查任务前提条件时，请使用c-"item"-"value"，程序应检测"c-"字符。如需要3个以上mana瓶，请使用c-mana-3标签。

我正在考虑是否将任务类型判定的type改为string[]。


