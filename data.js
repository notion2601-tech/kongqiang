const dossierData = {
    wanziqiang: {
        name: "万梓强", actor: "朱一龙", category: "悍匪阵营",
        photo: "images/wanziqiang.jpg",
        meta: { born: "1961年5月17日", origin: "内地赴港，底层出身", hab: "歪鼻梁、拆香烟过滤嘴、吃菠萝油", fate: "1998年12月被执行死刑" },
        quotes: [
            { text: "我只是绑架了你儿子，但你绑架的是全香港人。", context: "对陈辉延的谈判反击" },
            { text: "正是因为香港有你这样的人，才有我这样的人。", context: "对陈辉延的阶级对峙" },
            { text: "我在抢钱，你也在抢钱；我绑架抢劫，却从未伤害过平民百姓，而你的集团却掠夺他们的血汗，对他们敲骨吸髓。", context: "对陈辉延的当面控诉" },
            { text: "要么出人头地，要么人头落地。", context: "初入香港时的底层誓言" },
            { text: "我想改命。", context: "对自身宿命的执念" },
            { text: "我永远不会输的。", context: "极度狂妄的自信" },
            { text: "《天龙八部》里最喜欢谁？", context: "在车上问亓宏刚" },
            { text: "段誉。", context: "对亓宏刚的回答（看重凌波微步能保命）" }
        ],
        trajectory: [
            "1961年：出生于内地底层家庭，幼年因偷窃被打断鼻子无钱医治，留下歪鼻梁。",
            "80年代：偷渡赴港，从码头苦力做起，后转入赌场成为叠码仔。",
            "1991年：参与启德机场解款车劫案，展现极强武装火力。",
            "1996年：策划并实施深水湾绑架案，逼迫首富陈辉延喝盐粥。",
            "1997年：因利益分配与荣哥决裂，遭遇黑白两道追杀。",
            "1998年1月：因非法购买800公斤炸药在内地沿海被亓宏刚抓获。",
            "1998年12月：被依法执行死刑。"
        ],
        relations: "妻子骆嘉苑；宿敌亓宏刚（互为镜像）；绑架目标陈辉延父子；利益冲突者荣哥。",
        dossierText: "他的宿命是一场悲剧。他把时代的缝隙当成了犯罪的阶梯，用暴力和空枪赌天意，却不知命运的馈赠早就在暗中标好了价码。"
    },
    qihonggang: {
        name: "亓宏刚", actor: "檀健次", category: "警方专案组",
        photo: "images/qihonggang.jpg",
        meta: { born: "1963年10月18日", origin: "海东省公安厅刑警，侦察兵出身", hab: "翻旧档案、胃疼捂肚、以疯制疯", fate: "成功将万梓强绳之以法" },
        quotes: [
            { text: "乔峰，因为我喜欢好人。", context: "在车上回答万梓强关于《天龙八部》的提问" },
            { text: "等你输的那天，我一定会吃。", context: "茶餐厅回应万梓强推过来的菠萝包" },
            { text: "你是有多自卑？", context: "观景台戳破万梓强的伪装" },
            { text: "不该你来的地方不要来。", context: "略带同情的告诫" },
            { text: "老板，赚你这点钱好辛苦的喔。", context: "广西口音，伪装货车司机时的出圈台词" }
        ],
        trajectory: [
            "1980年代：从侦察兵转业进入公安系统，以吃苦踏实著称。",
            "90年代初：带队在内地抓获万梓强并转交香港警方，但万梓强通过舆论脱罪。",
            "1995年：截获万梓强团伙走私的炸药原料，首次进入专案组视野。",
            "1997年：接手万梓强专案组，提出“以疯制疯”的侦破方案。",
            "1998年1月：在内地沿海蟹道成功抓获万梓强。"
        ],
        relations: "搭档关苏辰；终身宿敌万梓强（互为镜像）。",
        dossierText: "他不靠天意，靠足迹和档案。万梓强赌老天不收他，亓宏刚就用人间法网来收。"
    },
    luojiayuan: {
        name: "骆嘉苑", actor: "卫诗雅", category: "悍匪阵营",
        photo: "images/luojiayuan.jpg",
        meta: { born: "香港本地，具体不详", origin: "空姐，本地市民", hab: "对风险极度敏感", fate: "在万梓强落网前后脱身" },
        quotes: [
            { text: "你绑架的是全香港人。", context: "劝阻万梓强收手时的绝望" },
            { text: "收手吧，你斗不过他们的。", context: "面对陈辉延庞大势力的担忧" }
        ],
        trajectory: ["80年代末：作为空姐与赴港的万梓强相识。", "1991年：利用安保公司内应的身份，为劫案提供关键情报。", "1996年：深知陈辉延势力的庞大，劝万梓强收手未果。", "1997年：在荣哥死后，选择离开。"],
        relations: "丈夫万梓强。",
        dossierText: "她是万梓强命运里唯一的刹车片，却最终没能阻止列车脱轨。"
    },
    chenhuiyan: {
        name: "陈辉延", actor: "梁家辉", category: "豪富与黑帮",
        photo: "images/chenhuiyan.jpg",
        meta: { born: "香港老牌资本世家", origin: "本港首富、地产大亨", hab: "戴平价表，私藏顶级名表", fate: "在绑架中脱险" },
        quotes: [{ text: "万物皆有价。", context: "面对巨额勒索时的冷酷逻辑" }, { text: "我和你，是不同世界的人。", context: "嘲讽万梓强的阶级跨越妄想" }],
        trajectory: ["90年代初：在香港地产界叱咤风云。", "1996年：其子被绑架，与万梓强展开惊心动魄的盐粥对峙。", "1996年底：默许其手下/公司高层，授意黑警荣哥对万梓强进行残酷报复。"],
        relations: "儿子陈永庭；与万梓强有直接的阶级对抗。",
        dossierText: "他代表了资本主义的铁律：万物皆有价码。面对枪口，他在谈判桌上赢回了里子和面子。"
    },
    guansuchen: {
        name: "关苏辰", actor: "李施嬅", category: "警方专案组",
        photo: "images/guansuchen.jpg",
        meta: { born: "香港本地警队精英", origin: "香港警务处重案组", hab: "严谨重程序", fate: "协同完成跨境抓捕，收尾案件" },
        quotes: [],
        trajectory: ["1995年：处理多宗重案。", "1997年：与内地专案组对接。", "1998年：提供关键技术支持，案结后为亓宏刚送上字条与菠萝油。"],
        relations: "搭档亓宏刚；追捕对象万梓强。",
        dossierText: "代表了法治社会的基石。她是这场双人博弈最终的见证人与收尾者。"
    },
    rongge: {
        name: "荣哥", actor: "袁富华", category: "豪富与黑帮",
        photo: "images/rongge.jpg",
        meta: { born: "本港灰色地带", origin: "黑警 / O记督察", hab: "黑白通吃、精于算计", fate: "被逼玩俄罗斯轮盘赌自毙" },
        quotes: [{ text: "在我的地盘，是龙你得盘着。", context: "对万梓强的威胁" }],
        trajectory: ["80年代末：身为O记督察，暗中勾结黑社会。", "1991年：为万梓强的2亿赃款提供洗钱渠道。", "1996年：受陈辉延手下/高层授意，对万梓强施以酷刑。", "1997年：在宴会上将万梓强折磨至面目全非。最终局势反转，被逼玩俄罗斯轮盘赌，第一枪便将自己打死。"],
        relations: "合作人李慧如；敌对万梓强。",
        dossierText: "旧时代黑警的残影。兵贼同体的身份让他黑白通吃，但也最终死在了自己制定的残酷游戏下。"
    },
    fuguoshu: {
        name: "福果叔", actor: "李修贤", category: "豪富与黑帮",
        photo: "images/fuguoshu.jpg",
        meta: { born: "深水埗", origin: "传统社团大佬", hab: "讲辈分规矩", fate: "势力被时代碾压" },
        quotes: [{ text: "火麒麟，周身引。", context: "对万梓强宿命的判词" }],
        trajectory: ["80年代：在深水埗德高望重。", "1997年：在祠堂目送万梓强跨过门槛离去，叹出其悲剧宿命。"],
        relations: "敌对万梓强。",
        dossierText: "他看透了万梓强的悲剧宿命，却无法阻止自己被拖入深渊。"
    },
    chenyongting: {
        name: "陈永庭", actor: "李治廷", category: "豪富与黑帮",
        photo: "images/chenyongting.jpg",
        meta: { born: "豪富之家", origin: "陈辉延长子", hab: "缺乏防备心", fate: "安全获救" },
        quotes: [],
        trajectory: ["1996年：被武装劫持，成为谈判筹码。"],
        relations: "父亲陈辉延；绑架者万梓强。",
        dossierText: "在炸药面前，他与20块钱小费毫无区别。"
    },
    lihuiru: {
        name: "李慧如（如姐）", actor: "惠英红", category: "豪富与黑帮",
        photo: "images/lihuiru.jpg",
        meta: { born: "香港本地", origin: "洗钱操盘手", hab: "从容不迫", fate: "全身而退" },
        quotes: [{ text: "钱一旦转起来，就洗白了，人也一样。", context: "处理赃款时的名言" }],
        trajectory: ["1990年-1996年：建立庞大洗钱网络。", "1991年：在几小时内处理干净万梓强劫来的2亿现金。", "1997年：在荣哥死后全身而退，带着骆嘉苑离开。"],
        relations: "上家荣哥；服务对象万梓强。",
        dossierText: "把黑钱洗成白钱，也把狂妄洗成催命符。"
    },
    ashu: {
        name: "阿书", actor: "王戈", category: "悍匪阵营",
        photo: "images/ashu.jpg",
        meta: { born: "内地赴港", origin: "底层苦力", hab: "讲义气", fate: "为掩护万梓强牺牲" },
        quotes: [{ text: "强哥，不要管我们，快跑！", context: "被荣哥折磨时的嘶吼" }],
        trajectory: ["80年代末：与万梓强一同偷渡。", "1996年：负责火力掩护。", "1997年：被荣哥绑架折磨致死。"],
        relations: "兄弟万梓强。",
        dossierText: "他死于忠诚，也死于无法收手的贪婪。"
    },
    huaqiao: {
        name: "花桥", actor: "刘登宇", category: "悍匪阵营",
        photo: "images/huaqiao.jpg",
        meta: { born: "香港本地", origin: "街头混混", hab: "战斗力极强", fate: "被折磨致死" },
        quotes: [],
        trajectory: ["1991年：加入团伙。", "1997年：在码头被俘惨死。"],
        relations: "老大万梓强。",
        dossierText: "齿轮卡住，就被毫不留情碾碎。"
    },
    yagou: {
        name: "哑狗", actor: "赵润南", category: "悍匪阵营",
        photo: "images/yagou.jpg",
        meta: { born: "内地", origin: "亡命徒", hab: "沉默寡言", fate: "交火身亡" },
        quotes: [],
        trajectory: ["1993年：跟随万梓强。", "1997年：在宴会上冒死送装备，掩护万梓强反击。"],
        relations: "老大万梓强。",
        dossierText: "至死没有多话，用命证明了时代的残忍。"
    },
    heikun: {
        name: "黑坤", actor: "沈震轩", category: "悍匪阵营",
        photo: "images/heikun.jpg",
        meta: { born: "香港", origin: "黑帮成员", hab: "心狠手辣", fate: "入狱服刑" },
        quotes: [],
        trajectory: ["90年代：加入万梓强团伙。"],
        relations: "转投万梓强。",
        dossierText: "在新旧势力夹缝中求生的投机者。"
    },
    shalishu: {
        name: "沙梨叔", actor: "林雪", category: "豪富与黑帮",
        photo: "images/shalishu.jpg",
        meta: { born: "香港", origin: "地头蛇", hab: "贪生怕死", fate: "被警方策反" },
        quotes: [],
        trajectory: ["90年代：向警方供出行踪。"],
        relations: "与警方合作。",
        dossierText: "压死骆驼的最后一根稻草。"
    },
    dingfeng: {
        name: "丁烽", actor: "黄觉", category: "警方专案组",
        photo: "images/dingfeng.jpg",
        meta: { born: "内地公安", origin: "老刑警", hab: "保护后辈", fate: "布控中负伤" },
        quotes: [],
        trajectory: ["1997年：替亓宏刚挡下子弹。"],
        relations: "战友亓宏刚。",
        dossierText: "用血肉践行誓言。"
    },
    jiangtian: {
        name: "姜天", actor: "俞灏明", category: "警方专案组",
        photo: "images/jiangtian.jpg",
        meta: { born: "内地公安", origin: "特警新锐", hab: "身手矫健", fate: "成功抓捕" },
        quotes: [],
        trajectory: ["1998年：制服万梓强。"],
        relations: "队长亓宏刚。",
        dossierText: "新时代警界力量。"
    },
    zhaohuanxin: {
        name: "赵欢欣", actor: "叶童", category: "警方专案组",
        photo: "images/zhaohuanxin.jpg",
        meta: { born: "香港海关", origin: "稽查员", hab: "观察入微", fate: "发现走私线索" },
        quotes: [],
        trajectory: ["1995年：截获炸药原料。"],
        relations: "情报提供者。",
        dossierText: "兵与贼的边境博弈。"
    },
    changweijie: {
        name: "常为戒", actor: "倪大红", category: "警方专案组",
        photo: "images/changweijie.jpg",
        meta: { born: "老警察", origin: "档案管理员", hab: "记忆力惊人", fate: "病逝" },
        quotes: [],
        trajectory: ["1997年：移交旧卷宗。"],
        relations: "引导者亓宏刚。",
        dossierText: "线索藏在泛黄的案卷里。"
    },
    ouyangjiahua: {
        name: "欧阳家华", actor: "张兆辉", category: "警方专案组",
        photo: "images/ouyangjiahua.jpg",
        meta: { born: "香港警队", origin: "高层", hab: "利益至上", fate: "被调查" },
        quotes: [],
        trajectory: ["1996年：充当保护伞。", "1998年：落马。"],
        relations: "保护伞陈辉延。",
        dossierText: "体制内蛀虫，比悍匪更可怕。"
    }
};