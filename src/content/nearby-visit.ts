import type { Locale } from "@/i18n/translations";
import visitData from "./nearby-visit.json";

export function getVisit(slug: string) {
  const visit = visitData[slug as keyof typeof visitData];
  return {
    ...visit,
    kind: visit.kind as keyof typeof kinds.en,
    area: visit.area as keyof typeof areas.en,
    access: visit.access as keyof typeof access.en | keyof typeof newAccess.en,
  };
}

export const visitLabels = {
  en: { intro: "Explore", advice: "Visit tips", highlights: "Highlights", kind: "Attraction type", country: "Country", countryName: "Ecuador", city: "City or canton", area: "Area", duration: "Suggested visit", minutes: "minutes", manager: "Managing body or visitor authority", hour: "Opening hours", ticket: "Admission and tickets", discovery: "History, architecture and experiences", notice: "Before you go", stay: "Where to stay", directions: "Address and map", rating: "Google Maps ratings and reviews", editorial: "Suggested time on site, excluding transfers and queues.", info: "The linked visitor information has the latest access notices.", faq: "Frequently asked question" },
  es: { intro: "Explora", advice: "Consejos para la visita", highlights: "Qué destaca", kind: "Tipo de atractivo", country: "País", countryName: "Ecuador", city: "Ciudad o cantón", area: "Sector", duration: "Tiempo sugerido de visita", minutes: "minutos", manager: "Gestión o información para visitantes", hour: "Horario de apertura", ticket: "Entrada y tarifas", discovery: "Historia, arquitectura y experiencias", notice: "Antes de ir", stay: "Dónde alojarse", directions: "Dirección y mapa", rating: "Valoraciones y reseñas en Google Maps", editorial: "Tiempo orientativo en el lugar, sin traslados ni filas.", info: "Consulta en la fuente enlazada los avisos de acceso más recientes.", faq: "Pregunta frecuente" },
  zh: { intro: "探索景点", advice: "游览建议", highlights: "景区特色", kind: "景点类型", country: "国家", countryName: "厄瓜多尔", city: "城市或行政区", area: "所在区域", duration: "建议停留", minutes: "分钟", manager: "管理或访客咨询机构", hour: "开放时间", ticket: "门票价格", discovery: "发现魅力", notice: "游览须知", stay: "住宿建议", directions: "交通指南", rating: "查看 Google 地图评分与评价", editorial: "预计在景点停留的时间，交通和排队另计。", info: "如遇节假日或临时调整，请查看来源链接的最新公告。", faq: "常见问题" },
};

export const kinds = {
  en: { parish: "Historic church", cemetery: "Heritage cemetery", market: "Craft market", racecourse: "Racecourse", library: "Library", rail: "Heritage railway station", reservoir: "Reservoir recreation area", forest: "Protected forest", zoo: "Zoo", cable: "Cable-car station", riverfront: "Waterfront promenade", monument: "Historic monument", ride: "Observation wheel", garden: "Public park or garden", square: "Public square", museum: "Museum", district: "Historic streetscape", hill: "Hill and stairway", viewpoint: "Lighthouse and viewpoint", church: "Cathedral", civic: "Civic building", sports: "Sports and recreation park", wetland: "Protected wetland", theatre: "Performing arts venue" },
  es: { parish: "Iglesia histórica", cemetery: "Cementerio patrimonial", market: "Mercado artesanal", racecourse: "Hipódromo", library: "Biblioteca", rail: "Estación ferroviaria patrimonial", reservoir: "Área recreativa de embalse", forest: "Bosque protector", zoo: "Zoológico", cable: "Estación de teleférico", riverfront: "Paseo ribereño", monument: "Monumento histórico", ride: "Noria panorámica", garden: "Parque o jardín público", square: "Plaza pública", museum: "Museo", district: "Entorno urbano histórico", hill: "Cerro y escalinata", viewpoint: "Faro y mirador", church: "Catedral", civic: "Edificio cívico", sports: "Parque deportivo y recreativo", wetland: "Humedal protegido", theatre: "Recinto de artes escénicas" },
  zh: { parish: "历史教堂", cemetery: "历史公墓", market: "手工艺市场", racecourse: "赛马场", library: "公共图书馆", rail: "历史铁路车站", reservoir: "水库游憩区", forest: "保护林", zoo: "动物园", cable: "空中缆车站", riverfront: "滨水步道", monument: "历史纪念建筑", ride: "观景摩天轮", garden: "公共公园或园林", square: "公共广场", museum: "博物馆", district: "历史街区", hill: "山丘与登山阶梯", viewpoint: "灯塔与观景台", church: "主教座堂", civic: "市政建筑", sports: "运动休闲公园", wetland: "受保护湿地", theatre: "表演艺术场馆" },
};

