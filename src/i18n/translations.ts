export type Locale = "zh" | "en" | "es";

export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[]; buildings: { title: string; items: string[]; conclusion: string } };
  ecology: { title: string; sections: EcologySection[] };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; animals: { title: string; content: string }; bring: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "公园概览", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "生态自然、传统文化与历史建筑的完美融合", title: "瓜亚基尔历史公园", subtitle: "Parque Histórico de Guayaquil", cta: "探索公园之旅" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "公园概览",
      p1: "瓜亚基尔历史公园位于厄瓜多尔瓜亚斯省瓜亚基尔市郊的桑博龙东半岛，占地约 8 公顷。这是一个融合了生态自然、传统文化与历史建筑的综合性主题公园，同时兼具露天博物馆和小型动物园的性质。\n\n公园旨在保护和展示厄瓜多尔沿海地区的生物多样性，以及 19 世纪末至 20 世纪初的城市与乡村历史。整个公园被巧妙地划分为三个核心主题区：野生动植物区、传统农业区、历史建筑区。",
      p2: "公园环境幽静，非常适合家庭出游、生态摄影爱好者以及对人文历史感兴趣的游客。园内设有由历史建筑改造而成的精品酒店和提供当地美食的景观餐厅。建议安排在清晨或傍晚时分游览，此时的光线非常适合拍照并能欣赏到美丽的日落。",
      highlights: { title: "景点速览", items: ["地理位置：厄瓜多尔，桑博龙东市，Av. Rio Esmeraldas", "面积：约 8 公顷", "三大主题区：野生动植物区、传统农业区、历史建筑区", "开放时间：周三至周日 09:00 – 17:00（周一、周二闭园）", "配套设施：精品酒店、景观餐厅"] },
      timeline: { title: "公园发展时间轴", events: [
        { period: "1997年: 构想与立项", description: "由厄瓜多尔中央银行（Banco Central del Ecuador）发起，旨在抢救性保护瓜亚基尔日益消失的传统木制建筑与红树林生态。" },
        { period: "1999年 - 2000年: 一期工程开放", description: "野生动植物区与传统农业区率先落成并向公众开放，成为展示厄瓜多尔沿海生物多样性的重要窗口。" },
        { period: "2004年: 历史建筑区落成", description: "包括朱利安·科罗内尔故居（Casa Julián Coronel）在内的多座19世纪末木制建筑，被编号拆解后在园内成功异地复原。" },
        { period: "2010年代至今: 管理权移交与现代化", description: "公园管理权移交至政府公共空间管理部门，并引入了高端精品酒店与餐饮，以可持续的模式维护这片文化遗产。" }
      ]},
      management: { title: "公园的管理与官方机构", content: "瓜亚基尔历史公园由瓜亚斯省政府和桑博龙东市政府共同支持和管理。公园内设有游客服务中心，提供园区地图、导游服务和基本咨询服务。" }
    },
    history: {
      title: "历史背景与文化记忆",
      intro: "在瓜亚基尔历史公园的“历史建筑区（Zona Histórico-Arquitectónica）”漫步，仿佛踏入了一个被时光封存的平行时空。这里矗立的木制洋楼与复古街道，不仅是建筑学的奇迹，更是厄瓜多尔一段辉煌与苦难交织的历史见证。要读懂这些建筑，必须回到 19 世纪末那个被称为“可可热潮（La Era del Gran Cacao）”的黄金岁月。",
      sections: [
        { subtitle: "1. 黄金时代：厄瓜多尔的“可可热潮”", content: "19 世纪末至 20 世纪初，厄瓜多尔迎来了经济的鼎盛时期。凭借得天独厚的沿海热带气候，厄瓜多尔成为了当时全球最大的优质可可（Arriba Cacao）出口国。作为国家最重要的港口，瓜亚基尔汇聚了巨额的财富。\n\n这一时期，诞生了一个被称为“Gran Cacao（可可大亨）”的新兴富裕阶层。这些庄园主和出口商频繁往返于南美与欧洲之间，深受巴黎“美好年代（Belle Époque）”文化的影响。他们不仅带回了欧洲的奢侈品与生活方式，更渴望将瓜亚基尔打造成一座“热带的巴黎”。" },
        { subtitle: "2. 热带幻梦：用木头雕刻的法式风情", content: "“可可大亨”们希望在瓜亚基尔复制欧洲的新古典主义和哥特式建筑，但他们面临着一个巨大的地理挑战：瓜亚基尔处于炎热潮湿的热带，且地震频发，传统的欧洲石材和大理石不仅运输成本高昂，且极易在沼泽地基上沉陷或在地震中倒塌。\n\n于是，当地的能工巧匠创造出了一种独特的建筑折中主义：以极其坚硬的本土硬木（如愈疮木 Guayacán 和红木）为核心骨架，结合传统的填杂泥木（Bahareque）工艺，在外观上精雕细琢，完美模仿出欧洲石制建筑的罗马柱、雕花阳台和百叶窗。这种将欧洲审美与热带实用主义完美结合的建筑风格，成为了瓜亚基尔独有的城市名片。" },
        { subtitle: "3. 历史劫难：1896年瓜亚基尔大火 (El Gran Incendio)", content: "然而，这座繁华的木制之城隐藏着致命的隐患。1896 年 10 月 5 日，一场灾难性的烈火席卷了瓜亚基尔。由于建筑多由干燥的树脂木材建成，加之旱季的强风，大火持续了三天三夜，摧毁了城市近半数的街区，数以万计的居民流离失所，曾经辉煌的“可可之都”几乎化为灰烬。\n\n大火之后，城市虽然在原址上重建，但随着 20 世纪混凝土和现代建筑材料的普及，那些传统的精美木制洋楼开始在城市化进程中被迅速拆除或遗弃。瓜亚基尔面临着彻底失去其 19 世纪城市记忆的危机。" },
        { subtitle: "4. 时间胶囊：历史公园的抢救与重现", content: "这正是瓜亚基尔历史公园建立的核心使命。为了挽救濒临消失的建筑遗产，从 20 世纪 90 年代末开始，抢救团队在瓜亚基尔市区将数栋具有代表性的百年木制建筑（其中包括在 1896 年大火中幸存的珍贵孤品，以及大火后原样重建的豪宅）进行了极其复杂的“外科手术式”保护。\n\n每一栋建筑都被仔细测量、编号，随后被小心翼翼地拆解成数以千计的木质构件，最终跨越河流，在桑博龙东半岛的历史公园内被原样复原。" }
      ],
      buildings: {
        title: "代表性建筑看点",
        items: [
          "Casa Julián Coronel（朱利安·科罗内尔故居）：典型的大亨宅邸，展示了当时上层阶级的奢华生活。",
          "Banco Territorial（领土银行旧址）：见证了可可贸易带来的金融繁荣，其木制的营业大厅极具时代特征。",
          "Hospicio Corazón de Jesús（耶稣之心济贫院）：展现了当时社会的慈善事业与公共建筑风格。"
        ],
        conclusion: "如今，这些建筑不再仅仅是空洞的躯壳。当您穿过这些重生的百年木廊，听到演员们穿着 19 世纪服饰在街头演绎当时的市井生活时，那段关于可可、财富、烈火与重生的厄瓜多尔史诗，便在此刻具象化了。"
      }
    },
    ecology: {
      title: "生态保育价值",
      sections: [
        { subtitle: "生态庇护所（Refugio Ecológico）", content: "瓜亚基尔历史公园绝不仅仅是一个小型动物园，它更是一个重要的濒危物种繁育基地与生态庇护所。这里的野生动植物区致力于救助和保护厄瓜多尔特有的野生动物，例如雄伟的角雕（Harpy Eagle）和美洲豹（Jaguar）。\n\n公园内还重现了脆弱的红树林（Manglares）生态系统。红树林不仅是众多鸟类和海洋生物的繁衍地，还在维持河口生态平衡、抵御海岸侵蚀方面发挥着不可替代的作用。在这里，游客能够直观地感受到保护沿海湿地的重要性。" },
        { subtitle: "非遗文化：Montubio 人的传说", content: "在“传统农业区”，除了展示可可、水稻等农作物，公园还深入呈现了 Montubio（沿海农民）的传统文化。Montubio 是厄瓜多尔沿海特有的混血农耕族群，他们建造的高脚屋（防止洪水和野生动物侵袭）是沿海乡村的标志性景观。\n\n在这里，您可以了解到他们在种植可可和水稻时流传的乡村民谣（Amorfino），以及关于丛林精灵的民间传说。这些非物质文化遗产为这片土地赋予了深厚的灵魂，极大丰富了游览的文化底蕴。" }
      ]
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "星期三至星期五：09:00 – 17:00\n星期六至星期日：09:00 – 17:00\n星期一：休息\n星期二：休息", note: "节假日开放时间可能有所调整，建议出发前通过官方渠道确认。" },
      price: { title: "门票参考", content: "免费对外开放，无需预约", note: "只有部分特殊导览或园内的私人餐厅/酒店可能产生费用。" },
      duration: { title: "建议游览时长与气候", content: "建议预留 3 - 5 小时", note: "瓜亚基尔属热带草原气候，全年气温较高（25-32°C）。建议穿着轻便透气的衣物，并做好防晒准备。" },
      animals: { title: "公园居民：丰富的沿海生态系统", content: "野生动植物区是厄瓜多尔西南部沿海红树林生态系统的缩影。这里栖息着超过 50 种鸟类、哺乳动物和爬行动物，包括树懒、鹦鹉、凯门鳄、多种猴子等。" },
      bring: { title: "游览准备", items: ["高倍数防晒霜和遮阳帽", "轻便透气的衣物和舒适的步行鞋", "饮用水和防蚊液", "雨具（雨季1-4月来访时必备）", "相机或手机"] }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从瓜亚基尔机场出发", content: "距离瓜亚基尔国际机场（GYE）约 5 - 8 公里，车程约 10 - 15 分钟。", options: [
        { name: "出租车/网约车（最便捷）", price: "$5 - $10 美元", time: "约 10-15 分钟", steps: ["提取行李后，在机场到达大厅乘车", "告知司机目的地为 Parque Histórico de Guayaquil", "车程约 10 - 15 分钟"] },
        { name: "租车自驾（最自由）", price: "$40 - $70 美元/天", time: "约 10-15 分钟", steps: ["在机场或市区租车", "设置导航至 Parque Histórico de Guayaquil, Samborondón", "沿主要道路行驶，跟随路标指示即可到达"] }
      ]},
      city: { title: "从瓜亚基尔市区前往", content: "从瓜亚基尔市区出发，沿主要桥梁跨越瓜亚斯河，进入桑博龙东市，根据路标指示即可到达公园入口。", steps: ["导航：在 Google Maps 中输入 Parque Histórico de Guayaquil", "停车：公园设有专用停车场，停车费约为$2美元"] },
      selfDrive: { title: "从其他城市前往", content: "从基多或昆卡出发，先抵达瓜亚基尔，再转乘出租车前往公园。", steps: ["从基多：乘坐国内航班（约40分钟）或长途巴士（约8-10小时）", "从昆卡：乘坐长途巴士（约3-4小时）"] }
    },
    tips: { title: "游览建议", items: ["最佳游览时间：清晨 09:00 - 11:00 或傍晚 15:00 - 17:00", "历史建筑群和野生动物区是最受欢迎的拍照地点", "公园内设有儿童游乐设施，非常适合全家出游", "请不要投喂野生动物，不要采摘植物"] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解瓜亚基尔历史公园", items: [
      { question: "瓜亚基尔历史公园的开放时间是？", answer: "星期三至星期五 09:00 - 17:00，星期六至星期日 09:00 - 17:00。每周一、周二闭园。" },
      { question: "公园的门票价格是多少？", answer: "基础入园是免费的，无需预约。只有部分特殊导览或园内的私人餐厅/酒店可能产生费用。" },
      { question: "公园适合儿童游玩吗？", answer: "非常适合！公园是一个集教育、娱乐、文化于一体的家庭友好型景点。" },
      { question: "园内可以用餐或住宿吗？", answer: "可以。公园内设有精品酒店和景观餐厅，为游客提供餐饮住宿服务。" },
      { question: "如果只会说英语，游览时会有障碍吗？", answer: "基本不会。公园的工作人员通常能用西班牙语和基本的英语进行沟通。" },
      { question: "瓜亚基尔历史公园适合观鸟吗？", answer: "非常适合！野生动物区是多种厄瓜多尔沿海地区和红树林鸟类的栖息地。" },
      { question: "附近还有哪些值得一游的景点？", answer: "可以顺路参观瓜亚基尔的标志性景点，如马雷贡2000、拉斯佩尼亚斯历史街区等。" }
    ]},
    location: { title: "地图位置", address: "Av. Rio Esmeraldas, 092301 Samborondón, 厄瓜多尔", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为历史文化的守护者，请与我们一起尊重历史、保护自然。", text: "© 2026 瓜亚基尔历史公园旅行指南 · 保留所有权利。\n本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方旅游资讯项目。为探索者而制", linksTitle: "相关链接", links: [
      { name: "厄瓜多尔旅游部", url: "https://www.gob.ec/mintur" },
      { name: "瓜亚斯省官方旅游门户", url: "https://visita.guayas.gob.ec/" },
      { name: "厄瓜多尔国家文化遗产研究所", url: "https://www.patrimoniocultural.gob.ec/" },
      { name: "桑博龙东市官方政府", url: "https://www.samborondon.gob.ec/" },
      { name: "瓜亚基尔市政府官方网站", url: "https://www.guayaquil.gob.ec/" }
    ]}
  },
  en: {
    nav: { about: "Overview", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "A Perfect Blend of Nature, Tradition and History", title: "Guayaquil Historical Park", subtitle: "Parque Histórico de Guayaquil", cta: "Explore the Park" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "Guayaquil Historical Park is located on the Samborondon Peninsula, covering approximately 8 hectares. This is a comprehensive theme park that combines ecological nature, traditional culture, and historical architecture, while also functioning as an open-air museum and a small zoo.\n\nThe park aims to preserve and showcase the biodiversity of Ecuador's coastal region, as well as the urban and rural history from the late 19th century to the early 20th century. The entire park is divided into three core thematic zones: Wildlife Zone, Traditional Agriculture Zone, and Historical Architecture Zone.",
      p2: "The park is very suitable for family outings, eco-photography enthusiasts, and tourists interested in cultural history. The park has a boutique hotel converted from historical buildings and a scenic restaurant offering local cuisine. It is recommended to arrange your visit in the early morning or late afternoon when the light is perfect for photography.",
      highlights: { title: "Quick Facts", items: ["Location: Av. Rio Esmeraldas, 092301 Samborondon, Ecuador", "Area: Approximately 8 hectares", "Three Thematic Zones: Wildlife, Traditional Agriculture, Historical Architecture", "Opening Hours: Wednesday to Sunday 09:00 - 17:00 (Closed on Monday and Tuesday)", "Supporting Facilities: Boutique hotel, scenic restaurant"] },
      timeline: { title: "Park Development Timeline", events: [
        { period: "1997: Initiation and Planning", description: "Initiated by the Central Bank of Ecuador to rescue and protect the disappearing traditional wooden architecture and mangrove ecosystems of Guayaquil." },
        { period: "1999 - 2000: Phase I Opening", description: "The Wildlife Zone and Traditional Agriculture Zone opened to the public, becoming an important window to showcase Ecuador's coastal biodiversity." },
        { period: "2004: Historical Zone Completion", description: "Multiple late 19th-century wooden buildings, including Casa Julián Coronel, were carefully dismantled, relocated, and successfully reconstructed in the park." },
        { period: "2010s - Present: Management Transfer & Modernization", description: "Management transferred to public space authorities, introducing a boutique hotel and dining to sustainably maintain this cultural heritage." }
      ]},
      management: { title: "Park Management and Official Authorities", content: "Guayaquil Historical Park is jointly supported and managed by the Guayas Provincial Government and the Samborondon Municipal Government. The park has a visitor service center that provides park maps and consulting services." }
    },
    history: {
      title: "Historical Background & Cultural Memory",
      intro: "Strolling through the 'Historical Architecture Zone' of Guayaquil Historical Park is like stepping into a parallel universe frozen in time. The wooden mansions and retro streets here are not only architectural miracles but also a testament to Ecuador's history, intertwined with glory and hardship. To understand these buildings, we must return to the late 19th century, the golden era known as the 'Cacao Boom' (La Era del Gran Cacao).",
      sections: [
        { subtitle: "1. The Golden Era: Ecuador's 'Cacao Boom'", content: "From the late 19th to the early 20th century, Ecuador experienced its economic peak. Blessed with a coastal tropical climate, Ecuador became the world's largest exporter of high-quality cacao (Arriba Cacao). As the nation's most important port, Guayaquil amassed enormous wealth.\n\nDuring this period, a newly wealthy class emerged, known as 'Gran Cacao'. These estate owners and exporters frequently traveled between South America and Europe, deeply influenced by the 'Belle Époque' culture of Paris. They brought back European luxuries and lifestyles, aspiring to turn Guayaquil into a 'Tropical Paris'." },
        { subtitle: "2. Tropical Dream: French Elegance Carved in Wood", content: "The 'Gran Cacao' barons wanted to replicate European neoclassical and Gothic architecture in Guayaquil, but faced a massive geographic challenge: Guayaquil is in a hot, humid tropical zone with frequent earthquakes. Traditional European stone and marble were not only expensive to transport but also prone to sinking in the marshy ground or collapsing during earthquakes.\n\nThus, local artisans created a unique architectural eclecticism: using extremely hard native woods (like Guayacán and Mahogany) as the core framework, combined with traditional bahareque (wattle and daub) techniques, they meticulously carved the exteriors to perfectly imitate the Roman columns, carved balconies, and louvers of European stone buildings. This architectural style, perfectly blending European aesthetics with tropical pragmatism, became Guayaquil's unique city signature." },
        { subtitle: "3. Historical Disaster: The Great Fire of 1896 (El Gran Incendio)", content: "However, this prosperous wooden city hid a fatal vulnerability. On October 5, 1896, a catastrophic fire swept through Guayaquil. Fueled by dry resinous wood and strong dry-season winds, the fire raged for three days and nights, destroying nearly half the city. Tens of thousands were left homeless, and the once-glorious 'Capital of Cacao' was almost reduced to ashes.\n\nAlthough the city was rebuilt on its original site, with the popularization of concrete and modern building materials in the 20th century, those exquisite traditional wooden mansions were rapidly demolished or abandoned during urbanization. Guayaquil faced the crisis of completely losing its 19th-century urban memory." },
        { subtitle: "4. Time Capsule: Rescue and Rebirth in the Historical Park", content: "This is the core mission behind the establishment of the Guayaquil Historical Park. To save the disappearing architectural heritage, starting in the late 1990s, rescue teams performed complex 'surgical' preservation on several representative century-old wooden buildings in downtown Guayaquil (including rare survivors of the 1896 fire and mansions authentically rebuilt after the fire).\n\nEach building was carefully measured, numbered, dismantled into thousands of wooden components, and eventually transported across the river to be authentically reconstructed in the Historical Park on the Samborondón Peninsula." }
      ],
      buildings: {
        title: "Representative Architectural Highlights",
        items: [
          "Casa Julián Coronel: A typical baron's mansion, showcasing the luxurious life of the upper class of that era.",
          "Banco Territorial (Former Site): Witnessed the financial prosperity brought by the cacao trade, its wooden banking hall is highly characteristic of the time.",
          "Hospicio Corazón de Jesús: Represents the philanthropic endeavors and public architectural style of the society back then."
        ],
        conclusion: "Today, these buildings are no longer empty shells. As you walk through these reborn century-old wooden corridors and hear actors in 19th-century attire re-enacting the daily life of the time, the Ecuadorian epic of cacao, wealth, fire, and rebirth materializes right before your eyes."
      }
    },
    ecology: {
      title: "Ecological Conservation Value",
      sections: [
        { subtitle: "Ecological Refuge (Refugio Ecológico)", content: "Guayaquil Historical Park is far more than just a small zoo; it is a vital breeding base for endangered species and an ecological refuge. The wildlife zone here is dedicated to the rescue and protection of Ecuador's unique wildlife, such as the majestic Harpy Eagle and the Jaguar.\n\nThe park also recreates the fragile mangrove (Manglares) ecosystem. Mangroves are not only breeding grounds for numerous birds and marine life but also play an irreplaceable role in maintaining estuarine ecological balance and preventing coastal erosion. Here, visitors can intuitively grasp the importance of protecting coastal wetlands." },
        { subtitle: "Intangible Cultural Heritage: Legends of the Montubio People", content: "In the 'Traditional Agriculture Zone', besides displaying crops like cacao and rice, the park deeply presents the traditional culture of the Montubio (coastal farmers). The Montubio are a unique mixed-race farming community of coastal Ecuador. Their stilt houses (built high to prevent flooding and wildlife intrusion) are an iconic landscape of coastal villages.\n\nHere, you can learn about the rural folk songs (Amorfino) they sing while planting cacao and rice, as well as folklore about jungle spirits. This intangible cultural heritage endows this land with a profound soul, greatly enriching the cultural depth of the visit." }
      ]
    },
    visiting: {
      title: "Visitor Information",
      hours: { title: "Operating Hours", content: "Wednesday to Friday: 09:00 – 17:00\nSaturday to Sunday: 09:00 – 17:00\nMonday: Closed\nTuesday: Closed", note: "Opening hours during holidays may be adjusted, please confirm via official channels before departure." },
      price: { title: "Ticket Information", content: "Free admission, no reservation required", note: "Only specific guided tours or private restaurants/hotels within the park may incur charges." },
      duration: { title: "Recommended Duration & Climate", content: "Recommended visit duration: 3 - 5 hours", note: "Guayaquil has a tropical savanna climate with high temperatures year-round (25-32°C). Wear lightweight, breathable clothing and prepare for sun protection." },
      animals: { title: "Park Residents: Rich Coastal Ecosystem", content: "The Wildlife Zone is a microcosm of the coastal mangrove ecosystem of Ecuador. Over 50 species of birds, mammals, and reptiles inhabit this area, including sloths, parrots, caimans, and various species of monkeys." },
      bring: { title: "Preparation", items: ["High-SPF sunscreen and sun hat", "Lightweight, breathable clothing and comfortable walking shoes", "Drinking water and mosquito repellent", "Rain gear (essential during the rainy season, January-April)", "Camera or smartphone"] }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Guayaquil Airport", content: "About 5 - 8 km from Guayaquil International Airport (GYE), approximately a 10 - 15 minute drive.", options: [
        { name: "Taxi/Ride-hailing (Most Convenient)", price: "$5 - $10 USD", time: "About 10-15 minutes", steps: ["After claiming luggage, take a taxi from the airport arrivals hall", "Tell the driver the destination is Parque Histórico de Guayaquil", "The trip takes about 10 - 15 minutes"] },
        { name: "Car Rental (Most Flexible)", price: "$40 - $70 USD/day", time: "About 10-15 minutes", steps: ["Rent a car at the airport or in the city center", "Set navigation to Parque Histórico de Guayaquil, Samborondon", "Follow the signs to the park entrance"] }
      ]},
      city: { title: "From Guayaquil Downtown", content: "From Guayaquil downtown, cross the main bridge over the Guayas River, enter Samborondon, and follow the signs to the park entrance.", steps: ["Navigation: Enter Parque Histórico de Guayaquil in Google Maps", "Parking: The park has a dedicated parking lot, parking fee is approximately $2 USD"] },
      selfDrive: { title: "Traveling from Other Cities", content: "From Quito or Cuenca, arrive in Guayaquil first, then transfer to local transportation to the park.", steps: ["From Quito: Take a domestic flight (about 40 minutes) or long-distance bus (about 8-10 hours)", "From Cuenca: Take a long-distance bus (about 3-4 hours)"] }
    },
    tips: { title: "Travel Tips", items: ["Best Time to Visit: Early morning 09:00 - 11:00 or late afternoon 15:00 - 17:00", "The historical buildings and wildlife zone are popular photo spots", "The park has children's play facilities, very suitable for family outings", "Please do not feed wild animals or pick plants"] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Guayaquil Historical Park", items: [
      { question: "What are the opening hours of Guayaquil Historical Park?", answer: "Wednesday to Friday 09:00 - 17:00, Saturday to Sunday 09:00 - 17:00. The park is closed on Mondays and Tuesdays." },
      { question: "How much are the tickets to the park?", answer: "Basic admission to the park is free, with no reservation required. Only specific guided tours or private restaurants/hotels within the park may incur charges." },
      { question: "Is the park suitable for children?", answer: "Very suitable! The park is a family-friendly attraction that combines education, entertainment, and culture." },
      { question: "Can I dine or stay overnight in the park?", answer: "Yes. The park has a boutique hotel and a scenic restaurant, providing dining and accommodation services for visitors." },
      { question: "Will there be barriers if I only speak English?", answer: "Basically no. The park staff can usually communicate in Spanish and basic English." },
      { question: "Is Guayaquil Historical Park suitable for bird watching?", answer: "Very suitable! The wildlife zone is home to a variety of bird species from Ecuador's coastal region and mangroves." },
      { question: "What other attractions are worth visiting nearby?", answer: "Starting from the park, you can visit Guayaquil's iconic attractions, such as Malecón 2000, Las Peñas Historical Neighborhood, etc." }
    ]},
    location: { title: "Map Location", address: "Av. Rio Esmeraldas, 092301 Samborondon, Ecuador", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As guardians of history and culture, please join us in respecting history and protecting nature.", text: "© 2026 Guayaquil Historical Park Travel Guide · All rights reserved.\nThis website is an independent third-party travel information project. We are not affiliated with the local government or any other official authorities.", made: "This website is an independent third-party travel information project. Made for explorers", linksTitle: "Related Links", links: [
      { name: "Ministerio de Turismo", url: "https://www.gob.ec/mintur" },
      { name: "Visita Guayas", url: "https://visita.guayas.gob.ec/" },
      { name: "INPC", url: "https://www.patrimoniocultural.gob.ec/" },
      { name: "GAD Samborondon", url: "https://www.samborondon.gob.ec/" },
      { name: "Alcaldía de Guayaquil", url: "https://www.guayaquil.gob.ec/" }
    ]}
  },
  es: {
    nav: { about: "Descripción General", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Una Fusión Perfecta de Naturaleza, Tradición e Historia", title: "Parque Histórico de Guayaquil", subtitle: "El Encanto de la Historia Guayaquileña", cta: "Explora el Parque" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Parque Histórico de Guayaquil está ubicado en la Península de Samborondón, cubriendo aproximadamente 8 hectáreas. Este es un parque temático integral que combina naturaleza ecológica, cultura tradicional y arquitectura histórica.\n\nEl parque tiene como objetivo preservar y mostrar la biodiversidad de la región costera del Ecuador, así como la historia urbana y rural del finales del siglo XIX y principios del siglo XX. Todo el parque está dividido en tres zonas temáticas centrales: Zona de Vida Silvestre, Zona de Tradiciones, y Zona Histórico-Arquitectónica.",
      p2: "El parque es muy adecuado para salidas familiares y entusiastas de la historia cultural. El parque tiene un hotel boutique convertido de edificios históricos y un restaurante panorámico que ofrece cocina local. Se recomienda organizar su visita en la madrugada o tarde cuando la luz es perfecta para la fotografía.",
      highlights: { title: "Datos Rápidos", items: ["Ubicación: Av. Rio Esmeraldas, 092301 Samborondón, Ecuador", "Área: Aproximadamente 8 hectáreas", "Tres Zonas Temáticas: Vida Silvestre, Agricultura Tradicional, Arquitectura Histórica", "Horario de Apertura: Miércoles a Domingo 09:00 - 17:00 (Cerrado los Lunes y Martes)", "Instalaciones: Hotel boutique, restaurante panorámico"] },
      timeline: { title: "Línea de Tiempo", events: [
        { period: "1997: Iniciación y Planificación", description: "Iniciado por el Banco Central del Ecuador para rescatar y proteger la arquitectura tradicional de madera y los ecosistemas de manglares de Guayaquil." },
        { period: "1999 - 2000: Apertura de la Fase I", description: "Las Zonas de Vida Silvestre y Agricultura Tradicional se abrieron al público, convirtiéndose en una ventana importante para la biodiversidad costera." },
        { period: "2004: Finalización de la Zona Histórica", description: "Múltiples edificios de madera de finales del siglo XIX, incluida la Casa Julián Coronel, fueron desmontados, trasladados y reconstruidos con éxito." },
        { period: "Años 2010 - Actualidad: Transferencia y Modernización", description: "Transferido a la gestión de espacios públicos, se introdujeron hoteles y restaurantes para mantener de manera sostenible este patrimonio." }
      ]},
      management: { title: "Gestión del Parque", content: "El Parque Histórico de Guayaquil es gestionado conjuntamente por el Gobierno Provincial del Guayas y el Gobierno Municipal de Samborondón. El parque tiene un centro de servicio al visitante que proporciona mapas del parque y servicios de consulta." }
    },
    history: {
      title: "Antecedentes Históricos y Memoria Cultural",
      intro: "Pasear por la 'Zona Histórico-Arquitectónica' del Parque Histórico de Guayaquil es como entrar en un universo paralelo congelado en el tiempo. Las mansiones de madera y calles retro no son solo milagros arquitectónicos, sino también un testimonio de la historia del Ecuador, entrelazada con gloria y dificultades. Para entender estos edificios, debemos regresar a finales del siglo XIX, la época dorada conocida como 'La Era del Gran Cacao'.",
      sections: [
        { subtitle: "1. La Época Dorada: 'La Era del Gran Cacao' del Ecuador", content: "Desde finales del siglo XIX hasta principios del siglo XX, Ecuador experimentó su apogeo económico. Bendecido con un clima tropical costero, Ecuador se convirtió en el mayor exportador mundial de cacao de alta calidad (Cacao Arriba). Como el puerto más importante de la nación, Guayaquil amasó una enorme riqueza.\n\nDurante este período, surgió una nueva clase adinerada, conocida como el 'Gran Cacao'. Estos dueños de haciendas y exportadores viajaban frecuentemente entre Sudamérica y Europa, profundamente influenciados por la cultura 'Belle Époque' de París. Trajeron consigo lujos y estilos de vida europeos, aspirando a convertir a Guayaquil en un 'París Tropical'." },
        { subtitle: "2. Sueño Tropical: Elegancia Francesa Tallada en Madera", content: "Los barones del 'Gran Cacao' querían replicar la arquitectura neoclásica y gótica europea en Guayaquil, pero enfrentaron un desafío geográfico masivo: Guayaquil está en una zona tropical cálida y húmeda con frecuentes terremotos. La piedra y el mármol europeos tradicionales no solo eran caros de transportar, sino también propensos a hundirse en el terreno pantanoso o colapsar durante los terremotos.\n\nAsí, los artesanos locales crearon un eclecticismo arquitectónico único: utilizando maderas nativas extremadamente duras (como Guayacán y Caoba) como armazón central, combinadas con técnicas tradicionales de bahareque, tallaron meticulosamente los exteriores para imitar a la perfección las columnas romanas, los balcones tallados y las persianas de los edificios de piedra europeos. Este estilo arquitectónico, que combina a la perfección la estética europea con el pragmatismo tropical, se convirtió en la firma única de la ciudad de Guayaquil." },
        { subtitle: "3. Desastre Histórico: El Gran Incendio de 1896", content: "Sin embargo, esta próspera ciudad de madera escondía una vulnerabilidad fatal. El 5 de octubre de 1896, un incendio catastrófico arrasó Guayaquil. Alimentado por madera resinosa seca y fuertes vientos de la estación seca, el fuego ardió durante tres días y tres noches, destruyendo casi la mitad de la ciudad. Decenas de miles quedaron sin hogar, y la otrora gloriosa 'Capital del Cacao' quedó casi reducida a cenizas.\n\nAunque la ciudad fue reconstruida en su sitio original, con la popularización del hormigón y los materiales de construcción modernos en el siglo XX, esas exquisitas mansiones de madera tradicionales fueron rápidamente demolidas o abandonadas durante la urbanización. Guayaquil se enfrentó a la crisis de perder por completo su memoria urbana del siglo XIX." },
        { subtitle: "4. Cápsula del Tiempo: Rescate y Renacimiento en el Parque Histórico", content: "Esta es la misión principal detrás del establecimiento del Parque Histórico de Guayaquil. Para salvar el patrimonio arquitectónico que desaparecía, a partir de finales de la década de 1990, equipos de rescate realizaron una compleja preservación 'quirúrgica' en varios edificios de madera centenarios representativos en el centro de Guayaquil (incluidos raros sobrevivientes del incendio de 1896 y mansiones auténticamente reconstruidas después del incendio).\n\nCada edificio fue medido cuidadosamente, numerado, desmantelado en miles de componentes de madera y finalmente transportado al otro lado del río para ser reconstruido auténticamente en el Parque Histórico en la Península de Samborondón." }
      ],
      buildings: {
        title: "Aspectos Arquitectónicos Representativos",
        items: [
          "Casa Julián Coronel: Una típica mansión de barón, que muestra la vida lujosa de la clase alta de esa época.",
          "Banco Territorial (Antigua Sede): Testigo de la prosperidad financiera traída por el comercio del cacao, su sala bancaria de madera es muy característica de la época.",
          "Hospicio Corazón de Jesús: Representa los esfuerzos filantrópicos y el estilo arquitectónico público de la sociedad de entonces."
        ],
        conclusion: "Hoy en día, estos edificios ya no son cáscaras vacías. Al caminar por estos corredores de madera centenarios renacidos y escuchar a actores con atuendos del siglo XIX recreando la vida cotidiana de la época, la epopeya ecuatoriana del cacao, la riqueza, el fuego y el renacimiento se materializa ante sus ojos."
      }
    },
    ecology: {
      title: "Valor de Conservación Ecológica",
      sections: [
        { subtitle: "Refugio Ecológico", content: "El Parque Histórico de Guayaquil es mucho más que un pequeño zoológico; es una base vital de cría de especies en peligro de extinción y un refugio ecológico. La zona de vida silvestre aquí está dedicada al rescate y protección de la vida silvestre única de Ecuador, como el majestuoso Águila Harpía y el Jaguar.\n\nEl parque también recrea el frágil ecosistema de manglares. Los manglares no solo son zonas de cría de numerosas aves y vida marina, sino que también desempeñan un papel insustituible en el mantenimiento del equilibrio ecológico del estuario y la prevención de la erosión costera. Aquí, los visitantes pueden comprender intuitivamente la importancia de proteger los humedales costeros." },
        { subtitle: "Patrimonio Cultural Inmaterial: Leyendas del Pueblo Montubio", content: "En la 'Zona de Agricultura Tradicional', además de exhibir cultivos como cacao y arroz, el parque presenta profundamente la cultura tradicional de los Montubio (agricultores costeros). Los Montubio son una comunidad agrícola mestiza única de la costa de Ecuador. Sus casas sobre pilotes (construidas en alto para evitar inundaciones y la intrusión de vida silvestre) son un paisaje icónico de los pueblos costeros.\n\nAquí, puede aprender sobre las canciones folclóricas rurales (Amorfino) que cantan mientras plantan cacao y arroz, así como el folclore sobre los espíritus de la selva. Este patrimonio cultural inmaterial dota a esta tierra de un alma profunda, enriqueciendo enormemente la profundidad cultural de la visita." }
      ]
    },
    visiting: {
      title: "Información para Visitantes",
      hours: { title: "Horario de Operación", content: "Miércoles a Viernes: 09:00 – 17:00\nSábado a Domingo: 09:00 – 17:00\nLunes: Cerrado\nMartes: Cerrado", note: "El horario durante los feriados puede ser ajustado, por favor confirme a través de canales oficiales." },
      price: { title: "Información de Boletos", content: "Entrada gratuita, sin necesidad de reserva", note: "Solo ciertos recorridos guiados o restaurantes/hoteles privados dentro del parque pueden tener costo." },
      duration: { title: "Duración Recomendada", content: "Duración recomendada: 3 - 5 horas", note: "Guayaquil tiene un clima de sabana tropical con temperaturas altas durante todo el año (25-32°C)." },
      animals: { title: "Residentes del Parque", content: "La Zona de Vida Silvestre alberga más de 50 especies de aves, mamíferos y reptiles, incluyendo perezosos, loros, caimanes y varias especies de monos." },
      bring: { title: "Preparación", items: ["Protector solar y sombrero", "Ropa ligera y zapatos cómodos", "Agua potable y repelente de mosquitos", "Equipo de lluvia", "Cámara o teléfono inteligente"] }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Guayaquil", content: "A unos 5 - 8 km del Aeropuerto Internacional de Guayaquil (GYE), aproximadamente 10 - 15 minutos en automóvil.", options: [
        { name: "Taxi (Más Conveniente)", price: "$5 - $10 USD", time: "Alrededor de 10-15 minutos", steps: ["Tome un taxi desde la sala de llegadas del aeropuerto", "Dígale al conductor que el destino es Parque Histórico de Guayaquil", "El viaje toma alrededor de 10 - 15 minutos"] },
        { name: "Alquiler de Automóvil", price: "$40 - $70 USD/día", time: "Alrededor de 10-15 minutos", steps: ["Alquile un automóvil en el aeropuerto o en el centro", "Configure la navegación al Parque Histórico de Guayaquil", "Siga los letreros hasta la entrada del parque"] }
      ]},
      city: { title: "Desde el Centro de Guayaquil", content: "Desde el centro de Guayaquil, cruce el puente principal sobre el Río Guayas, entre a Samborondón y siga los letreros.", steps: ["Navegación: Ingrese Parque Histórico de Guayaquil en Google Maps", "Estacionamiento: El parque tiene un estacionamiento dedicado"] },
      selfDrive: { title: "Viajando desde Otras Ciudades", content: "Desde Quito o Cuenca, llegue a Guayaquil primero, luego transfierase al transporte local al parque.", steps: ["Desde Quito: Tome un vuelo doméstico (aproximadamente 40 minutos)", "Desde Cuenca: Tome un bus de larga distancia (aproximadamente 3-4 horas)"] }
    },
    tips: { title: "Consejos de Viaje", items: ["Mejor Momento para Visitar: Madrugada 09:00 - 11:00 o tarde 15:00 - 17:00", "Los edificios históricos y la zona de vida silvestre son populares para fotos", "El parque tiene instalaciones de juego para niños", "Por favor, no alimente a los animales ni recolecte plantas"] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    reviews: { title: "Reseñas de Visitantes", subtitle: "Reseñas reales de Google Maps", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Conozca más sobre el Parque Histórico de Guayaquil", items: [
      { question: "¿Cuál es el horario de apertura del parque?", answer: "Miércoles a viernes 09:00 - 17:00, sábado a domingo 09:00 - 17:00. El parque está cerrado los lunes y martes." },
      { question: "¿Cuánto cuestan los boletos?", answer: "La entrada básica al parque es gratuita, sin necesidad de reserva. Solo ciertos recorridos guiados o restaurantes/hoteles privados dentro del parque pueden tener costo." },
      { question: "¿Es el parque adecuado para niños?", answer: "¡Muy adecuado! El parque es una atracción amigable para familias." },
      { question: "¿Puedo cenar o alojarme en el parque?", answer: "Sí. El parque tiene un hotel boutique y un restaurante panorámico." },
      { question: "¿Habrá barreras si solo hablo inglés?", answer: "Básicamente no. El personal del parque generalmente puede comunicarse en español e inglés básico." },
      { question: "¿Es el parque adecuado para la observación de aves?", answer: "¡Muy adecuado! La zona de vida silvestre es el hogar de varias especies de aves." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca?", answer: "Puede visitar las atracciones icónicas de Guayaquil, como Malecón 2000, el Barrio Las Peñas, etc." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "Av. Rio Esmeraldas, 092301 Samborondón, Ecuador", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como guardianes de la historia y la cultura, únase a nosotros para respetar la historia y proteger la naturaleza.", text: "© 2026 Guía de Viaje del Parque Histórico de Guayaquil · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de información turística. No estamos afiliados al gobierno local ni a ninguna otra autoridad oficial.", made: "Este sitio web es un proyecto independiente de información turística. Hecho para exploradores", linksTitle: "Enlaces Relacionados", links: [
      { name: "Ministerio de Turismo", url: "https://www.gob.ec/mintur" },
      { name: "Visita Guayas", url: "https://visita.guayas.gob.ec/" },
      { name: "INPC", url: "https://www.patrimoniocultural.gob.ec/" },
      { name: "GAD Samborondón", url: "https://www.samborondon.gob.ec/" },
      { name: "Alcaldía de Guayaquil", url: "https://www.guayaquil.gob.ec/" }
    ]}
  }
};
