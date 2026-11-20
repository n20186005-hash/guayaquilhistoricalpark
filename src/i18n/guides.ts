import type { Locale } from "./translations";

export const locales = ["en", "es", "zh"] as const;
export const slugs = ["hours-and-tickets", "wildlife-zone", "photo-guide"] as const;
export const siteUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "guayaquilhistoricalpark.com"}`;
export const parkMap = "https://maps.app.goo.gl/G32EiCLrwVkQkzCW9";
export const parkAuthority = "https://epmpsamborondon.gob.ec/";
export const municipalGuide = "https://www.samborondon.gob.ec/lugares-que-visitar-en-la-puntilla/";
export const guidePath = (locale: Locale, slug: string) => `/${locale}/guide/${slug}`;
export const guideLanguages = (slug: string) => ({
  en: guidePath("en", slug),
  es: guidePath("es", slug),
  zh: guidePath("zh", slug),
  "x-default": guidePath("en", slug),
});

type Guide = {
  title: string;
  description: string;
  sections: [string, string][];
  route: string[];
  faq: [string, string];
};

export const guideLabels = {
  en: { guides: "Park visitor guides", home: "Park overview", map: "Park entrance on Google Maps", explore: "Explore the park", about: "Park management", facts: "Practical information", address: "Address", hours: "Published opening hours", fees: "Published admission", time: "Daily, 09:00–17:00", price: "Adults US$4. Children aged 12 and under, older adults and visitors with disabilities US$2.", check: "Operator information checked on 20 November 2026. Confirm holiday hours, last admission and access to individual zones before setting out.", route: "Suggested walking route", photos: "Park photo gallery", sources: "Official sources", operator: "Municipal Public Parks Company of Samborondón", municipality: "Municipality of Samborondón", transport: "Getting there", directions: "Use the entrance on Av. Río Esmeraldas as your destination. If coming from Guayaquil, allow extra time for traffic toward La Puntilla. For public transit, check the current route and walking connection before departure.", faq: "Frequently asked question" },
  es: { guides: "Guías del Parque Histórico", home: "Inicio del parque", map: "Entrada del parque en Google Maps", explore: "Explora el parque", about: "Administración del parque", facts: "Información práctica", address: "Dirección", hours: "Horario publicado", fees: "Tarifas publicadas", time: "Todos los días, de 09:00 a 17:00", price: "Adultos USD 4. Niños de hasta 12 años, adultos mayores y personas con discapacidad USD 2.", check: "Información del administrador consultada el 20 de noviembre de 2026. Confirma el horario de feriados, la última hora de ingreso y el acceso a cada zona antes de salir.", route: "Recorrido a pie sugerido", photos: "Galería del parque", sources: "Fuentes oficiales", operator: "Empresa Pública Municipal de Parques de Samborondón", municipality: "Municipio de Samborondón", transport: "Cómo llegar", directions: "Marca el acceso de la av. Río Esmeraldas como destino. Si sales desde Guayaquil, deja margen para el tráfico hacia La Puntilla. Si utilizas transporte público, verifica la ruta y el tramo a pie antes de salir.", faq: "Pregunta frecuente" },
  zh: { guides: "公园专题指南", home: "公园首页", map: "在 Google 地图查看公园入口", explore: "探索公园", about: "公园管理单位", facts: "基本资料", address: "地址", hours: "管理方公布的开放时间", fees: "管理方公布的票价", time: "每天 09:00–17:00", price: "成人 4 美元。12 岁及以下儿童、长者及残障人士 2 美元。", check: "管理方信息核对于 2026 年 11 月 20 日。节假日开放、最晚入园和分区通行请在出发前核实。", route: "建议步行路线", photos: "公园实景图库", sources: "官方资料来源", operator: "桑博龙东市公共公园管理机构", municipality: "桑博龙东市政府", transport: "交通方式", directions: "导航请选 Av. Río Esmeraldas 的公园入口。从瓜亚基尔出发，前往拉蓬蒂利亚时预留堵车时间。若搭公共交通，出发前核对线路和下车后的步行距离。", faq: "常见问题" },
} satisfies Record<Locale, Record<string, string>>;

export const guides = {
  es: {
    "hours-and-tickets": {
      title: "Parque Histórico de Guayaquil: horarios y precios",
      description: "Consulta el horario y las tarifas publicados para el Parque Histórico de Samborondón, ubica la entrada y organiza un recorrido por sus tres zonas.",
      sections: [["Antes de salir", "Revisa el horario del día y pregunta por el último ingreso si planeas llegar por la tarde. Para grupos escolares o visitas con necesidades de movilidad, consulta al administrador las condiciones del día."], ["Qué ver con una sola visita", "El parque reúne fauna costera, arquitectura urbana y tradiciones rurales. Si tienes poco tiempo, elige la zona que más te interese y deja las otras como paradas opcionales."]],
      route: ["En la entrada de la av. Río Esmeraldas, pregunta qué zonas están habilitadas.", "Recorre primero la zona de vida silvestre si vas con niños, o empieza por las casas históricas si tu prioridad es la arquitectura.", "Termina en la zona de tradiciones si está abierta y vuelve por la ruta indicada por el personal."],
      faq: ["¿La entrada es gratuita?", "El administrador publica una tarifa general de USD 4 y una reducida de USD 2 para los grupos señalados. Comprueba las condiciones de descuentos y actividades especiales directamente con el parque."],
    },
    "wildlife-zone": {
      title: "Zona de Vida Silvestre del Parque Histórico de Guayaquil",
      description: "Planifica el paseo por las pasarelas de la zona de fauna y flora costera de Samborondón, con consejos de observación y visita en familia.",
      sections: [["Qué observar en el sendero", "Camina despacio por las pasarelas. Usa los paneles de cada recinto para relacionar las especies con los ambientes de la costa ecuatoriana y compara cómo cambia la vegetación entre tramos."], ["Visita con niños", "Acuerda una regla sencilla antes de entrar: mirar desde la pasarela y mantener las manos lejos de los recintos. El administrador prohíbe tocar o alimentar a los animales en el sendero y subir a los niños a las barandas."]],
      route: ["Pregunta en el acceso si el sendero de fauna está habilitado.", "Sigue la pasarela señalizada y deja espacio para que pasen otros visitantes cuando te detengas.", "Al salir, continúa hacia las casas históricas o regresa al acceso según el recorrido indicado."],
      faq: ["¿Se puede alimentar a los animales?", "No en el sendero. Consulta al personal si el área de interacción tiene alguna actividad habilitada el día de tu visita y sigue sus instrucciones."],
    },
    "photo-guide": {
      title: "Fotos del Parque Histórico de Guayaquil: arquitectura y senderos",
      description: "Ideas para fotografiar las casas de madera de la zona urbana, las pasarelas de vida silvestre y la zona de tradiciones en Samborondón.",
      sections: [["Fachadas del antiguo Guayaquil", "En la zona urbano-arquitectónica, compara la vista frontal de las fachadas con un encuadre oblicuo que muestre el ritmo de puertas, ventanas y balcones. El conjunto evoca el malecón de la ciudad alrededor de 1900."], ["Del bosque a las tradiciones", "Busca una vista de la pasarela desde un punto ancho y despejado. En la zona de tradiciones, usa los elementos de la arquitectura rural como tema y respeta las restricciones de acceso de cada espacio."]],
      route: ["Consulta en la entrada las reglas de fotografía antes de preparar el equipo.", "Empieza por las fachadas urbanas, continúa hacia las casas rurales y deja la pasarela para un encuadre desde el sendero, si está habilitada.", "Consulta la galería del parque para reconocer el ambiente de la visita."],
      faq: ["¿Puedo organizar una sesión de fotos?", "El administrador exige autorización para las sesiones fotográficas. Consulta con el parque si tu equipo o actividad requiere un permiso y evita obstruir las rutas de paso."],
    },
  },
  en: {
    "hours-and-tickets": {
      title: "Guayaquil Historical Park opening hours and tickets",
      description: "Check the published admission prices and opening hours, find the Samborondón entrance, and plan a walk through the park’s three zones.",
      sections: [["Before leaving", "Check the day’s schedule and ask about last admission if you are arriving in the afternoon. School groups and visitors with mobility needs can ask the operator about the day’s arrangements."], ["What to see in one visit", "The park brings together coastal wildlife, urban architecture and rural traditions. On a short visit, pick your priority zone first and treat the others as optional stops."]],
      route: ["At the Av. Río Esmeraldas entrance, ask which zones are open.", "Start with wildlife if visiting with children, or head to the historic houses if architecture is your priority.", "Finish in the traditions zone if it is open and follow staff directions back to the entrance."],
      faq: ["Is admission free?", "The operator lists a US$4 adult ticket and a US$2 reduced ticket for the groups shown above. Ask the park about eligibility and any separately priced activities."],
    },
    "wildlife-zone": {
      title: "Wildlife zone at Guayaquil Historical Park",
      description: "Plan a walk along the Samborondón wildlife boardwalks, learn what to look for and check the park’s rules for families.",
      sections: [["What to look for", "Walk slowly along the boardwalk. Use the enclosure signs to connect the animals with Ecuador’s coastal habitats and look for changes in the surrounding vegetation between stops."], ["Visiting with children", "Set a simple rule at the entrance: observe from the boardwalk and keep hands away from the enclosures. The operator prohibits touching or feeding animals along the trail and lifting children onto the railings."]],
      route: ["At the entrance, ask whether the wildlife trail is open.", "Follow the marked boardwalk and leave room for others to pass when you stop.", "After the wildlife trail, continue to the historic houses or follow signs back to the entrance."],
      faq: ["Can visitors feed the animals?", "Feeding is prohibited along the trail. Ask staff whether the designated interaction area has an activity on the day and follow their instructions."],
    },
    "photo-guide": {
      title: "Guayaquil Historical Park photos: historic houses and boardwalks",
      description: "Explore photo ideas for the wooden façades, wildlife boardwalks and rural traditions zone of Guayaquil Historical Park.",
      sections: [["Photographing the historic façades", "In the urban architecture zone, compare a straight-on photograph with an angled view that shows the rhythm of doors, windows and balconies. The area evokes Guayaquil’s waterfront around 1900."], ["From the woodland to the traditions zone", "Look for a wide, clear spot to frame the boardwalk. In the traditions zone, use features of rural buildings as subjects and observe any local access restrictions."]],
      route: ["Ask about photography rules before setting up equipment.", "Start with the urban façades, then take in the rural houses and look for a boardwalk view from the marked trail if it is open.", "Use the park gallery to get familiar with the setting before your visit."],
      faq: ["Can I arrange a photo shoot?", "The operator requires authorization for photo shoots. Ask the park about your equipment or activity and keep public paths clear."],
    },
  },
  zh: {
    "hours-and-tickets": {
      title: "瓜亚基尔历史公园开放时间和门票",
      description: "查看桑博龙东历史公园管理方公布的开放时间与票价，定位入口，并按兴趣安排三大主题区的游览顺序。",
      sections: [["出发前查什么", "先核实当天开放情况。下午到访时，向管理方问清最晚入园时间。学校团体和有行动辅助需求的游客可以提前询问当天的安排。"], ["一次游览怎么取舍", "公园把沿海野生动植物、城市建筑与乡村传统放在同一个园区。时间紧时，先看最感兴趣的主题区，再决定是否继续。"]],
      route: ["到 Av. Río Esmeraldas 入口，询问当天开放的区域。", "亲子游可以先看野生动植物区；关注建筑的游客可以先去历史建筑区。", "乡村传统区开放时可作为最后一站，再按工作人员指引返回入口。"],
      faq: ["需要买票吗？", "管理方公布的成人票为 4 美元，符合上表条件的游客为 2 美元。优惠资格与另收费活动可向园方核实。"],
    },
    "wildlife-zone": {
      title: "瓜亚基尔历史公园野生动植物区",
      description: "沿着桑博龙东历史公园的木栈道观察厄瓜多尔沿海的动植物，了解亲子游览路线以及园方规定。",
      sections: [["沿栈道观察什么", "沿木栈道慢走，结合各处说明牌认识动物与沿海生境的关系。留意不同路段植物的疏密和高度变化。"], ["带孩子怎么走", "入园前约定在栈道上观察，手不要伸进围栏。管理方规定，步道上禁止触摸或投喂动物，也不能让儿童坐上栏杆。"]],
      route: ["在入口询问野生动植物区步道当天是否开放。", "沿标识走木栈道，驻足观察时给其他游客留出通行空间。", "离开步道后，可接着游览历史建筑区，也可按标识返回入口。"],
      faq: ["可以喂动物吗？", "步道上禁止投喂。如想参加指定互动区的活动，请向工作人员核实当天是否开放，并遵守现场指引。"],
    },
    "photo-guide": {
      title: "瓜亚基尔历史公园照片指南：历史建筑与木栈道",
      description: "了解瓜亚基尔历史公园的木构立面、野生动植物区栈道与乡村建筑拍摄角度，并查看园方的拍摄规定。",
      sections: [["历史街景怎么拍", "在城市建筑区，先从正面看木构立面的门窗比例，再侧身取景，把门窗、阳台和连续的街景纳入构图。这里的建筑布置重现约 1900 年的瓜亚基尔滨水风貌。"], ["从林间走到乡村传统区", "在较宽且通行顺畅的位置取木栈道远景。到乡村传统区时，可以把乡村建筑的细部作为主体，遵守各区域的通行限制。"]],
      route: ["在入口先了解拍摄规定，再准备器材。", "从城市建筑立面开始，接着看乡村建筑；栈道开放时，从标示路线内寻找构图。", "出发前可浏览公园图库，熟悉园区的场景。"],
      faq: ["可以安排专门的摄影活动吗？", "管理方要求专门的摄影活动取得许可。请事先确认器材和拍摄活动是否需要批准，并保持游览通道畅通。"],
    },
  },
} satisfies Record<Locale, Record<(typeof slugs)[number], Guide>>;