export const areas = {
  en: { sambocenter: ["Samborondón cantonal centre", "For an early visit to the town centre, compare the road journey from La Puntilla and the return options before booking."], duran: ["Durán", "Stay near your other planned stops and compare the journey to the rail station before booking. The cable-car and railway stations are separate."], historic: ["Central Guayaquil and the Guayas riverfront", "Stay in central Guayaquil to link museums and the waterfront on foot. Choose Puerto Santa Ana for a riverfront base close to Las Peñas."], west: ["Estero Salado", "Consider the 9 de Octubre corridor for the estuary and central museums. If ending the evening at Guayarte, check the journey back before booking."], south: ["Southern Guayaquil and the Guayas", "A central Guayaquil base works for a daytime visit. Compare travel time to the south-side entrance and allow time for the return."], north: ["Northern Guayaquil", "For an early start, look in northern Guayaquil and compare the drive to the Paseo del Parque entrance."], puntilla: ["La Puntilla, Samborondón", "Look in La Puntilla if attending an evening show or visiting Historical Park the next morning. If staying in Guayaquil, plan for traffic and arrange the return journey."] },
  es: { sambocenter: ["Cabecera cantonal de Samborondón", "Si quieres visitar temprano el centro cantonal, compara el traslado desde La Puntilla y las opciones de regreso."], duran: ["Durán", "Elige alojamiento según tus otras paradas y calcula el viaje a la estación ferroviaria. El teleférico llega a otra estación."], historic: ["Centro de Guayaquil y ribera del Guayas", "Alojarte en el centro facilita enlazar los museos y el malecón a pie. Puerto Santa Ana conviene si priorizas la ribera y Las Peñas."], west: ["Estero Salado", "El corredor de la avenida 9 de Octubre sirve de base para el estero y los museos céntricos. Si terminas en Guayarte por la noche, verifica el regreso."], south: ["Sur de Guayaquil y río Guayas", "El centro funciona como base para una salida diurna. Calcula el traslado al acceso del sur y deja margen para regresar."], north: ["Norte de Guayaquil", "Si quieres empezar temprano, compara alojamientos del norte por su conexión con la entrada de Paseo del Parque."], puntilla: ["La Puntilla, Samborondón", "Busca alojamiento en La Puntilla si vas al teatro por la noche o al Parque Histórico por la mañana. Desde Guayaquil, prevé el tráfico y organiza el regreso."] },
  zh: { sambocenter: ["桑博龙东镇中心", "计划一早参观镇中心时，订房前可比较从拉蓬蒂利亚到镇中心的车程和回程安排。"], duran: ["杜兰", "住宿可按其他行程安排，订房前核对到铁路站的车程。空中缆车站与铁路站分开。"], historic: ["瓜亚基尔市中心与瓜亚斯河岸", "住市中心可步行串联博物馆和长廊；想靠近拉斯佩尼亚斯和河岸，可考虑圣安娜港一带。"], west: ["萨拉多河口", "住十月九日大道沿线便于往返河口和市中心博物馆；若晚间在瓜亚尔特结束行程，订房时先核对回程。"], south: ["瓜亚基尔南部与瓜亚斯河", "白天可从市中心出发，选住宿时比较前往城南入口的车程，并留足回程时间。"], north: ["瓜亚基尔北部", "若计划一早到公园，可比较瓜亚基尔北部住宿到 Paseo del Parque 入口的距离。"], puntilla: ["桑博龙东拉蓬蒂利亚", "看晚间演出或隔天逛历史公园，可考虑住拉蓬蒂利亚；若住瓜亚基尔，记得预留过桥通勤时间并安排返程。"] },
};

