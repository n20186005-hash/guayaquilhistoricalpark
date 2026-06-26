export type Locale = "zh" | "en" | "es";

export const translations = {
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
        { period: "1990年代", description: "提出建设历史文化公园的构想" },
        { period: "2000-2006年", description: "公园进入规划与建设阶段，历史建筑从瓜亚基尔市区拆解迁移至此" },
        { period: "2007年", description: "公园正式对外开放，成为桑博龙东市的重要旅游景点" },
        { period: "至今", description: "成为厄瓜多尔重要的文化旅游目的地" }
      ]},
      management: { title: "公园的管理与官方机构", content: "瓜亚基尔历史公园由瓜亚斯省政府和桑博龙东市政府共同支持和管理。公园内设有游客服务中心，提供园区地图、导游服务和基本咨询服务。" }
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "星期三至星期五：09:00 – 17:00\n星期六至星期日：09:00 – 17:00\n星期一：休息\n星期二：休息", note: "节假日开放时间可能有所调整，建议出发前通过官方渠道确认。" },
      price: { title: "门票参考", content: "成人：约 $6 美元\n儿童（5-12岁）：约 $3 美元\n5岁以下儿童：免费", note: "门票价格可能随时调整，请以公园官方公布的价格为准。" },
      duration: { title: "建议游览时长与气候", content: "建议预留 3 - 5 小时", note: "瓜亚基尔属热带草原气候，全年气温较高（25-32°C）。建议穿着轻便透气的衣物，并做好防晒准备。" },
      animals: { title: "公园居民：丰富的沿海生态系统", content: "野生动植物区是厄瓜多尔西南部沿海红树林生态系统的缩影。这里栖息着超过 50 种鸟类、哺乳动物和爬行动物，包括树懒、鹦鹉、凯门鳄、多种猴子等。" },
      bring: { title: "游览准备", items: ["高倍数防晒霜和遮阳帽", "轻便透气的衣物和舒适的步行鞋", "饮用水和防蚊液", "雨具（雨季1-4月来访时必备）", "相机或手机"] }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从瓜亚基尔机场出发", content: "距离瓜亚基尔国际机场约 20 公里，车程约 30-40 分钟。", options: [
        { name: "出租车/网约车（最便捷）", price: "$15 - $25 美元", time: "约 30-40 分钟", steps: ["提取行李后，在机场到达大厅乘车", "告知司机目的地为 Parque Histórico de Guayaquil", "车程约 30-40 分钟"] },
        { name: "租车自驾（最自由）", price: "$40 - $70 美元/天", time: "约 30 分钟", steps: ["在机场或市区租车", "设置导航至 Parque Histórico de Guayaquil, Samborondón", "沿主要道路行驶，跟随路标指示即可到达"] }
      ]},
      city: { title: "从瓜亚基尔市区前往", content: "从瓜亚基尔市区出发，沿主要桥梁跨越瓜亚斯河，进入桑博龙东市，根据路标指示即可到达公园入口。", steps: ["导航：在 Google Maps 中输入 Parque Histórico de Guayaquil", "停车：公园设有专用停车场，停车费约为$2美元"] },
      selfDrive: { title: "从其他城市前往", content: "从基多或昆卡出发，先抵达瓜亚基尔，再转乘出租车前往公园。", steps: ["从基多：乘坐国内航班（约40分钟）或长途巴士（约8-10小时）", "从昆卡：乘坐长途巴士（约3-4小时）"] }
    },
    tips: { title: "游览建议", items: ["最佳游览时间：清晨 09:00 - 11:00 或傍晚 15:00 - 17:00", "历史建筑群和野生动物区是最受欢迎的拍照地点", "公园内设有儿童游乐设施，非常适合全家出游", "请不要投喂野生动物，不要采摘植物"] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解瓜亚基尔历史公园", items: [
      { question: "瓜亚基尔历史公园的开放时间是？", answer: "星期三至星期五 09:00 - 17:00，星期六至星期日 09:00 - 17:00。每周一、周二闭园。" },
      { question: "公园的门票价格是多少？", answer: "成人门票约为$6美元，儿童（5-12岁）约为$3美元，5岁以下儿童免费。" },
      { question: "公园适合儿童游玩吗？", answer: "非常适合！公园是一个集教育、娱乐、文化于一体的家庭友好型景点。" },
      { question: "园内可以用餐或住宿吗？", answer: "可以。公园内设有精品酒店和景观餐厅，为游客提供餐饮住宿服务。" },
      { question: "如果只会说英语，游览时会有障碍吗？", answer: "基本不会。公园的工作人员通常能用西班牙语和基本的英语进行沟通。" },
      { question: "瓜亚基尔历史公园适合观鸟吗？", answer: "非常适合！野生动物区是多种厄瓜多尔沿海地区和红树林鸟类的栖息地。" },
      { question: "附近还有哪些值得一游的景点？", answer: "可以顺路参观瓜亚基尔的标志性景点，如马雷贡2000、拉斯佩尼亚斯历史街区等。" }
    ]},
    location: { title: "地图位置", address: "Av. Rio Esmeraldas, 092301 Samborondón, 厄瓜多尔", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为历史文化的守护者，请与我们一起尊重历史、保护自然。", text: "© 2026 瓜亚基尔历史公园旅行指南 · 保留所有权利。\n本网站是一个独立的第三方旅游资讯项目。", made: "本网站是一个独立的第三方旅游资讯项目。为探索者而制", linksTitle: "相关链接", links: [
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
        { period: "1990s", description: "The concept of building a historical and cultural park was proposed" },
        { period: "2000-2006", description: "The park entered the planning and construction phase" },
        { period: "2007", description: "The park officially opened to the public" },
        { period: "Present", description: "An important cultural tourism destination in Ecuador" }
      ]},
      management: { title: "Park Management and Official Authorities", content: "Guayaquil Historical Park is jointly supported and managed by the Guayas Provincial Government and the Samborondon Municipal Government. The park has a visitor service center that provides park maps and consulting services." }
    },
    visiting: {
      title: "Visitor Information",
      hours: { title: "Operating Hours", content: "Wednesday to Friday: 09:00 – 17:00\nSaturday to Sunday: 09:00 – 17:00\nMonday: Closed\nTuesday: Closed", note: "Opening hours during holidays may be adjusted, please confirm via official channels before departure." },
      price: { title: "Ticket Information", content: "Adults: Approx. $6 USD\nChildren (5-12 years old): Approx. $3 USD\nChildren under 5: Free", note: "Ticket prices may be adjusted at any time, please refer to the prices officially announced by the park." },
      duration: { title: "Recommended Duration & Climate", content: "Recommended visit duration: 3 - 5 hours", note: "Guayaquil has a tropical savanna climate with high temperatures year-round (25-32°C). Wear lightweight, breathable clothing and prepare for sun protection." },
      animals: { title: "Park Residents: Rich Coastal Ecosystem", content: "The Wildlife Zone is a microcosm of the coastal mangrove ecosystem of Ecuador. Over 50 species of birds, mammals, and reptiles inhabit this area, including sloths, parrots, caimans, and various species of monkeys." },
      bring: { title: "Preparation", items: ["High-SPF sunscreen and sun hat", "Lightweight, breathable clothing and comfortable walking shoes", "Drinking water and mosquito repellent", "Rain gear (essential during the rainy season, January-April)", "Camera or smartphone"] }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Guayaquil Airport", content: "Guayaquil Historical Park is located in Samborondon, about 20 km from Guayaquil International Airport, about a 30-40 minute drive.", options: [
        { name: "Taxi/Ride-hailing (Most Convenient)", price: "$15 - $25 USD", time: "About 30-40 minutes", steps: ["After claiming luggage, take a taxi from the airport arrivals hall", "Tell the driver the destination is Parque Histórico de Guayaquil", "The trip takes about 30-40 minutes"] },
        { name: "Car Rental (Most Flexible)", price: "$40 - $70 USD/day", time: "About 30 minutes", steps: ["Rent a car at the airport or in the city center", "Set navigation to Parque Histórico de Guayaquil, Samborondon", "Follow the signs to the park entrance"] }
      ]},
      city: { title: "From Guayaquil Downtown", content: "From Guayaquil downtown, cross the main bridge over the Guayas River, enter Samborondon, and follow the signs to the park entrance.", steps: ["Navigation: Enter Parque Histórico de Guayaquil in Google Maps", "Parking: The park has a dedicated parking lot, parking fee is approximately $2 USD"] },
      selfDrive: { title: "Traveling from Other Cities", content: "From Quito or Cuenca, arrive in Guayaquil first, then transfer to local transportation to the park.", steps: ["From Quito: Take a domestic flight (about 40 minutes) or long-distance bus (about 8-10 hours)", "From Cuenca: Take a long-distance bus (about 3-4 hours)"] }
    },
    tips: { title: "Travel Tips", items: ["Best Time to Visit: Early morning 09:00 - 11:00 or late afternoon 15:00 - 17:00", "The historical buildings and wildlife zone are popular photo spots", "The park has children's play facilities, very suitable for family outings", "Please do not feed wild animals or pick plants"] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Guayaquil Historical Park", items: [
      { question: "What are the opening hours of Guayaquil Historical Park?", answer: "Wednesday to Friday 09:00 - 17:00, Saturday to Sunday 09:00 - 17:00. The park is closed on Mondays and Tuesdays." },
      { question: "How much are the tickets to the park?", answer: "Adult tickets are approximately $6 USD, children (5-12 years old) approximately $3 USD, and children under 5 are free." },
      { question: "Is the park suitable for children?", answer: "Very suitable! The park is a family-friendly attraction that combines education, entertainment, and culture." },
      { question: "Can I dine or stay overnight in the park?", answer: "Yes. The park has a boutique hotel and a scenic restaurant, providing dining and accommodation services for visitors." },
      { question: "Will there be barriers if I only speak English?", answer: "Basically no. The park staff can usually communicate in Spanish and basic English." },
      { question: "Is Guayaquil Historical Park suitable for bird watching?", answer: "Very suitable! The wildlife zone is home to a variety of bird species from Ecuador's coastal region and mangroves." },
      { question: "What other attractions are worth visiting nearby?", answer: "Starting from the park, you can visit Guayaquil's iconic attractions, such as Malecón 2000, Las Peñas Historical Neighborhood, etc." }
    ]},
    location: { title: "Map Location", address: "Av. Rio Esmeraldas, 092301 Samborondon, Ecuador", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As guardians of history and culture, please join us in respecting history and protecting nature.", text: "© 2026 Guayaquil Historical Park Travel Guide · All rights reserved.\nThis website is an independent third-party travel information project.", made: "This website is an independent third-party travel information project. Made for explorers", linksTitle: "Related Links", links: [
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
        { period: "Años 1990", description: "Se propuso el concepto de construir un parque histórico y cultural" },
        { period: "2000-2006", description: "El parque entró en la fase de planificación y construcción" },
        { period: "2007", description: "El parque abrió oficialmente sus puertas al público" },
        { period: "Actualidad", description: "Un importante destino turístico cultural en Ecuador" }
      ]},
      management: { title: "Gestión del Parque", content: "El Parque Histórico de Guayaquil es gestionado conjuntamente por el Gobierno Provincial del Guayas y el Gobierno Municipal de Samborondón. El parque tiene un centro de servicio al visitante que proporciona mapas del parque y servicios de consulta." }
    },
    visiting: {
      title: "Información para Visitantes",
      hours: { title: "Horario de Operación", content: "Miércoles a Viernes: 09:00 – 17:00\nSábado a Domingo: 09:00 – 17:00\nLunes: Cerrado\nMartes: Cerrado", note: "El horario durante los feriados puede ser ajustado, por favor confirme a través de canales oficiales." },
      price: { title: "Información de Boletos", content: "Adultos: Aprox. $6 USD\nNiños (5-12 años): Aprox. $3 USD\nNiños menores de 5 años: Gratis", note: "Los precios pueden ser ajustados en cualquier momento, por favor refiérase a los precios anunciados oficialmente." },
      duration: { title: "Duración Recomendada", content: "Duración recomendada: 3 - 5 horas", note: "Guayaquil tiene un clima de sabana tropical con temperaturas altas durante todo el año (25-32°C)." },
      animals: { title: "Residentes del Parque", content: "La Zona de Vida Silvestre alberga más de 50 especies de aves, mamíferos y reptiles, incluyendo perezosos, loros, caimanes y varias especies de monos." },
      bring: { title: "Preparación", items: ["Protector solar y sombrero", "Ropa ligera y zapatos cómodos", "Agua potable y repelente de mosquitos", "Equipo de lluvia", "Cámara o teléfono inteligente"] }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Guayaquil", content: "El parque está a unos 20 km del Aeropuerto Internacional de Guayaquil, a aproximadamente 30-40 minutos en automóvil.", options: [
        { name: "Taxi (Más Conveniente)", price: "$15 - $25 USD", time: "Alrededor de 30-40 minutos", steps: ["Tome un taxi desde la sala de llegadas del aeropuerto", "Dígale al conductor que el destino es Parque Histórico de Guayaquil", "El viaje toma alrededor de 30-40 minutos"] },
        { name: "Alquiler de Automóvil", price: "$40 - $70 USD/día", time: "Alrededor de 30 minutos", steps: ["Alquile un automóvil en el aeropuerto o en el centro", "Configure la navegación al Parque Histórico de Guayaquil", "Siga los letreros hasta la entrada del parque"] }
      ]},
      city: { title: "Desde el Centro de Guayaquil", content: "Desde el centro de Guayaquil, cruce el puente principal sobre el Río Guayas, entre a Samborondón y siga los letreros.", steps: ["Navegación: Ingrese Parque Histórico de Guayaquil en Google Maps", "Estacionamiento: El parque tiene un estacionamiento dedicado"] },
      selfDrive: { title: "Viajando desde Otras Ciudades", content: "Desde Quito o Cuenca, llegue a Guayaquil primero, luego transfierase al transporte local al parque.", steps: ["Desde Quito: Tome un vuelo doméstico (aproximadamente 40 minutos)", "Desde Cuenca: Tome un bus de larga distancia (aproximadamente 3-4 horas)"] }
    },
    tips: { title: "Consejos de Viaje", items: ["Mejor Momento para Visitar: Madrugada 09:00 - 11:00 o tarde 15:00 - 17:00", "Los edificios históricos y la zona de vida silvestre son populares para fotos", "El parque tiene instalaciones de juego para niños", "Por favor, no alimente a los animales ni recolecte plantas"] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    reviews: { title: "Reseñas de Visitantes", subtitle: "Reseñas reales de Google Maps", viewMore: "Ver Más Reseñas en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Conozca más sobre el Parque Histórico de Guayaquil", items: [
      { question: "¿Cuál es el horario de apertura del parque?", answer: "Miércoles a viernes 09:00 - 17:00, sábado a domingo 09:00 - 17:00. El parque está cerrado los lunes y martes." },
      { question: "¿Cuánto cuestan los boletos?", answer: "Adultos aproximadamente $6 USD, niños (5-12 años) aproximadamente $3 USD, niños menores de 5 años entran gratis." },
      { question: "¿Es el parque adecuado para niños?", answer: "¡Muy adecuado! El parque es una atracción amigable para familias." },
      { question: "¿Puedo cenar o alojarme en el parque?", answer: "Sí. El parque tiene un hotel boutique y un restaurante panorámico." },
      { question: "¿Habrá barreras si solo hablo inglés?", answer: "Básicamente no. El personal del parque generalmente puede comunicarse en español e inglés básico." },
      { question: "¿Es el parque adecuado para la observación de aves?", answer: "¡Muy adecuado! La zona de vida silvestre es el hogar de varias especies de aves." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca?", answer: "Puede visitar las atracciones icónicas de Guayaquil, como Malecón 2000, el Barrio Las Peñas, etc." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "Av. Rio Esmeraldas, 092301 Samborondón, Ecuador", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como guardianes de la historia y la cultura, únase a nosotros para respetar la historia y proteger la naturaleza.", text: "© 2026 Guía de Viaje del Parque Histórico de Guayaquil · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de información turística.", made: "Este sitio web es un proyecto independiente de información turística. Hecho para exploradores", linksTitle: "Enlaces Relacionados", links: [
      { name: "Ministerio de Turismo", url: "https://www.gob.ec/mintur" },
      { name: "Visita Guayas", url: "https://visita.guayas.gob.ec/" },
      { name: "INPC", url: "https://www.patrimoniocultural.gob.ec/" },
      { name: "GAD Samborondón", url: "https://www.samborondon.gob.ec/" },
      { name: "Alcaldía de Guayaquil", url: "https://www.guayaquil.gob.ec/" }
    ]}
  }
};

export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type Translations = {
  nav: { about: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; animals: { title: string; content: string }; bring: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};
