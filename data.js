const restaurants = [
  {
    id: 1,
    name: "Ha黔！",
    cuisine: "贵州黔味酸汤粉",
    icon: "ramen_dining",
    rating: "",
    location: "左侧",
    phone: "192-0683-8084",
    tags: ["酸辣风味", "小锅现煮", "卤味小食齐全"],
    featured: false,
    menu: [
      {
        category: "小锅现煮米粉",
        items: [
          { name: "生汆鲜牛肉酸汤粉", description: "小锅现煮", price: "¥26" },
          { name: "灌汤猪手酸汤粉", description: "小锅现煮", price: "¥28" },
          { name: "酱烧牛蝎子酸汤粉", description: "小锅现煮", price: "¥28" },
          { name: "虎皮凤爪酸汤粉", description: "小锅现煮", price: "¥24" },
          { name: "虎皮鸭掌酸汤粉", description: "小锅现煮", price: "¥24" },
          { name: "手工肉丸酸汤粉", description: "小锅现煮", price: "¥18" },
          { name: "低温大刀猪排酸汤粉", description: "小锅现煮", price: "¥26" },
          { name: "金牌黑金叉烧酸汤粉", description: "小锅现煮", price: "¥28" },
          { name: "惹味肥肠酸汤粉", description: "小锅现煮", price: "¥28" }
        ]
      },
      {
        category: "卤味",
        items: [
          { name: "大刀卤肉", description: "", price: "¥12" },
          { name: "卤味鸡爪", description: "2个装", price: "¥9.9" },
          { name: "卤厚豆腐块", description: "", price: "¥5" },
          { name: "台湾香肠", description: "1根装", price: "¥5" },
          { name: "香卤豆腐干", description: "2片装", price: "¥4.8" },
          { name: "煎荷包蛋", description: "", price: "¥3" },
          { name: "卤大鸡腿", description: "1个装", price: "¥8" }
        ]
      },
      {
        category: "小食",
        items: [
          { name: "手椿无骨鸡爪", description: "", price: "¥28" },
          { name: "薄荷菠萝伴牛肉", description: "", price: "¥29" },
          { name: "薄荷小肠小脆薯", description: "", price: "¥15" },
          { name: "松露肉酱脆皮豆腐", description: "", price: "¥16" },
          { name: "大V洋芋角", description: "", price: "¥13" },
          { name: "拉丝脆皮年糕", description: "", price: "¥15" },
          { name: "锅巴土豆折耳根沙沙", description: "", price: "¥18" },
          { name: "自制古法泡菜", description: "", price: "¥6" },
          { name: "温泉蛋", description: "", price: "¥4" }
        ]
      },
      {
        category: "饮料",
        items: [
          { name: "自制酸角汁", description: "买一送一", price: "¥12" },
          { name: "自制香茅青芒汁", description: "", price: "¥12" },
          { name: "石斛花枸杞冷萃", description: "", price: "¥8" },
          { name: "玫瑰柠檬冷萃", description: "", price: "¥8" }
        ]
      },
      {
        category: "甜品",
        items: [
          { name: "玫瑰椰香布丁", description: "", price: "¥12" },
          { name: "茉莉玫瑰冰粉", description: "", price: "¥8" }
        ]
      },
      {
        category: "干拌",
        items: [
          { name: "葱油松露肉酱拌粉", description: "", price: "¥16" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "福州拌粉干",
    cuisine: "福州风味",
    icon: "ramen_dining",
    rating: "",
    location: "左侧",
    phone: "",
    tags: ["清淡口味", "捞化", "牛滑", "福州小吃"],
    featured: true,
    menu: [
      {
        category: "基础主食与小吃",
        items: [
          { name: "拌粉干", description: "经典福州拌粉干", price: "¥5" },
          { name: "拌油面", description: "经典拌油面", price: "¥5" },
          { name: "拌面", description: "基础拌面", price: "¥5" },
          { name: "拌捞化", description: "特色拌捞化", price: "¥5" },
          { name: "清汤粉干", description: "清淡汤底", price: "¥5" },
          { name: "清汤捞化", description: "清淡汤底", price: "¥5" },
          { name: "清汤油面", description: "清淡汤底", price: "¥5" },
          { name: "清汤面", description: "清淡汤底", price: "¥5" },
          { name: "扁肉", description: "皮薄馅嫩", price: "¥5" },
          { name: "拌空心菜", description: "清爽时蔬", price: "¥8" },
          { name: "拌春菜", description: "清爽时蔬", price: "¥8" },
          { name: "拌上海青", description: "清爽时蔬", price: "¥8" },
          { name: "拌波菜", description: "清爽时蔬", price: "时价" },
          { name: "拌豆尾", description: "特色豆制品", price: "时价" },
          { name: "肉丸子", description: "Q弹肉丸", price: "¥9" },
          { name: "咸瓜鱼", description: "特色咸鱼", price: "¥20" },
          { name: "煎蛋", description: "荷包蛋", price: "¥2" },
          { name: "米饭", description: "主食", price: "¥2" }
        ]
      },
      {
        category: "套餐粉、面",
        items: [
          { name: "猪肝", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "猪腰", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "猪肚", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥16" },
          { name: "猪脑", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "花肠", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "心管", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "大肠头", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥16" },
          { name: "鱿鱼", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥18" },
          { name: "海蛎", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "鸭胗", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "海蛏", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥16" },
          { name: "牛杂", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥18" },
          { name: "牛脚筋", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥21" },
          { name: "牛百叶", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥21" },
          { name: "罗汉肉", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥16" },
          { name: "大肠", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "小肠", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "花蛤", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥15" },
          { name: "鸭肠", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥12" },
          { name: "猪血", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥11" },
          { name: "猪肺", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥11" },
          { name: "腐竹", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥11" },
          { name: "木耳", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥11" },
          { name: "牛滑", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥16" },
          { name: "骨髓", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥18" },
          { name: "舌头", description: "可选: 泡粉干、捞化、油面、清汤面", price: "¥16" }
        ]
      },
      {
        category: "汤类",
        items: [
          { name: "猪肝汤", description: "鲜美猪肝", price: "¥10" },
          { name: "猪腰汤", description: "滋补猪腰", price: "¥10" },
          { name: "猪肚汤", description: "养胃猪肚", price: "¥11" },
          { name: "猪脑汤", description: "鲜嫩猪脑", price: "¥10" },
          { name: "花肠汤", description: "脆嫩花肠", price: "¥10" },
          { name: "心管汤", description: "爽口心管", price: "¥10" },
          { name: "大肠头汤", description: "浓郁大肠", price: "¥11" },
          { name: "鱿鱼汤", description: "海鲜风味", price: "¥13" },
          { name: "海蛎汤", description: "鲜甜海蛎", price: "¥10" },
          { name: "鸭胗汤", description: "脆爽鸭胗", price: "¥10" },
          { name: "海蛏汤", description: "鲜美海蛏", price: "¥11" },
          { name: "牛杂汤", description: "浓郁牛杂", price: "¥13" },
          { name: "牛脚筋汤", description: "胶原蛋白", price: "¥16" },
          { name: "牛百叶汤", description: "脆嫩百叶", price: "¥16" },
          { name: "罗汉肉汤", description: "特色罗汉肉", price: "¥11" },
          { name: "大肠汤", description: "经典大肠", price: "¥10" },
          { name: "小肠汤", description: "细腻小肠", price: "¥10" },
          { name: "花蛤汤", description: "鲜甜花蛤", price: "¥10" },
          { name: "鸭肠汤", description: "脆嫩鸭肠", price: "¥7" },
          { name: "猪血汤", description: "嫩滑猪血", price: "¥6" },
          { name: "猪肺汤", description: "清爽猪肺", price: "¥6" },
          { name: "腐竹汤", description: "豆制品", price: "¥6" },
          { name: "木耳汤", description: "清肺木耳", price: "¥6" },
          { name: "牛滑汤", description: "Q弹牛滑", price: "¥11" },
          { name: "骨髓汤", description: "滋补骨髓", price: "¥13" },
          { name: "舌头汤", description: "嫩滑舌片", price: "¥11" }
        ]
      },
      {
        category: "拌类",
        items: [
          { name: "拌猪肝", description: "香拌猪肝", price: "¥10" },
          { name: "拌猪腰", description: "香拌猪腰", price: "¥10" },
          { name: "拌猪肚", description: "香拌猪肚", price: "¥11" },
          { name: "拌猪脑", description: "香拌猪脑", price: "¥10" },
          { name: "拌花肠", description: "香拌花肠", price: "¥10" },
          { name: "拌心管", description: "香拌心管", price: "¥10" },
          { name: "拌大肠头", description: "香拌大肠", price: "¥11" },
          { name: "拌鱿鱼", description: "香拌鱿鱼", price: "¥13" },
          { name: "拌海蛎", description: "香拌海蛎", price: "¥10" },
          { name: "拌鸭胗", description: "香拌鸭胗", price: "¥10" },
          { name: "拌海蛏", description: "香拌海蛏", price: "¥11" },
          { name: "拌牛杂", description: "香拌牛杂", price: "¥13" },
          { name: "拌牛脚筋", description: "香拌牛筋", price: "¥16" },
          { name: "拌牛百叶", description: "香拌百叶", price: "¥16" },
          { name: "拌罗汉肉", description: "香拌罗汉肉", price: "¥11" },
          { name: "拌大肠", description: "香拌大肠", price: "¥10" },
          { name: "拌小肠", description: "香拌小肠", price: "¥10" },
          { name: "拌花蛤", description: "香拌花蛤", price: "¥10" },
          { name: "拌鸭肠", description: "香拌鸭肠", price: "¥7" },
          { name: "拌猪血", description: "香拌猪血", price: "¥6" },
          { name: "拌猪肺", description: "香拌猪肺", price: "¥6" },
          { name: "拌腐竹", description: "香拌腐竹", price: "¥6" },
          { name: "拌木耳", description: "香拌木耳", price: "¥6" },
          { name: "拌牛滑", description: "香拌牛滑", price: "¥11" },
          { name: "拌骨髓", description: "香拌骨髓", price: "¥13" },
          { name: "拌舌头", description: "香拌舌头", price: "¥11" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "正宗重庆小面",
    cuisine: "重庆风味",
    icon: "ramen_dining",
    rating: "",
    location: "左侧",
    phone: "",
    tags: ["麻辣鲜香", "品类丰富", "小面/酸辣粉/木桶饭齐全"],
    featured: true,
    menu: [
      {
        category: "酸辣粉类",
        items: [
          { name: "重庆酸辣粉", description: "", price: "¥10" },
          { name: "鸭血酸辣粉", description: "", price: "¥12" },
          { name: "鸡杂酸辣粉", description: "", price: "¥16" },
          { name: "罗汉肉酸辣粉", description: "", price: "¥19" },
          { name: "牛肉酸辣粉", description: "", price: "¥20" },
          { name: "肥肠酸辣粉", description: "", price: "¥20" },
          { name: "排骨酸辣粉", description: "", price: "¥20" },
          { name: "红油/清汤抄手", description: "小份/大份", price: "¥10/¥15" },
          { name: "干捞/汤水饺", description: "小份/大份", price: "¥12/¥18" }
        ]
      },
      {
        category: "小碟类",
        items: [
          { name: "卤蛋", description: "", price: "¥2" },
          { name: "卤煎蛋", description: "", price: "¥2" },
          { name: "香大肠", description: "", price: "¥2" },
          { name: "大排骨", description: "", price: "¥6" },
          { name: "拌青菜", description: "", price: "¥7" },
          { name: "拌空心菜", description: "", price: "¥7" },
          { name: "拌猪肝", description: "", price: "¥8" },
          { name: "大鸡腿", description: "", price: "¥8" },
          { name: "罗汉肉", description: "", price: "¥9" },
          { name: "牛肥肠", description: "", price: "¥10" },
          { name: "排骨", description: "", price: "¥10" },
          { name: "肘子肉", description: "", price: "¥10" },
          { name: "五香豆干", description: "", price: "¥2" },
          { name: "萝卜干", description: "", price: "¥3" },
          { name: "鸡爪爪", description: "", price: "¥3" },
          { name: "鸡翅根", description: "", price: "¥3" },
          { name: "酸豆角", description: "", price: "¥3" },
          { name: "酸咸菜", description: "", price: "¥3" },
          { name: "黄金豆", description: "", price: "¥4" },
          { name: "豌豆杂", description: "", price: "¥5" },
          { name: "肉肠", description: "", price: "¥5" }
        ]
      },
      {
        category: "木桶饭类",
        items: [
          { name: "酸辣土豆丝木桶饭", description: "", price: "¥15" },
          { name: "番茄鸡蛋木桶饭", description: "", price: "¥15" },
          { name: "香菇肉丝木桶饭", description: "", price: "¥18" },
          { name: "台湾卤肉木桶饭", description: "", price: "¥18" },
          { name: "酸菜肉丝木桶饭", description: "", price: "¥18" },
          { name: "木耳肉丝木桶饭", description: "", price: "¥18" },
          { name: "酸辣鸡杂木桶饭", description: "", price: "¥18" },
          { name: "鱼香肉丝木桶饭", description: "", price: "¥18" },
          { name: "香辣肉丝木桶饭", description: "", price: "¥20" },
          { name: "红烧排骨木桶饭", description: "", price: "¥20" },
          { name: "红烧牛肉木桶饭", description: "", price: "¥20" },
          { name: "青椒肉丝木桶饭", description: "", price: "¥20" },
          { name: "黑椒牛肉木桶饭", description: "", price: "¥20" },
          { name: "爆炒肥肠木桶饭", description: "", price: "¥20" },
          { name: "香辣牛杂木桶饭", description: "", price: "¥20" },
          { name: "红烧肉豆泡木桶饭", description: "", price: "¥20" }
        ]
      },
      {
        category: "炒饭/面/粉类",
        items: [
          { name: "蛋炒饭", description: "", price: "¥10" },
          { name: "广式腊肠炒饭", description: "", price: "¥13" },
          { name: "泡椒萝卜炒饭", description: "", price: "¥13" },
          { name: "香肠培根炒饭", description: "", price: "¥15" },
          { name: "榨菜肉丝炒饭", description: "", price: "¥15" },
          { name: "咖喱牛肉炒饭", description: "", price: "¥15" },
          { name: "青椒牛肉炒饭", description: "", price: "¥15" },
          { name: "泡椒牛肉丝炒饭", description: "", price: "¥15" },
          { name: "酸菜牛肉丝炒饭", description: "", price: "¥15" },
          { name: "特色肉丝炒面", description: "", price: "¥16" },
          { name: "特色肉丝炒粉", description: "", price: "¥16" },
          { name: "特色肉丝方便面", description: "", price: "¥16" },
          { name: "黑椒牛肉炒面", description: "", price: "¥18" }
        ]
      },
      {
        category: "米粉类",
        items: [
          { name: "纯米粉", description: "", price: "¥11" },
          { name: "鸡蛋米粉", description: "", price: "¥13" },
          { name: "酸菜米粉", description: "", price: "¥13" },
          { name: "豌杂米粉", description: "", price: "¥15" },
          { name: "卤大排米粉", description: "", price: "¥16" },
          { name: "鸡杂米粉", description: "", price: "¥16" },
          { name: "猪肝米粉", description: "", price: "¥18" },
          { name: "罗汉肉米粉", description: "", price: "¥18" },
          { name: "牛肉米粉", description: "", price: "¥19" },
          { name: "肥肠米粉", description: "", price: "¥19" },
          { name: "排骨米粉", description: "", price: "¥19" },
          { name: "肘子肉米粉", description: "", price: "¥20" },
          { name: "酸菜肉丝米粉", description: "", price: "¥16" },
          { name: "酸菜罗汉肉米粉", description: "", price: "¥19" },
          { name: "红烧牛杂米粉", description: "", price: "¥20" },
          { name: "酸菜牛肉米粉", description: "", price: "¥20" },
          { name: "酸菜肥肠米粉", description: "", price: "¥20" },
          { name: "酸菜排骨米粉", description: "", price: "¥20" },
          { name: "豌杂罗汉肉米粉", description: "", price: "¥21" },
          { name: "豌杂牛肉米粉", description: "", price: "¥22" },
          { name: "豌杂肥肠米粉", description: "", price: "¥22" },
          { name: "豌杂排骨米粉", description: "", price: "¥22" }
        ]
      },
      {
        category: "小面类",
        items: [
          { name: "豌杂小面", description: "二两/三两", price: "¥13/¥15" },
          { name: "卤大排小面", description: "二两/三两", price: "¥15/¥17" },
          { name: "酸菜肉丝小面", description: "二两/三两", price: "¥16/¥18" },
          { name: "卤肘子肉小面", description: "二两/三两", price: "¥18/¥20" },
          { name: "酸菜牛肉小面", description: "二两/三两", price: "¥20/¥22" },
          { name: "酸菜肥肠小面", description: "二两/三两", price: "¥20/¥22" },
          { name: "酸菜排骨小面", description: "二两/三两", price: "¥20/¥22" },
          { name: "豌杂罗汉肉小面", description: "二两/三两", price: "¥20/¥22" },
          { name: "酸菜罗汉肉小面", description: "二两/三两", price: "¥21/¥23" },
          { name: "豌杂牛肉小面", description: "二两/三两", price: "¥21/¥23" },
          { name: "豌杂肥肠小面", description: "二两/三两", price: "¥21/¥23" },
          { name: "豌杂排骨小面", description: "二两/三两", price: "¥21/¥23" }
        ]
      },
      {
        category: "卤汁拌饭类",
        items: [
          { name: "卤汁莲藕拌饭", description: "", price: "¥12" },
          { name: "卤汁肉肠拌饭", description: "", price: "¥14" },
          { name: "卤汁大排拌饭", description: "", price: "¥16" },
          { name: "卤汁鸡腿拌饭", description: "", price: "¥17" },
          { name: "卤汁肘子拌饭", description: "", price: "¥18" },
          { name: "卤汁红烧肉拌饭", description: "", price: "¥18" }
        ]
      },
      {
        category: "特色小面类",
        items: [
          { name: "牛肉小面", description: "二两/三两", price: "¥18/¥20" },
          { name: "肥肠小面", description: "二两/三两", price: "¥18/¥20" },
          { name: "排骨小面", description: "二两/三两", price: "¥18/¥20" },
          { name: "海鲜小面", description: "二两/三两", price: "¥18/¥20" },
          { name: "罗汉肉小面", description: "二两/三两", price: "¥16/¥18" },
          { name: "猪肝小面", description: "二两/三两", price: "¥16/¥18" },
          { name: "红烧牛杂小面", description: "二两/三两", price: "¥18/¥20" },
          { name: "纯小面", description: "二两/三两", price: "¥9/¥11" },
          { name: "鸡蛋小面", description: "二两/三两", price: "¥11/¥13" },
          { name: "鸡杂小面", description: "二两/三两", price: "¥16/¥18" },
          { name: "川香拌小面", description: "", price: "¥13" },
          { name: "酸菜小面", description: "二两/三两", price: "¥13/¥15" },
          { name: "酸辣小面", description: "二两/三两", price: "¥13/¥15" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "肆季食光",
    cuisine: "简餐/米线/甜品",
    icon: "restaurant",
    rating: "",
    location: "左侧",
    phone: "",
    tags: ["甜品小食", "品类丰富", "简餐甜品齐全"],
    featured: true,
    menu: [
      {
        category: "简餐类",
        items: [
          { name: "海苔炒饭", description: "", price: "¥12" },
          { name: "海苔培根炒饭", description: "", price: "¥15" },
          { name: "江西炒粉", description: "", price: "¥15" },
          { name: "小龙虾炒饭", description: "", price: "¥20" },
          { name: "公主爆蛋拌饭", description: "", price: "¥14" },
          { name: "日式咖喱猪排饭", description: "", price: "¥18" },
          { name: "日式咖喱鸡排饭", description: "", price: "¥18" },
          { name: "日式咖喱鸡腿饭", description: "", price: "¥20" },
          { name: "土豆咖喱鸡拌饭", description: "", price: "¥20" },
          { name: "泰式打抛猪肉饭", description: "", price: "¥20" },
          { name: "台式卤肉饭", description: "", price: "¥20" },
          { name: "照烧鸡腿拌饭", description: "", price: "¥20" },
          { name: "韩式五花肉拌饭", description: "", price: "¥20" },
          { name: "韩式泡菜鸡肉饭", description: "", price: "¥15" },
          { name: "奶油芝士火鸡面", description: "", price: "¥24" },
          { name: "小龙虾拌面", description: "", price: "¥26" },
          { name: "蒲烧鳗鱼饭", description: "", price: "¥38" }
        ]
      },
      {
        category: "米线类",
        items: [
          { name: "三鲜肉丸米线", description: "", price: "¥12" },
          { name: "三鲜鸡蛋肉丸米线", description: "", price: "¥14" },
          { name: "三鲜大虾米线", description: "", price: "¥18" },
          { name: "番茄肥牛米线", description: "", price: "¥16" },
          { name: "番茄鲜虾米线", description: "", price: "¥18" },
          { name: "番茄鸡蛋肉丸米线", description: "", price: "¥14" },
          { name: "金汤肥牛米线", description: "", price: "¥16" },
          { name: "越南牛肉河粉", description: "", price: "¥16" },
          { name: "番茄大虾米线", description: "", price: "¥18" }
        ]
      },
      {
        category: "意面类",
        items: [
          { name: "黑椒牛柳意面", description: "", price: "¥28" },
          { name: "番茄牛肉意面", description: "", price: "¥28" },
          { name: "奶油蘑菇培根意面", description: "", price: "¥28" },
          { name: "奶油泡菜培根意面", description: "", price: "¥28" }
        ]
      },
      {
        category: "炸鸡类",
        items: [
          { name: "BHC双翅鸡腿炸鸡", description: "", price: "¥24" }
        ]
      },
      {
        category: "甜品类",
        items: [
          { name: "香草冰淇淋", description: "", price: "¥12" },
          { name: "蜜果冰淇淋", description: "", price: "¥12" },
          { name: "青提芭菲杯", description: "", price: "¥20" },
          { name: "草莓芭菲杯", description: "", price: "¥20" },
          { name: "青提舒芙蕾", description: "", price: "¥26" },
          { name: "草莓舒芙蕾", description: "", price: "¥26" },
          { name: "蓝莓舒芙蕾", description: "", price: "¥26" },
          { name: "芒果舒芙蕾", description: "", price: "¥26" },
          { name: "抹茶舒芙蕾", description: "", price: "¥26" }
        ]
      },
      {
        category: "刨冰类",
        items: [
          { name: "香草牛奶刨冰", description: "", price: "¥28" },
          { name: "香蕉牛奶刨冰", description: "", price: "¥30" },
          { name: "蓝莓牛奶刨冰", description: "", price: "¥30" },
          { name: "芒果牛奶刨冰", description: "", price: "¥30" },
          { name: "青提牛奶刨冰", description: "", price: "¥30" },
          { name: "草莓牛奶刨冰", description: "", price: "¥30" }
        ]
      },
      {
        category: "炸物小吃类",
        items: [
          { name: "鸡米花", description: "", price: "¥10" },
          { name: "一口肠", description: "", price: "¥10" },
          { name: "原味薯条", description: "", price: "¥12" },
          { name: "浪味仙薯泥", description: "", price: "¥16" },
          { name: "甘梅地瓜条", description: "", price: "¥12" },
          { name: "上校鸡块", description: "", price: "¥15" },
          { name: "炸物拼盘", description: "", price: "¥30" }
        ]
      },
      {
        category: "套餐类",
        items: [
          { name: "简餐套餐A", description: "海苔炒饭 + 原味薯条/甘梅地瓜条 + 可乐/雪碧", price: "¥20" },
          { name: "简餐套餐B", description: "日式咖喱(猪/鸡)排饭 + 上校鸡块/薯条 + 可乐/雪碧", price: "¥25" },
          { name: "炸鸡火鸡面套餐", description: "BHC炸鸡 + 奶油芝士火鸡面 + 可乐/雪碧", price: "¥25" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "肥钟猪脚饭",
    cuisine: "隆江猪脚饭/简餐",
    icon: "restaurant",
    rating: "",
    location: "左侧",
    phone: "",
    tags: ["粤式风味", "招牌隆江猪脚饭", "双拼组合多"],
    featured: true,
    menu: [
      {
        category: "金字招牌系列",
        items: [
          { name: "招牌隆江猪脚饭", description: "中份/大份（加量20%，原价24元）", price: "¥18/¥19.9" },
          { name: "猪脚拼肉卷饭", description: "", price: "¥19.9" },
          { name: "厚切蜜汁叉烧饭", description: "", price: "¥20" },
          { name: "超级猪脚饭", description: "原价26元", price: "¥23" },
          { name: "猪脚拼鸭排饭", description: "", price: "¥25" }
        ]
      },
      {
        category: "单点系列",
        items: [
          { name: "厚切潮汕肉卷饭", description: "", price: "¥16" },
          { name: "盐焗手枪腿饭", description: "", price: "¥20" },
          { name: "蜜汁鸭排饭", description: "", price: "¥16" },
          { name: "大大鸡排饭", description: "", price: "¥20" },
          { name: "蜜汁霸王腿饭", description: "", price: "¥19" },
          { name: "爆赞卤肉饭", description: "", price: "¥19" },
          { name: "香卤鸡腿饭", description: "", price: "¥16" },
          { name: "小炒黄牛肉饭", description: "", price: "¥23" }
        ]
      },
      {
        category: "双拼系列",
        items: [
          { name: "猪脚拼鸡腿饭", description: "", price: "¥24" },
          { name: "猪脚拼叉烧饭", description: "", price: "¥27" },
          { name: "卤肉拼鸡腿饭", description: "", price: "¥25" },
          { name: "盐焗手枪腿拼鸭排饭", description: "", price: "¥27" }
        ]
      },
      {
        category: "营养炖罐",
        items: [
          { name: "石橄榄土猪肉汤", description: "", price: "¥7" },
          { name: "竹荪土猪肉汤", description: "", price: "¥8" },
          { name: "目鱼骨排骨汤", description: "", price: "¥9" },
          { name: "鹿茸菇乌鸡汤", description: "", price: "¥12" }
        ]
      },
      {
        category: "随心加料",
        items: [
          { name: "卤蛋", description: "", price: "¥2" },
          { name: "卤鸡腿", description: "", price: "¥6" },
          { name: "盐焗手枪腿", description: "", price: "¥13" },
          { name: "蜜汁鸭排", description: "", price: "¥9" },
          { name: "隆江猪脚", description: "", price: "¥7" },
          { name: "卤豆腐", description: "", price: "¥2" },
          { name: "手工肉卷", description: "", price: "¥6" },
          { name: "香酥鸭排", description: "", price: "¥6" },
          { name: "辣椒大鸡腿", description: "", price: "¥9" },
          { name: "蜜汁叉烧", description: "", price: "¥9" },
          { name: "蜜汁霸王腿", description: "", price: "¥13" }
        ]
      },
      {
        category: "饮品选择",
        items: [
          { name: "可乐", description: "", price: "¥3" },
          { name: "雪碧", description: "", price: "¥3" },
          { name: "矿泉水", description: "", price: "¥2" },
          { name: "王老吉", description: "", price: "¥4" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "桂珍牛滑店",
    cuisine: "福建特色/牛滑简餐",
    icon: "restaurant",
    rating: "",
    location: "右侧",
    phone: "",
    tags: ["清淡口味", "老字号特色牛滑", "套餐/炒饭齐全"],
    featured: true,
    menu: [
      {
        category: "小吃类",
        items: [
          { name: "拌粉干", description: "", price: "¥5" },
          { name: "青菜粉", description: "", price: "¥6" },
          { name: "青菜粉干", description: "", price: "¥6" },
          { name: "青菜面", description: "", price: "¥6" },
          { name: "拌面", description: "", price: "¥5" },
          { name: "拌油面", description: "", price: "¥5" }
        ]
      },
      {
        category: "拌类",
        items: [
          { name: "拌牛滑", description: "", price: "¥15" },
          { name: "拌牛杂", description: "", price: "¥17" },
          { name: "拌牛肚", description: "", price: "¥20" },
          { name: "拌罗汉肉", description: "", price: "¥13" },
          { name: "拌鸭胗", description: "", price: "¥13" },
          { name: "拌小肠", description: "", price: "¥10" },
          { name: "拌猪血", description: "", price: "¥6-8" }
        ]
      },
      {
        category: "汤类",
        items: [
          { name: "牛滑汤", description: "", price: "¥15" },
          { name: "牛杂汤", description: "", price: "¥15" },
          { name: "牛肚汤", description: "", price: "¥19" },
          { name: "猪血汤", description: "", price: "¥5" },
          { name: "罗汉肉汤", description: "", price: "¥7-10" },
          { name: "小肠汤", description: "", price: "¥7-10" },
          { name: "鸭胗汤", description: "", price: "¥7-10" },
          { name: "西红柿蛋汤", description: "", price: "¥6" },
          { name: "紫菜蛋花汤", description: "", price: "¥6" },
          { name: "青菜汤", description: "时价", price: "时价" }
        ]
      },
      {
        category: "主食类",
        items: [
          { name: "牛滑面/粉", description: "", price: "¥15" },
          { name: "牛肉面/粉", description: "", price: "¥15" },
          { name: "卤肉面/粉", description: "", price: "¥15" },
          { name: "牛杂面/粉", description: "", price: "¥15" },
          { name: "牛肚面/粉", description: "", price: "¥19" },
          { name: "煌膳蜜汁叉烧面/粉", description: "", price: "¥17" },
          { name: "香汁大排面/粉", description: "", price: "¥15" },
          { name: "罗汉肉面/粉", description: "", price: "¥15" },
          { name: "小肠面/粉", description: "", price: "¥13" },
          { name: "鸡腿面/粉", description: "", price: "¥13" },
          { name: "鸭胗面/粉", description: "", price: "¥13" },
          { name: "猪血面/粉", description: "", price: "¥10" },
          { name: "酸菜面/粉", description: "", price: "¥6" }
        ]
      },
      {
        category: "套餐类",
        items: [
          { name: "咖喱牛滑饭", description: "", price: "¥16" },
          { name: "煌膳蜜汁叉烧饭", description: "", price: "¥17" },
          { name: "香汁大排饭", description: "", price: "¥15" },
          { name: "罗汉肉套饭", description: "", price: "¥15" },
          { name: "五香卤肉饭", description: "", price: "¥15" },
          { name: "荔枝肉饭", description: "", price: "¥15" },
          { name: "酱汁牛肉饭", description: "", price: "¥15" },
          { name: "全腿鸭饭", description: "", price: "¥15" },
          { name: "鸡腿饭", description: "", price: "¥13" },
          { name: "鸭胗饭（香辣）", description: "", price: "¥13" }
        ]
      },
      {
        category: "炒类",
        items: [
          { name: "牛肉丝炒饭", description: "", price: "¥13" },
          { name: "牛肉丝咖喱炒饭", description: "", price: "¥14" },
          { name: "牛肉丝炒面", description: "", price: "¥14" },
          { name: "牛肉丝炒粉干", description: "", price: "¥14" },
          { name: "牛肉丝泡菜炒饭", description: "", price: "¥14" },
          { name: "五花肉泡菜炒饭", description: "", price: "¥14" },
          { name: "泡菜炒饭", description: "", price: "¥11" },
          { name: "荔枝肉炒饭", description: "", price: "¥15" },
          { name: "咖喱炒饭", description: "", price: "¥10" },
          { name: "西红柿炒饭", description: "", price: "¥10" },
          { name: "扬州炒饭", description: "", price: "¥10" },
          { name: "香肠蛋炒饭", description: "", price: "¥11" },
          { name: "蛋炒饭", description: "", price: "¥9" }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "过桥米线店",
    cuisine: "云南风味/过桥米线",
    icon: "restaurant",
    rating: "",
    location: "右侧",
    phone: "",
    tags: ["清淡口味", "过桥米线", "可加菜升级"],
    featured: true,
    menu: [
      {
        category: "招牌必点",
        items: [
          { name: "鲜虾米线", description: "", price: "¥20" },
          { name: "番茄肥牛米线", description: "", price: "¥22" }
        ]
      },
      {
        category: "经典米线系列",
        items: [
          { name: "素菜米线", description: "", price: "¥16" },
          { name: "三鲜米线", description: "", price: "¥18" },
          { name: "肥牛米线", description: "", price: "¥18" },
          { name: "开花肠米线", description: "", price: "¥18" },
          { name: "肥羊米线", description: "", price: "¥18" },
          { name: "老坛酸菜米线", description: "", price: "¥18" },
          { name: "火腿米线", description: "", price: "¥18" },
          { name: "鱼豆腐米线", description: "", price: "¥18" },
          { name: "墨鱼丸米线", description: "", price: "¥18" },
          { name: "千页豆腐米线", description: "", price: "¥18" },
          { name: "鸭血米线", description: "", price: "¥18" },
          { name: "酥肉米线", description: "", price: "¥18" },
          { name: "精品米线", description: "", price: "¥18" },
          { name: "番茄米线", description: "", price: "¥18" },
          { name: "目鱼花米线", description: "", price: "¥20" },
          { name: "花蛤米线", description: "", price: "¥20" },
          { name: "老坛酸菜肥牛米线", description: "", price: "¥22" },
          { name: "巴沙鱼米线", description: "", price: "¥22" },
          { name: "肥羊鸭血米线", description: "", price: "¥22" },
          { name: "肥牛鸭血米线", description: "", price: "¥22" },
          { name: "番茄酥肉米线", description: "", price: "¥22" },
          { name: "全家福米线", description: "", price: "¥25" }
        ]
      },
      {
        category: "加菜区",
        items: [
          { name: "素菜（任选）", description: "上海青、豆芽、金针菇、千张丝、西红柿、海带丝、鹌鹑蛋、豆泡、木耳、千页豆腐", price: "¥4/份" },
          { name: "荤菜（5元档，任选）", description: "贡丸、开花肠、火腿、墨鱼丸、蟹棒、鱼豆腐、鸭血", price: "¥5/份" },
          { name: "荤菜（6元档，任选）", description: "肥牛、目鱼花、肥羊、巴沙鱼片、鲜虾、小酥肉、花蛤", price: "¥6/份" },
          { name: "煎蛋", description: "", price: "¥2" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "温馨提示", description: "所有米线均可换成方便面", price: "" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "堡蜜炸鸡汉堡",
    cuisine: "简餐/汉堡/炸鸡",
    icon: "lunch_dining",
    rating: "",
    location: "黄岐道路青虹路27号(便利店统一方向旁)",
    phone: "135-9997-0346",
    tags: ["西式快餐", "汉堡", "炸鸡", "套餐", "小吃"],
    featured: true,
    menu: [
      {
        category: "套餐类",
        items: [
          { name: "板烧鸡腿堡+大可", description: "", price: "¥12" },
          { name: "鸡腿堡+紫薯球+大可", description: "", price: "¥12" },
          { name: "牛肉堡+大薯+大可", description: "", price: "¥15" },
          { name: "鸡腿堡+鸡米花+大可", description: "", price: "¥15" },
          { name: "鸡腿堡+大薯+大可", description: "", price: "¥16" },
          { name: "鸡腿堡+烤翅+大可", description: "", price: "¥16" },
          { name: "板烧鸡腿堡+烤翅+大可", description: "", price: "¥16" },
          { name: "全鸡或烤培+大可2杯", description: "", price: "¥23" },
          { name: "双人餐", description: "", price: "¥36" }
        ]
      },
      {
        category: "心单品",
        items: [
          { name: "玉米杯", description: "", price: "¥4" },
          { name: "紫薯球", description: "4个", price: "¥5" },
          { name: "上校鸡块", description: "", price: "¥6.5" },
          { name: "川香鸡柳", description: "", price: "¥6.5" },
          { name: "骨肉相连", description: "", price: "¥6.5" },
          { name: "鸡米花", description: "", price: "¥6.5" },
          { name: "大薯/小薯", description: "", price: "¥6.5/¥5.5" },
          { name: "奥尔良烤翅", description: "", price: "¥6.5" },
          { name: "香辣鸡翅", description: "", price: "¥6.5" },
          { name: "脆皮鸡腿", description: "", price: "¥7" },
          { name: "原味堡", description: "", price: "¥7" },
          { name: "精味堡", description: "", price: "¥7" },
          { name: "牛肉堡", description: "", price: "¥7" },
          { name: "鸡肉卷", description: "", price: "¥7" },
          { name: "板烧鸡腿堡", description: "", price: "¥7.5" },
          { name: "菠萝脆皮堡", description: "", price: "¥8" },
          { name: "至尊虾堡", description: "", price: "¥8" },
          { name: "巨无霸", description: "", price: "¥8" },
          { name: "照烧鸡肉卷", description: "", price: "¥8" },
          { name: "鱼堡", description: "", price: "¥8" },
          { name: "水果派", description: "2个", price: "¥8" },
          { name: "鸡翅包饭", description: "", price: "¥10" },
          { name: "烤全腿", description: "", price: "¥10" },
          { name: "蛋挞", description: "4个", price: "¥12" },
          { name: "蜜恋大鸡排", description: "", price: "¥12" },
          { name: "手枪腿", description: "", price: "¥14" },
          { name: "全鸡", description: "", price: "¥17" },
          { name: "烤鸡", description: "", price: "¥17" }
        ]
      },
      {
        category: "饮料类",
        items: [
          { name: "纯奶茶", description: "", price: "¥4.5" },
          { name: "可乐", description: "", price: "¥4.5" },
          { name: "七喜", description: "", price: "¥4.5" },
          { name: "美年达", description: "", price: "¥4.5" },
          { name: "椰果奶茶", description: "", price: "¥5" },
          { name: "红豆奶茶", description: "", price: "¥5" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "备用电话号码", description: "136-9681-9553", price: "" }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "姑娘手肉夹馍",
    cuisine: "陕西风味/肉夹馍/特色面食",
    icon: "restaurant",
    rating: "",
    location: "图书馆西侧",
    phone: "180-6039-8856",
    tags: ["西北风味", "陕西特色", "手工现扯面", "招牌肉夹馍"],
    featured: true,
    menu: [
      {
        category: "新品饭食系列",
        items: [
          { name: "台湾肉肠饭", description: "3寸", price: "¥16" },
          { name: "海苔丁香鱼饭", description: "赠送肉肠", price: "¥17" },
          { name: "日式照烧鸡腿片饭", description: "", price: "¥18" },
          { name: "日式咖喱鸡饭", description: "", price: "¥17" },
          { name: "波士顿黑椒牛肉饭", description: "", price: "¥18" },
          { name: "日式肥牛饭", description: "", price: "¥17" },
          { name: "脆皮烤鸭饭", description: "", price: "¥18" }
        ]
      },
      {
        category: "招牌肉夹馍系列",
        items: [
          { name: "姑娘手肉夹馍", description: "招牌TOP1，现烤现做，肉量增加20%", price: "¥10" },
          { name: "藤椒鸡肉肉夹馍", description: "", price: "¥10" },
          { name: "青椒卤肉肉夹馍", description: "", price: "¥11" },
          { name: "纯瘦肉夹馍", description: "", price: "¥13" },
          { name: "笋丁肉夹馍", description: "", price: "¥12" }
        ]
      },
      {
        category: "爽口凉皮系列",
        items: [
          { name: "秘制红油凉皮", description: "招牌TOP3，每日鲜做，手工制作", price: "¥10" },
          { name: "招牌麻酱凉皮", description: "", price: "¥12" }
        ]
      },
      {
        category: "盖浇饭系列",
        items: [
          { name: "孜然烤肉饭", description: "", price: "¥18" },
          { name: "奥尔良鸡腿饭", description: "超大份", price: "¥18" },
          { name: "炒黄牛肉饭", description: "", price: "¥18" },
          { name: "红烧排骨饭", description: "", price: "¥17" },
          { name: "香辣脆肚饭", description: "", price: "¥17" },
          { name: "鱼香肉丝饭", description: "", price: "¥15" },
          { name: "糖醋里脊饭", description: "", price: "¥16" },
          { name: "盐焗鸡腿饭", description: "停售", price: "¥15" },
          { name: "梅菜扣肉饭", description: "", price: "¥16" },
          { name: "香菇滑鸡饭", description: "", price: "¥16" },
          { name: "肉末茄子饭", description: "", price: "¥13" },
          { name: "香酥鸡排饭", description: "", price: "¥15" },
          { name: "秘制香菇卤肉饭", description: "", price: "¥15" }
        ]
      },
      {
        category: "特色陕西扯面系列",
        items: [
          { name: "招牌biangbiang面", description: "招牌TOP2，手工现扯", price: "¥19" },
          { name: "经典油泼面", description: "手工现扯", price: "¥13" }
        ]
      },
      {
        category: "酸辣粉系列",
        items: [
          { name: "经典酸辣粉", description: "", price: "¥10" },
          { name: "炸酱酸辣粉", description: "", price: "¥13" },
          { name: "肥牛酸辣粉", description: "", price: "¥18" }
        ]
      },
      {
        category: "手工面系列",
        items: [
          { name: "番茄鸡蛋面", description: "", price: "¥16" },
          { name: "西北牛肉面", description: "", price: "¥17" },
          { name: "招牌炸酱面", description: "", price: "¥13" },
          { name: "葱油拌面", description: "", price: "¥6" },
          { name: "金汤肥牛面/粉", description: "", price: "¥18" },
          { name: "关中牛肉面", description: "", price: "¥19" },
          { name: "番茄牛肉面", description: "", price: "¥19" },
          { name: "麻酱鸡丝干拌面", description: "", price: "¥13" },
          { name: "肉沫茄子干拌面", description: "", price: "¥13" },
          { name: "小炒黄牛肉拌面", description: "", price: "¥20" },
          { name: "小葱牛肉干拌面", description: "", price: "¥13" }
        ]
      },
      {
        category: "汤品粥品系列",
        items: [
          { name: "陕北小米粥", description: "", price: "¥5" },
          { name: "红枣杂粮粥", description: "", price: "¥5" },
          { name: "骨汤馄饨", description: "", price: "¥9" },
          { name: "酸汤水饺", description: "", price: "¥13" },
          { name: "老福州酸辣汤", description: "", price: "¥7" }
        ]
      },
      {
        category: "西北小吃系列",
        items: [
          { name: "小酥肉", description: "", price: "¥12" },
          { name: "羊肉串", description: "", price: "¥15" },
          { name: "卤蛋", description: "", price: "¥2/个" },
          { name: "红糖冰粉", description: "", price: "¥6" },
          { name: "茴香小油条", description: "", price: "¥6" },
          { name: "馍法鸡块", description: "", price: "¥8" }
        ]
      },
      {
        category: "饮品系列",
        items: [
          { name: "可乐", description: "", price: "¥5" },
          { name: "七喜", description: "", price: "¥5" },
          { name: "冰峰", description: "", price: "¥5" },
          { name: "酸梅汁", description: "", price: "¥5" }
        ]
      },
      {
        category: "招牌组合",
        items: [
          { name: "酸辣汤+招牌肉夹馍", description: "招牌推荐", price: "¥16" }
        ]
      },
      {
        category: "套餐推荐系列",
        items: [
          { name: "套餐1", description: "酸辣粉+馍+饮料", price: "¥20" },
          { name: "套餐2", description: "凉皮+馍+饮料", price: "¥20" },
          { name: "套餐3", description: "炸酱面+馍", price: "¥20" },
          { name: "套餐4", description: "酸菜肥牛面+馍", price: "¥23" },
          { name: "套餐6", description: "馄饨+馍", price: "¥15" },
          { name: "套餐8", description: "葱油拌面+凉粉+饮料", price: "¥13" },
          { name: "优惠套餐", description: "花生拌面+馄饨+饮料", price: "¥15" }
        ]
      },
      {
        category: "温馨提示",
        items: [
          { name: "打包说明", description: "打包加一元，小本生意感谢理解", price: "" },
          { name: "订餐服务", description: "订餐电话18060398856，微信同号", price: "" }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "小新的餐厅",
    cuisine: "简餐/咖喱饭/牛排",
    icon: "restaurant_menu",
    rating: "",
    location: "",
    phone: "195-5916-8885",
    tags: ["西式简餐", "简餐", "咖喱饭", "牛排"],
    featured: true,
    menu: [
      {
        category: "咖喱饭系列",
        items: [
          { name: "BBQ烤肉饭", description: "", price: "¥17" },
          { name: "黑椒鸡排饭", description: "", price: "¥18" },
          { name: "新新鸡腿饭", description: "", price: "¥18" },
          { name: "魔板鸡排饭", description: "", price: "¥18" },
          { name: "天妇罗鸡扒饭", description: "", price: "¥19" },
          { name: "黄金虾排饭", description: "", price: "¥19" },
          { name: "蜜汁手枪腿饭", description: "", price: "¥18" },
          { name: "脆脆鸡排饭", description: "", price: "¥20" },
          { name: "黑辣鸡拌饭", description: "", price: "¥23" },
          { name: "奥尔良烤翅饭", description: "", price: "¥21" },
          { name: "脆鱼鸡排双拼饭", description: "", price: "¥21" },
          { name: "西冷牛排饭", description: "", price: "¥35" }
        ]
      },
      {
        category: "主食系列",
        items: [
          { name: "无敌蛋包饭", description: "", price: "¥24" },
          { name: "新新肥牛饭", description: "", price: "¥26" },
          { name: "奶油芝士焗饭", description: "", price: "¥28" },
          { name: "意大利牛肉酱面", description: "", price: "¥28" },
          { name: "黑椒牛肉意面", description: "", price: "¥28" },
          { name: "肥牛乌冬面", description: "", price: "¥30" },
          { name: "黑椒牛肉乌冬面", description: "黑椒或番茄", price: "¥35" },
          { name: "原切冷牛排", description: "黑椒或番茄", price: "¥48" },
          { name: "原切沙朗牛排", description: "黑椒或番茄", price: "¥68" },
          { name: "原切电力牛排", description: "黑椒或番茄", price: "¥47" },
          { name: "原切电力牛排", description: "黑椒或番茄", price: "¥42" }
        ]
      },
      {
        category: "套餐系列",
        items: [
          { name: "套餐A", description: "咖喱鸡排+可乐+薯条布丁", price: "¥31" },
          { name: "套餐B", description: "新新肥牛+可乐+鸡翅单点", price: "¥35" },
          { name: "套餐C", description: "意大利牛肉酱+可乐+鸡翅单点", price: "¥36" },
          { name: "双人套餐", description: "西冷牛排+咖喱鸡排+两杯饮料+新新掌中宝+桃甘露+可乐", price: "¥88" }
        ]
      },
      {
        category: "小吃甜品系列",
        items: [
          { name: "奥尔良烤翅", description: "", price: "¥10" },
          { name: "藤椒鸡米花", description: "", price: "¥8" },
          { name: "新新薯角", description: "", price: "¥9" },
          { name: "单点手枪腿", description: "", price: "¥16" },
          { name: "小新爱吃虾球", description: "", price: "¥15" },
          { name: "奶油芝士焗土豆泥", description: "", price: "¥18" },
          { name: "芝士焗红薯泥", description: "", price: "¥13" },
          { name: "爆浆鸡排", description: "", price: "¥18" },
          { name: "爆浆鳕鱼条", description: "", price: "¥16" },
          { name: "芝士焗芋泥", description: "", price: "¥19" },
          { name: "天妇罗大虾", description: "", price: "¥15" },
          { name: "焦糖布丁", description: "", price: "¥12" },
          { name: "生莱沙拉", description: "", price: "¥15" },
          { name: "嫩盐脆脆鸡", description: "", price: "¥18" },
          { name: "新新掌中宝", description: "", price: "¥15" },
          { name: "海苔多春鱼", description: "(脆鱼,虾球,鱿鱼条)", price: "¥35" },
          { name: "小食拼盘", description: "", price: "" }
        ]
      },
      {
        category: "汤系列",
        items: [
          { name: "美味蔬菜汤", description: "", price: "¥3" },
          { name: "番茄蛋汤", description: "", price: "¥3" },
          { name: "紫菜蛋汤", description: "", price: "¥3" }
        ]
      },
      {
        category: "饮品系列",
        items: [
          { name: "可乐", description: "", price: "¥2.5" },
          { name: "雪碧", description: "", price: "¥2.5" },
          { name: "芬达", description: "", price: "¥2.5" },
          { name: "山野栀子", description: "", price: "¥13" },
          { name: "茉莉雪梨", description: "", price: "¥12" },
          { name: "霸气青柠", description: "", price: "¥8" },
          { name: "鸣屎香柠檬茶", description: "", price: "¥13" },
          { name: "杨枝甘露", description: "", price: "¥18" },
          { name: "羽衣甘蓝", description: "", price: "¥15" },
          { name: "茉莉油柑", description: "", price: "¥15" },
          { name: "桃胶炖奶/热饮", description: "", price: "¥10" },
          { name: "沉香燕麦/热饮", description: "", price: "¥10" }
        ]
      },
      {
        category: "现榨系列",
        items: [
          { name: "现榨苹果汁", description: "", price: "¥17" },
          { name: "现榨雪梨汁", description: "", price: "¥17" },
          { name: "现榨青瓜汁", description: "", price: "¥15" },
          { name: "现榨苹果雪梨汁", description: "", price: "¥17" }
        ]
      },
      {
        category: "充值活动",
        items: [
          { name: "充值优惠", description: "充30送30元 | 充50送60元", price: "" }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "沙县小吃",
    cuisine: "福建特色/沙县小吃",
    icon: "ramen_dining",
    rating: "",
    location: "长乐区吴航镇培青路30号培青路3栋(沙县小吃)",
    phone: "159-8573-4231",
    tags: ["传统小吃", "沙县小吃", "拌面/扁肉/蒸饺"],
    featured: false,
    menu: [
      {
        category: "小吃类",
        items: [
          { name: "飘香拌面", description: "", price: "¥5" },
          { name: "拌粉干", description: "", price: "¥5" },
          { name: "拌粿条", description: "", price: "¥5" },
          { name: "本地扁肉", description: "", price: "¥5" },
          { name: "沙县扁肉", description: "", price: "¥6" },
          { name: "鱼丸", description: "", price: "¥10" },
          { name: "手工蒸饺", description: "", price: "¥7" },
          { name: "炸饺", description: "", price: "¥10" },
          { name: "糟菜粉干(面)", description: "", price: "¥5" },
          { name: "青菜面(粉)", description: "", price: "¥5" },
          { name: "馄饨面", description: "", price: "¥11" },
          { name: "香拌扁肉", description: "", price: "¥10" },
          { name: "拌青菜", description: "", price: "¥6-12" }
        ]
      },
      {
        category: "煮面/粉类",
        items: [
          { name: "招牌炸酱面(粉)", description: "", price: "¥10" },
          { name: "番茄鸡蛋面(粉)", description: "", price: "¥10" },
          { name: "鸭胗面(粉)", description: "", price: "¥11" },
          { name: "青菜肉丝面(粉)", description: "", price: "¥12" },
          { name: "鸡腿面(粉)", description: "", price: "¥13" },
          { name: "乌鸡面(粉)", description: "", price: "¥14" },
          { name: "罗汉面(粉)", description: "", price: "¥14" },
          { name: "红烧排骨面(粉)", description: "", price: "¥16" },
          { name: "红烧肥肠面(粉)", description: "", price: "¥15" },
          { name: "鸭腿面(粉)", description: "", price: "¥15" },
          { name: "红烧牛腩面(粉)", description: "", price: "¥15" },
          { name: "猪肚汤面(粉)", description: "", price: "¥14" },
          { name: "炖罐汤煮线面", description: "", price: "¥15" }
        ]
      },
      {
        category: "炒类",
        items: [
          { name: "炒粉干", description: "", price: "¥10" },
          { name: "炒粿条", description: "", price: "¥10" },
          { name: "炒白果", description: "", price: "¥10" },
          { name: "炒面", description: "", price: "¥10" },
          { name: "炒米粉", description: "", price: "¥10" },
          { name: "蛋炒饭", description: "", price: "¥10" },
          { name: "肉丝炒米粉/面", description: "", price: "¥12" },
          { name: "香肠炒饭", description: "", price: "¥12" },
          { name: "扬州炒饭", description: "", price: "¥12" },
          { name: "鸭胗炒饭", description: "", price: "¥15" },
          { name: "鸡腿炒饭", description: "", price: "¥16" },
          { name: "鸭腿炒饭", description: "", price: "¥18" },
          { name: "牛肉炒饭", description: "", price: "¥18" }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "原味汤粉王",
    cuisine: "粤式/汤粉/烧腊",
    icon: "ramen_dining",
    rating: "",
    location: "长乐区吴航街道培青路23号（粤广记原味汤粉）",
    phone: "150-0595-0969",
    tags: ["粤式风味", "钵仔汤粉", "卤水烧腊"],
    featured: false,
    menu: [
      {
        category: "汤粉系列",
        items: [
          { name: "招牌猪杂汤粉", description: "", price: "¥10-15" },
          { name: "招牌瘦肉汤粉", description: "", price: "¥10-15" },
          { name: "潮汕肉卷汤粉", description: "", price: "¥13-16" },
          { name: "牛肉汤粉", description: "", price: "¥13-16" },
          { name: "三鲜汤粉", description: "", price: "¥13-16" },
          { name: "牛肉丸汤粉", description: "", price: "¥13-16" },
          { name: "脆皮烧鸭汤粉", description: "", price: "¥15-20" },
          { name: "蜜汁叉烧汤粉", description: "", price: "¥15-20" },
          { name: "秘制猪蹄汤粉", description: "", price: "¥20" }
        ]
      },
      {
        category: "卤水烧腊系列",
        items: [
          { name: "招牌隆江猪脚饭", description: "", price: "¥16-20" },
          { name: "潮汕肉卷饭", description: "", price: "¥16-20" },
          { name: "卤水鸭腿饭", description: "", price: "¥18" },
          { name: "卤水鸡腿饭", description: "", price: "¥15" },
          { name: "卤猪蹄饭", description: "", price: "¥20" },
          { name: "四点金饭", description: "", price: "¥20" },
          { name: "卤猪耳朵饭", description: "", price: "¥16" },
          { name: "卤味三宝饭", description: "", price: "¥18-25" },
          { name: "卤水大肠饭", description: "", price: "¥18-25" }
        ]
      },
      {
        category: "广式烧腊系列",
        items: [
          { name: "广式烧鸭饭", description: "", price: "¥16-20" },
          { name: "烧鸭腿饭", description: "", price: "¥18" },
          { name: "蜜汁叉烧饭", description: "", price: "¥16-20" },
          { name: "蜜汁全翅饭", description: "", price: "¥16-20" },
          { name: "蜜汁排骨饭", description: "", price: "¥23" },
          { name: "脆皮五花肉饭", description: "", price: "¥16-20" },
          { name: "白斩鸡饭", description: "", price: "¥16-20" },
          { name: "盐焗鸡腿饭", description: "", price: "¥16-20" }
        ]
      },
      {
        category: "自选双拼系列",
        items: [
          { name: "烧鸭拼叉烧", description: "", price: "¥20" },
          { name: "猪脚拼烧鸭", description: "", price: "¥20" },
          { name: "烧鸭拼白切鸡", description: "", price: "¥20" },
          { name: "烧鸭拼猪脚", description: "", price: "¥20" },
          { name: "自选双拼套餐", description: "", price: "¥20" }
        ]
      },
      {
        category: "单点小吃类",
        items: [
          { name: "飘香拌面", description: "", price: "¥5" },
          { name: "本地（沙县）扁肉", description: "", price: "¥5" },
          { name: "卤蛋", description: "", price: "¥2" },
          { name: "卤豆腐干", description: "", price: "¥2" },
          { name: "盐焗鸡腿", description: "", price: "¥8" },
          { name: "卤香鸡腿", description: "", price: "¥5" },
          { name: "脆皮烧鸭一例", description: "", price: "¥28" },
          { name: "蜜汁叉烧一例", description: "", price: "¥38" },
          { name: "烧鸭/半只", description: "", price: "时价" },
          { name: "叉烧", description: "", price: "时价" },
          { name: "白切鸡", description: "", price: "时价" },
          { name: "盐焗鸡", description: "", price: "时价" },
          { name: "脆皮五花肉", description: "", price: "时价" },
          { name: "蜜汁排骨一例", description: "", price: "¥58" }
        ]
      }
    ]
  },
  {
    id: 13,
    name: "小陈煲仔饭",
    cuisine: "广式/煲仔饭",
    icon: "restaurant",
    rating: "",
    location: "长乐区吴航街道培青路35号",
    phone: "198-9055-0922",
    tags: ["粤式风味", "广式煲仔饭", "新鲜食材现点现煲"],
    featured: false,
    menu: [
      {
        category: "经典煲仔饭",
        items: [
          { name: "肉沫茄子煲仔饭", description: "", price: "¥16" },
          { name: "榨菜肉饼煲仔饭", description: "", price: "¥17" },
          { name: "香菇肉饼煲仔饭", description: "", price: "¥18" },
          { name: "香菇滑鸡煲仔饭", description: "", price: "¥19" },
          { name: "广式腊肠煲仔饭", description: "", price: "¥19" },
          { name: "广式腊肉煲仔饭", description: "", price: "¥19" },
          { name: "腊鸭煲仔饭(偏咸)", description: "", price: "¥19" },
          { name: "川味麻辣肠煲仔饭", description: "", price: "¥19" },
          { name: "豉汁排骨煲仔饭", description: "", price: "¥22" },
          { name: "香芋排骨煲仔饭", description: "", price: "¥22" },
          { name: "窝蛋牛肉煲仔饭", description: "", price: "¥25" },
          { name: "加料说明", description: "以上肉类随意，双拼22元/三拼27元，加：窝蛋2元/煎蛋2元", price: "" }
        ]
      },
      {
        category: "双拼系列",
        items: [
          { name: "腊肠拼腊肉煲仔饭", description: "", price: "¥22" },
          { name: "腊肠拼腊鸭煲仔饭", description: "", price: "¥22" },
          { name: "腊肠拼滑鸡煲仔饭", description: "", price: "¥22" },
          { name: "腊肠拼排骨煲仔饭", description: "", price: "¥22" },
          { name: "滑鸡拼排骨煲仔饭", description: "", price: "¥22" }
        ]
      },
      {
        category: "三拼系列",
        items: [
          { name: "腊肠拼腊肉拼腊鸭", description: "", price: "¥27" },
          { name: "腊肠拼滑鸡拼排骨", description: "", price: "¥27" },
          { name: "腊肠拼滑鸡拼肉饼", description: "", price: "¥27" },
          { name: "腊肠拼滑鸡拼牛肉", description: "", price: "¥27" },
          { name: "腊肠拼滑鸡拼腊鸭", description: "", price: "¥27" }
        ]
      },
      {
        category: "特色煲仔饭",
        items: [
          { name: "酸辣鸡杂煲仔饭", description: "", price: "¥18" },
          { name: "红烧酱鸭煲仔饭", description: "", price: "¥19" },
          { name: "红烧肉煲仔饭(微辣)", description: "", price: "¥19" },
          { name: "咖喱鸡煲仔饭", description: "", price: "¥20" },
          { name: "辣子鸡煲仔饭", description: "", price: "¥20" },
          { name: "糖醋排骨煲仔饭", description: "", price: "¥23" }
        ]
      },
      {
        category: "套餐饭",
        items: [
          { name: "酸辣鸡杂饭", description: "", price: "¥18" },
          { name: "红烧酱鸭饭", description: "", price: "¥19" },
          { name: "红烧肉饭", description: "", price: "¥19" },
          { name: "咖喱鸡饭", description: "", price: "¥19" },
          { name: "辣子鸡饭", description: "", price: "¥19" },
          { name: "糖醋排骨饭", description: "", price: "¥22" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "温馨提示", description: "新鲜食材 现点现煲 | 欢迎提前预定", price: "" }
        ]
      }
    ]
  },
  {
    id: 14,
    name: "蜀南面馆",
    cuisine: "四川风味/面食",
    icon: "ramen_dining",
    rating: "",
    location: "",
    phone: "186-5008-0479",
    tags: ["麻辣鲜香", "四川风味", "汤面/粉", "抄手"],
    featured: false,
    menu: [
      {
        category: "汤面/粉类（招牌系列）",
        items: [
          { name: "红烧牛肉面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "红烧排骨面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "清汤牛肉面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "泡椒牛肉面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "泡椒肥肠面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "金汤肥牛面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "泡椒鸡杂面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "藤椒牛杂面/粉", description: "小份/大份", price: "¥16/¥17" },
          { name: "姜鸭面/粉", description: "小份/大份", price: "¥16/¥17" }
        ]
      },
      {
        category: "汤面/粉类（经典系列）",
        items: [
          { name: "红汤酸菜肉丝面/粉", description: "小份/大份", price: "¥13/¥14" },
          { name: "酸菜肉丝面/粉", description: "小份/大份", price: "¥13/¥14" },
          { name: "清汤豌杂面/粉", description: "小份/大份", price: "¥13/¥14" },
          { name: "红汤豌杂面/粉", description: "小份/大份", price: "¥13/¥14" },
          { name: "清汤面/粉", description: "小份/大份", price: "¥11/¥12" },
          { name: "红汤面/粉", description: "小份/大份", price: "¥11/¥12" },
          { name: "酸辣粉", description: "小份/大份", price: "¥10/¥11" }
        ]
      },
      {
        category: "抄手",
        items: [
          { name: "清汤抄手", description: "小份/大份", price: "¥13/¥16" },
          { name: "红汤抄手", description: "小份/大份", price: "¥13/¥16" },
          { name: "海鲜抄手", description: "小份/大份", price: "¥14/¥17" },
          { name: "金汤抄手", description: "小份/大份", price: "¥16/¥19" }
        ]
      },
      {
        category: "干拌类",
        items: [
          { name: "杂酱面", description: "小份/大份", price: "¥11/¥12" },
          { name: "宜宾燃面", description: "小份/大份", price: "¥13/¥14" },
          { name: "担担面", description: "小份/大份", price: "¥13/¥14" },
          { name: "干溜豌杂", description: "小份/大份", price: "¥13/¥14" },
          { name: "干拌抄手", description: "小份/大份", price: "¥13/¥16" },
          { name: "冷吃牛肉面", description: "小份/大份", price: "¥16/¥17" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "加面说明", description: "加面1元/一两", price: "" }
        ]
      }
    ]
  },
  {
    id: 15,
    name: "小鱼号",
    cuisine: "鱼汤/焖鱼煲/川菜",
    icon: "restaurant",
    rating: "",
    location: "小鱼号（长乐一中店）",
    phone: "137-7458-6451",
    tags: ["酸辣风味", "吃鱼汤·焖鱼煲", "五大经典口味"],
    featured: false,
    menu: [
      {
        category: "五大经典必吃（选主菜+汤底）",
        items: [
          { name: "老坛酸菜无骨鱼", description: "1-2人/2-3人/3-4人", price: "¥19/¥58/¥88" },
          { name: "老坛酸菜肉片", description: "1人/2-3人/3-4人", price: "¥22/¥68/¥98" },
          { name: "老坛酸菜黑鱼", description: "1人/2-3人/3-4人", price: "¥23/¥68/¥98" },
          { name: "柠檬酸汤田鸡", description: "1人/2-3人/3-4人", price: "¥24/¥78/¥108" },
          { name: "柠檬酸汤鸭胗", description: "1人/2-3人/3-4人", price: "¥24/¥68/¥98" },
          { name: "川香水煮肥牛", description: "1人/2-3人/3-4人", price: "¥25/¥68/¥98" },
          { name: "番茄维C脆鱼", description: "1人/2-3人/3-4人", price: "¥26/¥78/¥108" },
          { name: "青花椒双拼", description: "1人/2-3人/3-4人", price: "¥26/¥78/¥108" },
          { name: "青花椒牛肉", description: "1人/2-3人/3-4人", price: "¥27/¥98/¥128" }
        ]
      },
      {
        category: "加料推荐",
        items: [
          { name: "牛肉", description: "", price: "¥15" },
          { name: "脆鱼", description: "", price: "¥14" },
          { name: "肥牛", description: "", price: "¥13" },
          { name: "田鸡", description: "", price: "¥13" },
          { name: "黑鱼", description: "", price: "¥12" },
          { name: "肉片", description: "", price: "¥12" },
          { name: "鸭胗", description: "", price: "¥11" },
          { name: "无骨鱼", description: "", price: "¥10" },
          { name: "木耳", description: "", price: "¥5" },
          { name: "金针菇", description: "", price: "¥5" },
          { name: "豆泡", description: "", price: "¥5" },
          { name: "鸭血", description: "", price: "¥5" },
          { name: "海带结", description: "", price: "¥5" },
          { name: "腐竹", description: "", price: "¥5" },
          { name: "魔芋结", description: "", price: "¥5" },
          { name: "泡面", description: "", price: "¥5" }
        ]
      },
      {
        category: "下饭锅仔系列（+2.8元2片贴饼子）",
        items: [
          { name: "铁锅鸡+贴饼", description: "", price: "¥23.8" },
          { name: "外婆家炖豆角", description: "", price: "¥9.9" },
          { name: "咖喱茄子锅", description: "", price: "¥17.8" }
        ]
      },
      {
        category: "小炒肉系列（实锤新品）",
        items: [
          { name: "番芹藕竹小炒肉", description: "", price: "¥23.8" },
          { name: "黑笋青椒炒鸡+贴饼", description: "", price: "¥23.8" }
        ]
      },
      {
        category: "冒菜系列",
        items: [
          { name: "冒鸭血", description: "", price: "¥12" },
          { name: "腌香兔子冒鸭血", description: "", price: "¥15" },
          { name: "冒肥牛", description: "", price: "¥13" }
        ]
      },
      {
        category: "来线系列",
        items: [
          { name: "港式墨汁米线", description: "", price: "¥12" },
          { name: "渔夫酸菜肥牛米线", description: "", price: "¥16.8" },
          { name: "金汤肥牛酸辣米线", description: "", price: "¥16.8" },
          { name: "番茄肥牛米线", description: "", price: "¥16.8" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "温馨提示", description: "学生用餐享优惠特价 | 五大经典：老坛酸菜、柠檬酸汤、川香水煮、番茄维C、青花椒", price: "" }
        ]
      }
    ]
  },
  {
    id: 16,
    name: "周周吃不腻",
    cuisine: "馄饨/汤面/水饺",
    icon: "ramen_dining",
    rating: "",
    location: "培青路49号",
    phone: "134-0051-3030",
    tags: ["传统小吃", "招牌必点", "新鲜肉片", "每日现包"],
    featured: false,
    menu: [
      {
        category: "水饺",
        items: [
          { name: "玉米猪肉水饺", description: "10个/15个", price: "¥12/¥16" },
          { name: "香菇猪肉水饺", description: "10个/15个", price: "¥12/¥16" },
          { name: "韭菜猪肉水饺", description: "10个/15个", price: "¥12/¥16" }
        ]
      },
      {
        category: "本地美食",
        items: [
          { name: "小笼包", description: "4个", price: "¥5" },
          { name: "拌面/拌粉干", description: "", price: "¥6" },
          { name: "本地扁肉", description: "", price: "¥6" },
          { name: "煎蛋", description: "", price: "¥2" }
        ]
      },
      {
        category: "店长推荐套餐",
        items: [
          { name: "全家福馄饨", description: "鲜肉3+咸蛋2+炖蛋2+鲜虾2+玉米芝士2+香菇2", price: "¥23" },
          { name: "花生酱拌肉片 + 扁肉", description: "", price: "¥18" },
          { name: "黄剁椒拌肉片 + 扁肉", description: "", price: "¥18" },
          { name: "新鲜汤肉片 + 拌粉干/拌面", description: "", price: "¥16" },
          { name: "鲜肉馄饨 + 拌粉干/拌面", description: "", price: "¥16" }
        ]
      },
      {
        category: "鲜肉馄饨面/竹升面",
        items: [
          { name: "鲜肉大馄饨面", description: "10个", price: "¥16" },
          { name: "香菇大馄饨面", description: "10个", price: "¥18" },
          { name: "藤椒大馄饨面", description: "10个", price: "¥15" },
          { name: "玉米芝士大馄饨面", description: "10个", price: "¥19" },
          { name: "皮蛋馄饨面", description: "10个", price: "¥20" },
          { name: "咸蛋黄馄饨面", description: "10个", price: "¥20" },
          { name: "鲜虾馄饨面", description: "10个", price: "¥21" }
        ]
      },
      {
        category: "馄饨（小份/大份）",
        items: [
          { name: "鲜肉大馄饨", description: "10个/15个", price: "¥12/¥17" },
          { name: "香菇大馄饨", description: "10个/15个", price: "¥14/¥20" },
          { name: "藤椒大馄饨", description: "10个/15个", price: "¥14/¥20" },
          { name: "玉米芝士大馄饨", description: "10个/15个", price: "¥15/¥21" },
          { name: "虾重馄饨", description: "10个/15个", price: "¥16/¥23" },
          { name: "咸蛋黄馄饨", description: "10个/15个", price: "¥16/¥23" },
          { name: "鲜虾馄饨", description: "10个/15个", price: "¥17/¥24" }
        ]
      },
      {
        category: "新鲜肉片（小份/大份）",
        items: [
          { name: "新鲜汤肉片", description: "", price: "¥12/¥14" },
          { name: "花生酱拌肉片", description: "", price: "¥14/¥16" },
          { name: "黄剁椒拌肉片", description: "", price: "¥14/¥16" }
        ]
      },
      {
        category: "新品上市",
        items: [
          { name: "纯肉烤肠", description: "", price: "¥6" },
          { name: "烤肉拌饭", description: "", price: "¥15" },
          { name: "咖喱鸡肉饭", description: "", price: "¥16" },
          { name: "肉沫茄子盖饭", description: "", price: "¥15" },
          { name: "青椒肉丝盖饭", description: "", price: "¥16" },
          { name: "红烧牛肉面", description: "", price: "¥18" }
        ]
      },
      {
        category: "实惠套餐",
        items: [
          { name: "鲜肉馄饨/肉片(小份)+小笼包(4个)", description: "", price: "¥16" },
          { name: "扁肉+小笼包(4个)", description: "", price: "¥10" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "加料说明", description: "另加竹升面4元 | 三养火鸡面拌馄饨另加6元 | 另加泡面2元", price: "" },
          { name: "特色说明", description: "只用鲜腿肉 肉足淀粉少 | Q弹嚼劲好 不加添加剂 | 每日现包 地道美味 | 三大灵魂佐料：福建米醋、魔鬼辣椒、东海紫菜虾米", price: "" }
        ]
      }
    ]
  },
  {
    id: 17,
    name: "宗吉家",
    cuisine: "日式料理/定食/面食",
    icon: "ramen_dining",
    rating: "",
    location: "",
    phone: "187-0590-5751",
    tags: ["日式风味", "定食套餐", "面食丰富", "寿司海苔卷"],
    featured: false,
    menu: [
      {
        category: "定食+小蝶+汤",
        items: [
          { name: "温厚蛋肥牛饭", description: "", price: "27元" },
          { name: "滑蛋肥牛饭", description: "", price: "28元" },
          { name: "泡菜肥牛饭", description: "", price: "27元" },
          { name: "芝士肥牛饭", description: "", price: "27元" },
          { name: "秘制肥牛拌饭", description: "", price: "24元" }
        ]
      },
      {
        category: "双拼定食+小蝶+汤",
        items: [
          { name: "蜜烤鳗鱼+炙烧鸡胸肉", description: "招牌人气", price: "32元" },
          { name: "日式肉酱海苔香卷", description: "", price: "18元" },
          { name: "炙烧鸡胸肉海苔香卷", description: "", price: "18元" },
          { name: "炙烧鸡胸肉照烧鸡腿肉", description: "", price: "18元" },
          { name: "照烧松阪肉海苔香卷", description: "", price: "19元" },
          { name: "芙蓉虾海苔香卷", description: "", price: "20元" }
        ]
      },
      {
        category: "寿司海苔卷",
        items: [
          { name: "4个装", description: "日式肉酱海苔香卷", price: "10元" },
          { name: "8个装", description: "日式肉酱海苔香卷", price: "18元" },
          { name: "芝士滑蛋奶盖蟹肉", description: "", price: "45元" },
          { name: "日式小火锅（配米饭）", description: "", price: "42元" }
        ]
      },
      {
        category: "日式面食",
        items: [
          { name: "浓汤豚骨拉面", description: "", price: "26元" },
          { name: "浓厚豚骨拉面（加长推荐）", description: "", price: "26元" },
          { name: "担担肉酱拉面（加长推荐）", description: "", price: "26元" },
          { name: "麻辣味噌拉面", description: "", price: "27元" },
          { name: "牛肉寿喜乌冬面", description: "", price: "22元" }
        ]
      },
      {
        category: "单品（小吃）",
        items: [
          { name: "日式炸鸡块（糖心蛋）", description: "", price: "4元" },
          { name: "温泉蛋", description: "", price: "4元" },
          { name: "芝士片", description: "", price: "4元" },
          { name: "韩式土豆泥", description: "", price: "6元" },
          { name: "鲜奶布丁", description: "", price: "7元" },
          { name: "味付螺蛳", description: "", price: "25元" },
          { name: "冬阴功海鲜汤底", description: "", price: "30元" },
          { name: "浓香咖喱猪排饭", description: "", price: "28元" },
          { name: "日式叉烧饭", description: "", price: "25元" },
          { name: "日式猪软骨饭", description: "", price: "27元" },
          { name: "日式照烧松阪肉饭", description: "", price: "23元" },
          { name: "芝士培根饭", description: "", price: "18元" },
          { name: "日式培根饭", description: "（微辣）", price: "19元" }
        ]
      },
      {
        category: "汤品",
        items: [
          { name: "石锅肥牛豆腐汤", description: "", price: "25元" },
          { name: "石锅肥牛番茄汤", description: "", price: "25元" },
          { name: "冬日功海鲜汤底", description: "", price: "32元" }
        ]
      },
      {
        category: "饮料系列",
        items: [
          { name: "可乐、雪碧、芬达", description: "", price: "4元" },
          { name: "王老吉、维他柠檬茶", description: "", price: "7元" },
          { name: "焦糖布丁（精品）", description: "", price: "7元" },
          { name: "自制日式叉烧（加长推荐）", description: "", price: "20元" },
          { name: "可乐、雪碧", description: "", price: "8元" },
          { name: "炸薯条", description: "", price: "7元" }
        ]
      },
      {
        category: "炙烤系列",
        items: [
          { name: "炙烤鸡肉+芝士培根", description: "照烧松阪肉", price: "25元" },
          { name: "柠檬鸡腿+炙烤鸡肉", description: "", price: "26元" },
          { name: "柠香鸡腿+炙烤鸡肉", description: "照烧松阪肉", price: "26元" }
        ]
      },
      {
        category: "炸物天妇罗",
        items: [
          { name: "炸虾天妇罗", description: "", price: "27元" },
          { name: "炸鱿鱼天妇罗", description: "", price: "40元" }
        ]
      },
      {
        category: "和风炸鸡",
        items: [
          { name: "和风炸鸡", description: "", price: "23元" }
        ]
      },
      {
        category: "其他",
        items: [
          { name: "芝士鸡肉饭", description: "", price: "24元" },
          { name: "芝士鸡肉面", description: "", price: "24元" },
          { name: "浓香咖喱猪肉饭", description: "", price: "25元" }
        ]
      },
      {
        category: "特色推荐",
        items: [
          { name: "日式肉酱（加长推荐）", description: "", price: "20元" },
          { name: "和风炸鸡", description: "", price: "22元" },
          { name: "炸薯天妇罗", description: "", price: "22元" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "营业时间", description: "上午10:00 - 晚上10:00", price: "" },
          { name: "联系电话", description: "187-0590-5751（微信同号）", price: "" },
          { name: "地址", description: "一中店地址：长乐区吴航街道培青路22号", price: "" },
          { name: "地址", description: "锦江店地址：长乐区航城街道锦江路一区10号（肯德基对面D-10号）", price: "" }
        ]
      }
    ]
  },
  {
    id: 18,
    name: "中国兰州拉面",
    cuisine: "西北风味/兰州拉面",
    icon: "ramen_dining",
    rating: "",
    location: "",
    phone: "136-9681-9482",
    tags: ["西北风味", "兰州拉面", "刀削面", "盖浇饭齐全"],
    featured: false,
    menu: [
      {
        category: "点餐牌（另加）",
        items: [
          { name: "羊肉串", description: "", price: "5元" },
          { name: "牛肉", description: "", price: "12元" },
          { name: "羊肉", description: "", price: "15元" },
          { name: "煎蛋", description: "", price: "2元" },
          { name: "打包盒", description: "", price: "1元" }
        ]
      },
      {
        category: "面食类",
        items: [
          { name: "牛肉拉面", description: "", price: "13元" },
          { name: "牛杂拉面", description: "", price: "15元" },
          { name: "羊肉拉面", description: "", price: "15元" },
          { name: "鸡蛋拉面", description: "", price: "13元" },
          { name: "酸菜牛肉面", description: "", price: "17元" },
          { name: "红烧牛肉面", description: "", price: "19元" },
          { name: "西红柿鸡蛋面", description: "", price: "15元" },
          { name: "牛肉刀削面", description: "", price: "13元" },
          { name: "羊肉刀削面", description: "", price: "15元" },
          { name: "鸡蛋刀削面", description: "", price: "13元" },
          { name: "酸菜刀削面", description: "", price: "17元" },
          { name: "红烧刀削面", description: "", price: "19元" },
          { name: "牛杂刀削面", description: "", price: "15元" },
          { name: "麻辣牛肉面", description: "", price: "15元" },
          { name: "香辣牛肉面", description: "", price: "15元" },
          { name: "香辣刀削面", description: "", price: "15元" },
          { name: "麻辣刀削面", description: "", price: "15元" },
          { name: "酸辣牛肉面", description: "", price: "17元" },
          { name: "牛杂炒拉面", description: "", price: "19元" },
          { name: "牛肉炒拉面", description: "", price: "17元" },
          { name: "羊肉炒拉面", description: "", price: "19元" },
          { name: "鸡蛋炒拉面", description: "", price: "17元" },
          { name: "鸡蛋炒刀削面", description: "", price: "17元" },
          { name: "牛肉炒刀削面", description: "", price: "17元" },
          { name: "羊肉炒刀削面", description: "", price: "19元" },
          { name: "牛肉炒刀削面", description: "", price: "19元" },
          { name: "牛杂炒刀削面", description: "", price: "19元" },
          { name: "羊肉干拌面", description: "", price: "21元" },
          { name: "牛肉干拌面", description: "", price: "19元" },
          { name: "新疆拌面", description: "", price: "21元" },
          { name: "牛肉烩面", description: "", price: "17元" },
          { name: "羊肉烩面", description: "", price: "19元" },
          { name: "炸酱面", description: "", price: "16元" },
          { name: "牛肉凉面", description: "", price: "16元" },
          { name: "牛肉蒸饺", description: "", price: "15元" }
        ]
      },
      {
        category: "炒饭、汤类",
        items: [
          { name: "兰州炒饭", description: "", price: "15元" },
          { name: "羊肉炒饭", description: "", price: "15元" },
          { name: "酸菜牛肉炒饭", description: "", price: "15元" },
          { name: "牛肉炒饭", description: "", price: "13元" },
          { name: "蛋炒饭", description: "", price: "13元" },
          { name: "肉夹馍", description: "", price: "10元" },
          { name: "煎饼", description: "", price: "5元" },
          { name: "牛肉粉丝汤", description: "", price: "15元" },
          { name: "西红柿蛋汤", description: "", price: "12元" },
          { name: "羊肉汤", description: "", price: "17元" },
          { name: "牛杂汤", description: "", price: "25元" },
          { name: "羊肉泡馍", description: "", price: "19元" },
          { name: "牛肉泡馍", description: "", price: "17元" },
          { name: "牛肉水饺", description: "", price: "15元" }
        ]
      },
      {
        category: "炒粉",
        items: [
          { name: "鸡蛋炒粉", description: "", price: "16元" },
          { name: "牛肉炒粉", description: "", price: "17元" },
          { name: "羊肉炒粉", description: "", price: "19元" }
        ]
      },
      {
        category: "汤粉",
        items: [
          { name: "牛肉酸辣粉", description: "", price: "16元" },
          { name: "羊肉酸辣粉", description: "", price: "18元" },
          { name: "牛肉粉", description: "", price: "16元" },
          { name: "羊肉粉", description: "", price: "18元" }
        ]
      },
      {
        category: "特色炒菜",
        items: [
          { name: "新疆大盘鸡", description: "", price: "100元" },
          { name: "新疆小盘鸡", description: "", price: "80元" },
          { name: "孜然牛肉", description: "", price: "45元" },
          { name: "孜然羊肉", description: "", price: "50元" },
          { name: "牙签羊肉", description: "", price: "55元" },
          { name: "牙签牛肉", description: "", price: "50元" },
          { name: "青椒炒牛肉", description: "", price: "40元" },
          { name: "爆炒牛杂", description: "", price: "50元" },
          { name: "洋葱炒牛肉", description: "", price: "40元" },
          { name: "红烧牛肉", description: "", price: "45元" },
          { name: "蘑菇炒牛肉", description: "", price: "40元" },
          { name: "葱爆牛肉", description: "", price: "40元" },
          { name: "土豆烧牛肉", description: "", price: "40元" },
          { name: "蒜苔炒牛肉", description: "", price: "40元" },
          { name: "木耳炒牛肉", description: "", price: "40元" }
        ]
      },
      {
        category: "凉菜、素炒菜",
        items: [
          { name: "凉拌土豆丝", description: "", price: "14元" },
          { name: "凉拌西红柿", description: "", price: "14元" },
          { name: "凉拌黄瓜", description: "", price: "14元" },
          { name: "凉拌春菜", description: "", price: "12元" },
          { name: "糖拌黄瓜", description: "", price: "14元" },
          { name: "凉拌牛肉", description: "", price: "40元" },
          { name: "酸辣白菜", description: "", price: "15元" },
          { name: "青椒土豆丝", description: "", price: "15元" },
          { name: "番茄炒蛋", description: "", price: "18元" },
          { name: "葱花炒蛋", description: "", price: "18元" },
          { name: "酸辣土豆丝", description: "", price: "15元" },
          { name: "凉拌牛杂", description: "", price: "45元" }
        ]
      },
      {
        category: "盖浇饭/面",
        items: [
          { name: "牛杂盖浇饭/面", description: "", price: "20元" },
          { name: "大盘鸡盖浇饭/面", description: "", price: "22元" },
          { name: "洋葱羊肉盖浇饭/面", description: "", price: "19元" },
          { name: "洋葱牛肉盖浇饭/面", description: "", price: "17元" },
          { name: "木耳牛肉盖浇饭/面", description: "", price: "18元" },
          { name: "木耳羊肉盖浇饭/面", description: "", price: "20元" },
          { name: "红烧鸡块盖浇饭/面", description: "", price: "20元" },
          { name: "孜然牛肉肉盖浇饭/面", description: "", price: "19元" },
          { name: "孜然羊肉盖浇饭/面", description: "", price: "21元" },
          { name: "青椒牛肉盖浇饭/面", description: "", price: "17元" },
          { name: "青椒羊肉盖浇饭/面", description: "", price: "19元" },
          { name: "番茄炒蛋盖浇饭/面", description: "", price: "17元" },
          { name: "葱爆牛肉盖浇饭/面", description: "", price: "17元" },
          { name: "蘑菇炒牛肉盖浇饭/面", description: "", price: "18元" },
          { name: "蘑菇炒羊肉盖浇饭/面", description: "", price: "20元" },
          { name: "蒜苔炒牛肉盖浇饭/面", description: "", price: "18元" },
          { name: "蒜苔炒羊肉盖浇饭/面", description: "", price: "20元" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "订餐电话", description: "136-9681-9482", price: "" }
        ]
      }
    ]
  },
  {
    id: 19,
    name: "有饺劲",
    cuisine: "传统小吃/手工水饺",
    icon: "ramen_dining",
    rating: "",
    location: "长乐区步行街锦东酒店对面",
    phone: "187-5070-2388",
    tags: ["传统小吃", "手工水饺", "鲜肉现包", "面食/炒饭齐全"],
    featured: false,
    menu: [
      {
        category: "鲜饺系列（小份10个/中份15个/大份20个）",
        items: [
          { name: "玉米鲜饺", description: "小份/中份/大份", price: "12元/16元/20元" },
          { name: "韭菜鲜饺", description: "小份/中份/大份", price: "12元/16元/20元" },
          { name: "大葱鲜饺", description: "小份/中份/大份", price: "12元/16元/20元" },
          { name: "香菇鲜饺", description: "小份/中份/大份", price: "12元/16元/20元" },
          { name: "白菜鲜饺", description: "小份/中份/大份", price: "12元/16元/20元" },
          { name: "鲜虾肉饺", description: "小份/中份/大份", price: "15元/22元/28元" }
        ]
      },
      {
        category: "煎饺系列（15个/20个）",
        items: [
          { name: "特色鲜肉煎饺", description: "15个/20个", price: "18元/22元" },
          { name: "特色鲜虾煎饺", description: "15个/20个", price: "25元/30元" }
        ]
      },
      {
        category: "水饺（按斤）",
        items: [
          { name: "猪肉水饺", description: "1斤装", price: "22元/斤" },
          { name: "鲜虾水饺", description: "1斤装", price: "30元/斤" }
        ]
      },
      {
        category: "面/粉类",
        items: [
          { name: "西红柿牛肉面/粉", description: "", price: "17元" },
          { name: "酸菜牛肉面/粉", description: "", price: "17元" },
          { name: "牛滑捞化", description: "", price: "15元" },
          { name: "三鲜捞化", description: "", price: "15元" },
          { name: "酸菜炒粉干", description: "", price: "15元" },
          { name: "肉丝鸡蛋炒细粉", description: "", price: "15元" }
        ]
      },
      {
        category: "炒饭类",
        items: [
          { name: "扬州炒饭", description: "", price: "17元/份" }
        ]
      },
      {
        category: "盖浇饭类",
        items: [
          { name: "西红柿火腿盖浇饭", description: "", price: "17元/份" },
          { name: "牛肉土豆咖喱饭", description: "", price: "20元/份" },
          { name: "鲜虾咖喱饭", description: "", price: "20元/份" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "订餐热线", description: "18750702388", price: "" },
          { name: "订餐地址", description: "长乐区步行街锦东酒店对面", price: "" },
          { name: "特色说明", description: "手工水饺 鲜肉现包", price: "" }
        ]
      }
    ]
  },
  {
    id: 20,
    name: "柒劲锅锅骨汤米粉",
    cuisine: "酸辣风味/骨汤米粉",
    icon: "ramen_dining",
    rating: "",
    location: "长乐区吴航街道资圣路128号",
    phone: "173-0590-8769",
    tags: ["酸辣风味", "骨汤米粉", "口味丰富", "火锅/酸菜/番茄/泡椒"],
    featured: false,
    menu: [
      {
        category: "滋补骨汤系列（不辣）",
        items: [
          { name: "大骨浓汤米粉", description: "", price: "14元/份" },
          { name: "骨汤酥肉米粉", description: "", price: "18元/份" },
          { name: "骨汤猪肝米粉", description: "", price: "18元/份" },
          { name: "骨汤肉丸米粉", description: "", price: "16元/份" },
          { name: "骨汤肉丝米粉", description: "", price: "18元/份" },
          { name: "骨汤虾滑米粉", description: "", price: "23元/份" },
          { name: "骨汤肥牛米粉", description: "", price: "22元/份" },
          { name: "骨汤牛肉米粉", description: "", price: "25元/份" }
        ]
      },
      {
        category: "成都特色火锅系列（特辣）🌶️🔥",
        items: [
          { name: "劲爆火锅米粉", description: "", price: "16元/份" },
          { name: "劲爆火锅猪肝米粉", description: "", price: "18元/份" },
          { name: "劲爆火锅酥肉米粉", description: "", price: "20元/份" },
          { name: "劲爆火锅肥牛米粉", description: "", price: "23元/份" },
          { name: "劲爆火锅牛肉米粉", description: "", price: "25元/份" },
          { name: "劲爆火锅虾滑米粉", description: "", price: "24元/份" },
          { name: "劲爆火锅肉丸米粉", description: "", price: "18元/份" },
          { name: "劲爆火锅肉丝米粉", description: "", price: "18元/份" },
          { name: "劲爆火锅肥肠米粉", description: "", price: "25元/份" },
          { name: "劲爆火锅虎皮凤爪米粉", description: "", price: "25元/份" }
        ]
      },
      {
        category: "脆爽酸菜系列（微辣）",
        items: [
          { name: "酸菜米粉", description: "", price: "15元/份" },
          { name: "酸菜酥肉米粉", description: "", price: "20元/份" },
          { name: "酸菜猪肝米粉", description: "", price: "18元/份" },
          { name: "酸菜肉丸米粉", description: "", price: "16元/份" },
          { name: "酸菜肉丝米粉", description: "", price: "18元/份" },
          { name: "酸菜肥牛米粉", description: "", price: "23元/份" },
          { name: "酸菜肥肠米粉", description: "", price: "25元/份" },
          { name: "酸菜牛肉米粉", description: "", price: "25元/份" },
          { name: "酸菜虾滑米粉", description: "", price: "24元/份" }
        ]
      },
      {
        category: "极鲜番茄系列（不辣）🍅",
        items: [
          { name: "番茄米粉", description: "", price: "14元/份" },
          { name: "番茄酥肉米粉", description: "", price: "20元/份" },
          { name: "番茄肉丸米粉", description: "", price: "16元/份" },
          { name: "番茄肉丝米粉", description: "", price: "18元/份" },
          { name: "番茄肥牛米粉", description: "", price: "24元/份" },
          { name: "番茄虾滑米粉", description: "", price: "24元/份" },
          { name: "番茄牛肉米粉", description: "", price: "25元/份" },
          { name: "番茄猪肝米粉", description: "", price: "18元/份" }
        ]
      },
      {
        category: "贵州酸汤系列（不辣）",
        items: [
          { name: "酸汤米粉", description: "", price: "15元/份" },
          { name: "酸汤酥肉米粉", description: "", price: "20元/份" },
          { name: "酸汤猪肝米粉", description: "", price: "18元/份" },
          { name: "酸汤鸡杂米粉", description: "", price: "16元/份" }
        ]
      },
      {
        category: "爽辣泡椒系列（特辣）🌶️🌶️",
        items: [
          { name: "泡椒米粉", description: "", price: "15元/份" },
          { name: "泡椒酥肉米粉", description: "", price: "20元/份" },
          { name: "泡椒猪肝米粉", description: "", price: "18元/份" },
          { name: "泡椒鸡杂米粉", description: "", price: "20元/份" },
          { name: "泡椒肉丸米粉", description: "", price: "16元/份" },
          { name: "泡椒肥牛米粉", description: "", price: "23元/份" },
          { name: "泡椒肥肠米粉", description: "", price: "25元/份" },
          { name: "泡椒牛肉米粉", description: "", price: "25元/份" },
          { name: "泡椒肉丝米粉", description: "", price: "18元/份" },
          { name: "泡椒虎皮凤爪米粉", description: "", price: "25元/份" }
        ]
      },
      {
        category: "特色南乳炸鸡系列 🍗",
        items: [
          { name: "炸鸡排", description: "", price: "10元/份" },
          { name: "炸鸡腿", description: "", price: "8元/份" },
          { name: "炸鸡米花", description: "", price: "8元/份" },
          { name: "香炸小酥肉", description: "", price: "8元/份" }
        ]
      },
      {
        category: "加料区（自由搭配）",
        items: [
          { name: "3元区", description: "炸蛋、木耳丝、海带丝、时令蔬菜、豆泡、鸭血", price: "3元" },
          { name: "6元区", description: "猪肝、午餐肉、酥肉、鸡杂、卤丸子、肉丝、鹌鹑蛋、肉酱", price: "6元" },
          { name: "9元区", description: "牛肉、虾滑、肥肠、虎皮凤爪", price: "9元" }
        ]
      },
      {
        category: "备注",
        items: [
          { name: "服务热线", description: "17305908769", price: "" },
          { name: "地址", description: "长乐区吴航街道资圣路128号", price: "" },
          { name: "品牌名称", description: "柒劲锅锅® 骨汤米粉", price: "" }
        ]
      }
    ]
  }
];

const cuisines = ["全部", "酸辣风味", "清淡口味", "麻辣鲜香", "传统小吃", "西北风味", "粤式风味", "西式快餐", "西式简餐", "甜品小食", "日式料理"];