const access = {
  en: {
    river: ["Malecón 2000 promenade: daily 07:00–00:00. Individual venues may differ.", "The public promenade is free to enter. Separate attractions may charge."],
    perla: ["Monday–Thursday 12:30–20:00; Friday–Sunday 10:00–22:30.", "US$3.50 Monday–Friday; US$5 Saturdays, Sundays and holidays."],
    separate: ["Daily and public holidays, 10:00–18:00.", "US$2 per person."],
    cacao: ["Tuesday–Sunday 10:00–17:00.", "Free admission."],
    tuesSat: ["Tuesday–Saturday 10:00–17:00.", "Free admission."],
    municipal: ["Tuesday–Saturday 09:00–17:30.", "Free admission."],
    nahim: ["Tuesday–Saturday 09:00–17:00.", "Free admission."],
    museum: ["Check the current museum programme before visiting. Gallery openings can change.", "Check the museum listing for admission and special activities."],
    public: ["Check local hours and access notices. Individual sites and facilities have separate schedules.", "The public outdoor stop has no separate attraction ticket. Activities and adjacent venues may charge."],
    lighthouse: ["Check the city notice for tower access. The outdoor lookout may operate separately.", "Check the city’s notice for any tower entry arrangements."],
    services: ["Visitor entry depends on services and parish notices.", "Check with the parish about any special tours or events."],
    exterior: ["Plan an exterior visit. Interior access depends on official tours or events.", "An exterior stop has no separate admission ticket."],
    waterfront: ["Check the waterfront operator’s notices for available sections and entrances.", "Public walkway access and paid activities are handled separately."],
    events: ["Consult Parques EP for plaza and activity opening times.", "Food, commercial activities and special events are priced separately by their operators."],
    park: ["Consult Parques EP for the current gate and facility schedule.", "Ask Parques EP about any facility reservations or activity charges."],
    nature: ["The protected-area guide lists 08:00–17:00. Verify bridge and trail access independently.", "Check access and registration with the protected-area administration. Boat transfers are separate."],
    theatre: ["Opening and entry depend on the performance schedule.", "Prices vary by performance and seating. Check the theatre’s programme."],
  },
  es: {
    river: ["Paseo Malecón 2000: todos los días de 07:00 a 00:00. Cada recinto puede tener otro horario.", "Entrada libre al paseo público. Algunas atracciones tienen tarifa propia."],
    perla: ["Lunes a jueves de 12:30 a 20:00; viernes a domingo de 10:00 a 22:30.", "USD 3,50 de lunes a viernes; USD 5 los sábados, domingos y feriados."],
    separate: ["Todos los días y feriados de 10:00 a 18:00.", "USD 2 por persona."],
    cacao: ["Martes a domingo de 10:00 a 17:00.", "Entrada libre."],
    tuesSat: ["Martes a sábado de 10:00 a 17:00.", "Entrada libre."],
    municipal: ["Martes a sábado de 09:00 a 17:30.", "Entrada libre."],
    nahim: ["Martes a sábado de 09:00 a 17:00.", "Entrada libre."],
    museum: ["Consulta la agenda actual del museo. Las salas abiertas pueden cambiar.", "Consulta el acceso general y las actividades especiales en la ficha del museo."],
    public: ["Consulta el horario local y los avisos de acceso. Cada instalación tiene su propio horario.", "La parada en el espacio público exterior no tiene boleto independiente. Los recintos cercanos pueden cobrar."],
    lighthouse: ["Consulta el aviso municipal para entrar en la torre. El mirador exterior tiene acceso independiente.", "Consulta al Municipio si hay condiciones específicas para entrar en la torre."],
    services: ["El acceso depende del culto y de los avisos de la parroquia.", "Consulta con la parroquia las condiciones de recorridos o eventos especiales."],
    exterior: ["Planea ver el exterior. El acceso interior depende de visitas o actos oficiales.", "La visita exterior no requiere boleto independiente."],
    waterfront: ["Consulta los avisos del operador sobre tramos y accesos habilitados.", "El paso por el paseo público y las actividades de pago se gestionan por separado."],
    events: ["Consulta en Parques EP los horarios de la plaza y su programación.", "Los locales y las actividades especiales aplican sus propias tarifas."],
    park: ["Consulta en Parques EP el horario de accesos e instalaciones.", "Consulta a Parques EP sobre reservas y tarifas de actividades o instalaciones."],
    nature: ["La guía del área publica 08:00–17:00. Confirma por separado el paso del puente y los senderos.", "Consulta el acceso y registro con la administración. El transporte en lancha se gestiona aparte."],
    theatre: ["El acceso depende de la cartelera de cada función.", "El precio varía por espectáculo y localidad. Consulta la cartelera del teatro."],
  },
  zh: {
    river: ["马雷孔 2000 公共长廊每天 07:00–午夜开放，各场馆时间另计。", "公共长廊可免费进入，个别游乐和文化项目另行收费。"],
    perla: ["周一至周四 12:30–20:00，周五至周日 10:00–22:30。", "周一至周五 3.50 美元，周末和节假日 5 美元。"],
    separate: ["每天及节假日 10:00–18:00。", "每人 2 美元。"],
    cacao: ["周二至周日 10:00–17:00。", "免费入场。"],
    tuesSat: ["周二至周六 10:00–17:00。", "免费入场。"],
    municipal: ["周二至周六 09:00–17:30。", "免费入场。"],
    nahim: ["周二至周六 09:00–17:00。", "免费入场。"],
    museum: ["出发前查询展馆当期开放安排，展厅开放情况可能调整。", "请查看馆方的常设展及特别活动入场安排。"],
    public: ["请查阅当地开放和通行公告，园区或街区内的设施可能另有时间。", "公共户外参观点没有独立门票，周边场馆与活动可能收费。"],
    lighthouse: ["塔内是否开放以市政府公告为准，塔外观景区可能另有安排。", "塔内参观请按市政府当期公布的入场安排。"],
    services: ["入内参观以当天礼拜及教堂通告为准。", "特别导览或活动请向教堂咨询。"],
    exterior: ["以外观参观为主，内部开放随官方活动或导览安排。", "外观参观无单独门票。"],
    waterfront: ["请查看运营方公告，确认开放区段与入口。", "公共步道通行与付费活动分别安排。"],
    events: ["向瓜亚基尔市公园机构查询广场及当天活动的开放时间。", "餐饮、商户和特别活动按各自公布的价格收费。"],
    park: ["园门及场地开放时间请查瓜亚基尔市公园机构公告。", "场地预约及活动费用请向公园管理方咨询。"],
    nature: ["保护区指南列出 08:00–17:00；桥梁与步道通行需另行核实。", "请向保护区管理方核实登记与入场要求，船程另行安排。"],
    theatre: ["开放和入场时间按演出场次安排。", "票价随演出和座位而异，请查看剧院节目单。"],
  },
};

export function visitAccess(locale: Locale, kind: keyof typeof access.en | keyof typeof newAccess.en) {
  const operator = kind === "river" ? "https://malecon.org.ec/" :
    kind === "perla" || kind === "separate" ? "https://malecon.org.ec/entretenimiento.php" :
    kind === "theatre" ? "https://teatrosanchezaguilar.org/" :
    kind === "botanical" ? "https://www.orquideasecuador.org.ec/jard%C3%ADnbot%C3%A1nico" :
    kind === "zoo" ? "https://www.zoologicoelpantanal.com/informacion.html" :
    kind === "cerroblanco" ? "https://bosquecerroblanco.org/?page_id=2383" : undefined;
  const [hours, price] = { ...access[locale], ...newAccess[locale] }[kind];
  return { hours, price, operator };
}

const notices = {
  en: {
    slopes: "The staircase has sustained climbs. Wear shoes with grip, take breaks at landings and leave space for descending visitors.",
    collections: "Check gallery rules for bags, flash and photography. Exhibition access can differ from the museum’s published opening hours.",
    water: "Use the marked paths and open sections. Stay behind barriers and check the return route before sunset.",
    civic: "Keep entrances and pedestrian routes clear. For worship, office access or events, follow the instructions posted at the site.",
    events: "Check the entrance on your ticket and allow time to find the venue. Ask staff about late entry and photography.",
    outdoors: "Plan for heat and rain, and check gate or facility changes before leaving. Give wildlife space where present.",
  },
  es: {
    slopes: "La subida es sostenida. Usa calzado con agarre, descansa en los rellanos y deja espacio para quienes bajan.",
    collections: "Consulta las reglas de bolsos, flash y fotografía. El acceso a cada exposición puede diferir del horario general del museo.",
    water: "Usa senderos señalizados y tramos abiertos. Respeta las barreras y comprueba la ruta de regreso antes del anochecer.",
    civic: "Deja libres puertas y vías de paso. Sigue las instrucciones locales para culto, oficinas o actos públicos.",
    events: "Revisa el acceso indicado en tu boleto y llega con tiempo. Consulta las reglas de entrada tardía y fotografía.",
    outdoors: "Prevé calor y lluvia y verifica cambios en accesos e instalaciones antes de salir. Mantén distancia de la fauna.",
  },
  zh: {
    slopes: "上山路段持续爬升，请穿防滑鞋，在平台歇脚并给下山游客留出通道。",
    collections: "先了解包袋、闪光灯和拍摄规定。部分展厅的开放时间可能与馆舍不同。",
    water: "沿标示及开放区段行走，留在栏杆内，并在天黑前确认回程路线。",
    civic: "请给出入口和行人通道留出空间，礼拜、办公区和活动另按现场指引通行。",
    events: "按票面信息找入口，给入场留时间，并向工作人员了解迟到入场和拍摄安排。",
    outdoors: "注意防晒和降雨，出发前留意入口与设施的临时调整。遇到野生动物时保持距离。",
  },
};

export function visitNotice(locale: Locale, kind: keyof typeof kinds.en) {
  const text = notices[locale];
  switch (kind) {
    case "hill":
    case "viewpoint": return text.slopes;
    case "museum": return text.collections;
    case "reservoir":
    case "forest":
    case "riverfront":
    case "wetland": return text.water;
    case "parish":
    case "cemetery":
    case "church":
    case "civic":
    case "monument":
    case "square": return text.civic;
    case "theatre":
    case "ride": return text.events;
    default: return text.outdoors;
  }
}

export const areaTransit = {
  en: {
    sambocenter: "The town centre is separate from La Puntilla. Ask for the main square and continue on foot between the civic buildings.",
    duran: "Confirm the final street approach rather than relying on a general Durán drop-off.",
    historic: "If you are already in the city centre, walk from the nearest named street crossing in the route below. For a taxi, use the attraction’s individual entrance rather than the general waterfront or historic district.",
    west: "For an estuary visit, use the named bridge or avenue as your drop-off point. Check the pedestrian connection before adding another stop on the opposite bank.",
    south: "Ask the driver for the visitor access on the El Oro side when approaching from central Guayaquil. Check the return connection before continuing away from the main road.",
    north: "Use Paseo del Parque to identify the correct approach. A ride to the park boundary may leave a long walk to your chosen sports area.",
    puntilla: "If combining this with the Historical Park, use the two entrances as separate destinations. Check the theatre drop-off point if your performance is in the evening.",
  },
  es: {
    sambocenter: "La cabecera cantonal queda aparte de La Puntilla. Usa el parque central como referencia y enlaza los edificios a pie.",
    duran: "Verifica el acceso por calle en lugar de marcar solo Durán como destino.",
    historic: "Si ya estás en el centro, camina desde el cruce señalado en el recorrido. Para un taxi, usa el acceso concreto del atractivo en lugar de indicar solo el malecón o el barrio histórico.",
    west: "Usa el puente o la avenida indicados como punto de bajada. Comprueba la conexión peatonal antes de añadir una parada en la otra orilla.",
    south: "Desde el centro, pide el acceso de visitantes por el sector de El Oro. Verifica cómo regresar antes de alejarte de la vía principal.",
    north: "Usa Paseo del Parque para identificar el acceso correcto. Si te dejan en el límite del parque, puede quedar un tramo largo a pie hasta las canchas.",
    puntilla: "Si combinas esta visita con el Parque Histórico, utiliza las dos entradas como destinos distintos. Verifica el punto de bajada si vas al teatro por la noche.",
  },
  zh: {
    sambocenter: "镇中心与拉蓬蒂利亚分开定位，可先到中央公园，再步行串联附近公共建筑。",
    duran: "请以车站所在道路为终点，避免只输入杜兰市名。",
    historic: "已在市中心时，可从下方路线标出的路口步行。搭出租车时直接提供本景点的入口，方便司机找到正确下车点。",
    west: "前往萨拉多河口时，以下文列出的桥梁或大道为下车点。若想走到对岸，再确认当天步行通道。",
    south: "从市中心乘车，可请司机到埃尔奥罗街一侧的访客入口。离开主路前先核对返程接驳。",
    north: "以 Paseo del Parque 辨认入口。公园范围较大，在边界下车后可能还要步行一段才能到运动区。",
    puntilla: "若同一天去历史公园和剧院，请分别导航至各自入口。晚间观演可先查看剧院的乘车下客点。",
  },
};

const newAccess = {
  en: {
    cerroblanco: ["Daily and holidays, 08:00–16:00 by reservation. The operator recommends booking two to three working days ahead.", "Ask the operator for the admission and guiding fee for your chosen trail."],
    oldhall: ["The municipal listing gives Tuesday–Sunday, 08:00–14:00. Check before travelling.", "The municipal listing describes free admission."],
    library: ["Monday–Friday 08:30–17:00. Ask about guided visits separately.", "General admission is free; confirm arrangements for group visits."],
    aerovia: ["Check the ATM service status before crossing.", "Use the fare and payment method currently published by ATM."],
    forest: ["Verify trail and visitor access with the operator before departing.", "Confirm whether the chosen trail has a ticket, guide fee or booking requirement."],
    zoo: ["Daily 10:00–16:00, as published by the zoo.", "US$10 adults; US$5 students, older adults and children."],
    racing: ["Public access follows the race schedule.", "Confirm spectator access and any ticketing with the racecourse."],
    match: ["Entry follows the event schedule; exterior viewing is possible from public streets.", "Match or event ticket prices are published by the organiser."],
    cemetery: ["Ask the operator about the visitor gate and heritage route.", "Confirm any guided tour conditions with the cemetery operator."],
    botanical: ["Daily 08:00–17:00, as listed by the orchid association. Confirm before travelling.", "US$3 adults. US$1.50 for students, children under 12 and older adults. Infants enter free. Confirm with the garden."],
    astillero: ["Check which Astillero museum rooms are open before setting off.", "The municipal museum circuit lists free admission. Check for special activities separately."],
    lake: ["The protected-area guide lists 08:00–17:00 for the picnic area and 06:00–17:00 for the lookout and cycle route.", "Check current entry arrangements and any activity costs with the protected-area authority."],
    campus: ["Confirm both campus and museum access with the university.", "Ask the university about admission for individuals or groups."],
  },
  es: {
    cerroblanco: ["Todos los días y feriados, 08:00–16:00, con reserva. El operador recomienda reservar con dos o tres días laborables de antelación.", "Consulta el costo de entrada y guía para el sendero elegido."],
    oldhall: ["La ficha municipal indica de martes a domingo, 08:00–14:00. Confirma antes de viajar.", "La ficha municipal indica entrada libre."],
    library: ["Lunes a viernes, 08:30–17:00. Consulta por separado las visitas guiadas.", "Entrada general gratuita. Confirma las condiciones para grupos."],
    aerovia: ["Consulta el estado del servicio de la ATM antes de cruzar.", "Usa la tarifa y el medio de pago que publica la ATM."],
    forest: ["Confirma los senderos y accesos disponibles con el operador.", "Verifica si el recorrido elegido requiere entrada, guía o reserva."],
    zoo: ["Todos los días de 10:00 a 16:00, según el zoológico.", "USD 10 adultos; USD 5 estudiantes, adultos mayores y niños."],
    racing: ["El acceso público sigue la programación hípica.", "Consulta las condiciones de acceso a las gradas con el hipódromo."],
    match: ["El acceso sigue la programación. El exterior se observa desde las calles públicas.", "Los precios de cada partido o evento los publica el organizador."],
    cemetery: ["Consulta al operador el acceso de visitantes y el circuito patrimonial.", "Confirma con el cementerio si hay condiciones para visitas guiadas."],
    botanical: ["Todos los días de 08:00 a 17:00, según la asociación de orquideología. Confirma antes de salir.", "USD 3 adultos; USD 1,50 estudiantes, menores de 12 años y adultos mayores; infantes gratis. Confirma con el jardín."],
    astillero: ["Comprueba qué salas del Astillero están abiertas antes de salir.", "El circuito municipal indica entrada libre. Consulta las actividades especiales."],
    lake: ["La guía del área indica 08:00–17:00 para el picnic y 06:00–17:00 para el mirador y la ruta ciclista.", "Confirma el acceso y los posibles costos de actividades con la administración del área."],
    campus: ["Confirma con la universidad el acceso al campus y al museo.", "Consulta a la universidad las condiciones para visitas individuales o en grupo."],
  },
  zh: {
    cerroblanco: ["每天及节假日 08:00–16:00，需预约；管理方建议提前两至三个工作日办理。", "门票和导览费用请按拟走的路线向管理方确认。"],
    oldhall: ["市政府资料列出周二至周日 08:00–14:00，出发前请核实。", "市政府资料列为免费开放。"],
    library: ["周一至周五 08:30–17:00，导览需另查。", "普通入场免费，团体请先核对接待条件。"],
    aerovia: ["跨河前查询 ATM 发布的当前运营状态。", "以 ATM 公布的票价和支付方式为准。"],
    forest: ["出发前向管理方确认访客入口与可走步道。", "了解所选路线是否另外需要门票、导览费或预约。"],
    zoo: ["园方公布每天 10:00–16:00。", "成人 10 美元；学生、长者及儿童 5 美元。"],
    racing: ["公众入场随赛事日程安排。", "看台开放和票务请向赛马场查询。"],
    match: ["按比赛或活动场次开放，外观可从公共道路观察。", "比赛及活动门票以主办方公布为准。"],
    cemetery: ["请向管理方核实访客入口及遗产游览路线。", "若需导览，入口与费用安排请向公墓管理方查询。"],
    botanical: ["兰花协会公布每天 08:00–17:00；出发前请与园方核实。", "成人 3 美元；学生、未满 12 岁儿童和长者 1.50 美元；婴幼儿免费。以园方确认为准。"],
    astillero: ["出发前确认阿斯蒂列罗大楼当天开放哪些展厅。", "市政府博物馆路线列为免费；特别活动另行核实。"],
    lake: ["保护区指南列明野餐区 08:00–17:00，观景区和自行车路线 06:00–17:00。", "实际入场和活动费用请向保护区管理方核实。"],
    campus: ["先向校方核实校园与博物馆的访客准入时间。", "散客及团体访问条件请向校方确认。"],
  },
};

export const practicalLabels = {
  en: { overview: "Plan your visit", route: "Get directions from Historical Park", source: "Operator or visitor information", arrival: ["Start at", "Main stop", "Finish at"], time: "Suggested time", location: "Visitor entrance" },
  es: { overview: "Planifica tu visita", route: "Indicaciones desde el Parque Histórico", source: "Operador o información para visitantes", arrival: ["Comienza en", "Parada principal", "Termina en"], time: "Tiempo sugerido", location: "Acceso para visitantes" },
  zh: { overview: "出发前速览", route: "查询从历史公园出发的路线", source: "管理方或访客资料", arrival: ["起点", "主要看点", "终点"], time: "建议停留", location: "访客入口" },
};

export const operatorNotes: Record<string, Record<Locale, string>> = {
  "antiguo-palacio-samborondon": {
    en: "Samborondón’s municipality identifies the building as a former private home, later used by the council and restored as a local traditions museum. Its wooden stair and furnished rooms are part of the visit.",
    es: "El Municipio de Samborondón identifica el inmueble como una vivienda que pasó a ser sede del cabildo y fue restaurada como museo de tradiciones. Su escalera de madera y sus ambientes amueblados forman parte de la visita.",
    zh: "桑博龙东市政府记载，这座建筑原为私人住宅，后改作市政办公场所，经修复成为地方传统博物馆。木楼梯和保有旧家具的房间是参观重点。",
  },
  "plaza-san-francisco": {
    en: "Guayaquil’s municipal works department renovated the square, including the fountain around the Vicente Rocafuerte monument. The church entrance and public square have separate access arrangements.",
    es: "La Dirección de Obras Públicas de Guayaquil renovó la plaza y la pileta que rodea el monumento a Vicente Rocafuerte. La entrada al templo y el acceso a la plaza se organizan por separado.",
    zh: "瓜亚基尔市公共工程部门整修了广场，包括环绕比森特·罗卡富埃尔特纪念像的喷泉。广场与教堂分别开放。",
  },
  "biblioteca-municipal": {
    en: "The municipal library offers guided visits to its reading rooms and heritage collections. Schools and other groups can use its visitor page to check the request process before arriving.",
    es: "La Biblioteca Municipal ofrece visitas guiadas a las salas de lectura y colecciones patrimoniales. Los centros educativos y otros grupos pueden consultar cómo solicitar una visita en la página de la biblioteca.",
    zh: "市立图书馆提供阅览室与历史文献收藏导览。学校及其他团体可先在图书馆访客页查询申请方式。",
  },
  "museo-bae": {
    en: "The Maritime History Institute of the Ecuadorian Navy manages the naval museums in the Jambelí complex. Ask specifically for the Calderón gunboat, one of several collections on the site.",
    es: "El Instituto de Historia Marítima de la Armada del Ecuador administra los museos del Complejo Jambelí. Pregunta por el cañonero Calderón, una de las colecciones del recinto.",
    zh: "厄瓜多尔海军海事历史研究所管理汉贝利综合区的海军博物馆。园区内有多处展馆，到场可指名询问卡尔德龙炮舰。",
  },
  "cerro-blanco": {
    en: "Fundación Pro-Bosque manages the protected forest. Its booking instructions ask for the chosen trail, date, time and group size. The operator prohibits bringing pets into the reserve.",
    es: "La Fundación Pro-Bosque administra el bosque protector. Para reservar pide indicar sendero, fecha, hora y número de personas. El operador no permite el ingreso de mascotas.",
    zh: "保护林由 Pro-Bosque 基金会管理。预约时须提供拟走的步道、日期、时间与人数。管理方规定宠物不得进入保护区。",
  },
  "parque-lago": {
    en: "The environmental authority lists separate opening times for the picnic area, the lookout and the cycle route. When planning the visit, choose a specific recreation area before setting off for the main entrance at kilometre 26.",
    es: "La autoridad ambiental publica horarios distintos para el área de picnic, el mirador y la ruta ciclista. Elige el sector antes de salir hacia el acceso principal del kilómetro 26.",
    zh: "环境主管部门分别列出了野餐区、观景区和自行车路线的开放时段。出发前先选定游憩区，再导航至 26 公里处的主入口。",
  },
  "zoologico-pantanal": {
    en: "The zoo asks visitors to stay with their guide, respect enclosure barriers and refrain from touching or feeding animals. It permits water and excludes other food and drinks.",
    es: "El zoológico pide mantener el grupo con su guía, respetar las barreras y evitar tocar o alimentar a los animales. Permite llevar agua y restringe otros alimentos y bebidas.",
    zh: "园方要求访客随导览同行，遵守围栏规定，勿触摸或投喂动物。可携带饮用水，其他食品及饮料按园方规定不得带入。",
  },
};
