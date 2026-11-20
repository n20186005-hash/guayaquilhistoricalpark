import type { Locale } from "@/i18n/translations";
import places from "./nearby-places.json";
import photos from "./nearby-photos.json";

export const nearby = places;
export type NearbyPlace = (typeof nearby)[number];

export const nearbyPath = (locale: Locale, slug?: string) => `/${locale}/nearby${slug ? `/${slug}` : ""}`;
export const nearbyLanguages = (slug?: string) => ({
  en: nearbyPath("en", slug),
  es: nearbyPath("es", slug),
  zh: nearbyPath("zh", slug),
  "x-default": nearbyPath("en", slug),
});

export const placeMap = (place: NearbyPlace) => {
  const city = place.slug === "teatro-sanchez-aguilar" ? "Samborondón" : "Guayaquil";
  const query = [place.names.es, place.address, city, "Ecuador"].join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
};

const authorities: Record<string, { name: string; url: string }> = {
  river: { name: "Fundación Malecón 2000", url: "https://malecon.org.ec/fundacion.php" },
  city: { name: "Municipio de Guayaquil", url: "https://guayaquil.gob.ec/" },
  parks: { name: "Parques EP Guayaquil", url: "https://parquesep.gob.ec/" },
  maac: { name: "Museo Antropológico y de Arte Contemporáneo", url: "https://turismo.guayaquil.gob.ec/es/experiencias/cultura" },
  nahim: { name: "Museo Nahim Isaías", url: "https://turismo.guayaquil.gob.ec/es/experiencias/cultura" },
  presley: { name: "Museo Presley Norton", url: "https://turismo.guayaquil.gob.ec/es/experiencias/cultura" },
  fire: { name: "Benemérito Cuerpo de Bomberos de Guayaquil", url: "https://www.bomberosguayaquil.gob.ec/acerca-del-museo/" },
  church: { name: "Arquidiócesis de Guayaquil", url: "https://www.conferenciaepiscopal.ec/arquidiocesis-de-guayaquil.html" },
  environment: { name: "Administración del Área Nacional de Recreación Isla Santay", url: "https://www.ambiente.gob.ec/wp-content/uploads/downloads/2024/11/COSTA-2-OK.pdf" },
  theatre: { name: "Fundación Sánchez Aguilar", url: "https://teatrosanchezaguilar.org/terminos.html" },
};

const sources: Record<string, string> = {
  lighthouse: "https://guayaquil.gob.ec/faro-cerro-santa-ana-renueva-obra-artistica-limita-ingreso-mes/",
  miniature: "https://malecon.org.ec/educacion.php",
  malecon: "https://malecon.org.ec/turismo.php",
  monuments: "https://guayaquil.gob.ec/monumentos-sitios-historicos-proyectan-identidad-guayaquil-mundo/",
  route: "https://servicios.turismo.gob.ec/wp-content/uploads/2023/04/Manual_generacion_rutas_itinerarios_sub2021_compressed.pdf",
  culture: "https://turismo.guayaquil.gob.ec/es/experiencias/cultura",
  museums: "https://guayaquil.gob.ec/descubre-cultura-historia-guayaquil-caminando-museos/",
  cacao: "https://guayaquil.gob.ec/museo-cacao-abre-puertas-manera-gratuita-bajo-administracion-municipio/",
  fire: authorities.fire.url,
  panama: "https://guayaquil.gob.ec/calle-panama-puerta-turistica-guayaquil-rincon-magico/",
  colon: "https://www.goraymi.com/es-ec/guayas/guayaquil/parques-plazas/plaza-colon-a31e23a37",
  foundation: authorities.river.url,
  parks: authorities.parks.url,
  guayarte: "https://parquesep.gob.ec/plaza-guayarte/",
  nature: authorities.environment.url,
  samborondon: "https://www.samborondon.gob.ec/lugares-que-visitar-en-la-puntilla/",
};

export const placeAuthority = (place: NearbyPlace) => authorities[place.manager];
export const placeSource = (place: NearbyPlace) => sources[place.source];

type Photo = { src: string; source: string };
export const placePhoto = (slug: string): Photo | undefined => (photos as Record<string, Photo>)[slug];

export const nearbyLabels = {
  en: { title: "Nearby attractions", intro: "Pair Guayaquil Historical Park with a visit to Samborondón, the Guayas riverfront, the historic centre or the Salado estuary.", all: "View all nearby attractions", history: "History and features", about: "About this attraction", authority: "Visitor information and site management", facts: "Basic information", officialName: "Local name", address: "Address or visitor entrance", hours: "Opening hours and admission", current: "Check the visitor information before departing. Access and prices can change for events or individual facilities.", transport: "Getting there", cityTransit: "From Guayaquil Historical Park, set the destination using the address below. By car or taxi, allow for traffic between La Puntilla and Guayaquil. For public transit, check the current route and walking connection in Maps.", localTransit: "From Guayaquil Historical Park, use the theatre entrance on Vía a Samborondón as your destination. Check the available transfers or arrange a taxi if attending an evening performance.", route: "Suggested walking route", photo: "Photo spot", faq: "Frequently asked question", reviews: "Visitor ratings and reviews", reviewLink: "See current reviews on Google Maps", source: "Visitor information source", photoSource: "Photo source", map: "Open this attraction in Google Maps", back: "Guayaquil Historical Park" },
  es: { title: "Atractivos cercanos", intro: "Combina el Parque Histórico con una visita a Samborondón, la ribera del Guayas, el centro histórico o el Estero Salado.", all: "Ver todos los atractivos cercanos", history: "Historia y características", about: "Acerca de este atractivo", authority: "Gestión e información para visitantes", facts: "Datos básicos", officialName: "Nombre local", address: "Dirección o acceso para visitantes", hours: "Horarios y entradas", current: "Consulta la información para visitantes antes de salir. El acceso y las tarifas pueden variar según los eventos o las instalaciones.", transport: "Cómo llegar", cityTransit: "Desde el Parque Histórico, marca como destino la dirección indicada. En auto o taxi, deja margen para el tráfico entre La Puntilla y Guayaquil. Para transporte público, consulta la ruta vigente y el tramo a pie en Maps.", localTransit: "Desde el Parque Histórico, usa como destino la entrada del teatro en la vía a Samborondón. Consulta las conexiones vigentes o reserva un taxi para una función nocturna.", route: "Recorrido a pie sugerido", photo: "Punto para fotografías", faq: "Pregunta frecuente", reviews: "Valoraciones y reseñas", reviewLink: "Consultar reseñas actuales en Google Maps", source: "Fuente de información para visitantes", photoSource: "Fuente de la fotografía", map: "Abrir este lugar en Google Maps", back: "Parque Histórico de Guayaquil" },
  zh: { title: "周边游览", intro: "从瓜亚基尔历史公园出发，可搭配桑博龙东、瓜亚斯河岸、历史中心或萨拉多河口的景点。", all: "查看全部周边景点", history: "历史背景与特色", about: "关于景点", authority: "管理机构与访客咨询", facts: "基础信息", officialName: "当地名称", address: "地址或访客入口", hours: "开放时间与门票", current: "请出发前查阅访客信息。个别设施及活动的开放和费用可能另有安排。", transport: "交通方式", cityTransit: "从历史公园出发，请按下列地址定位目的地。自驾或搭出租车从拉蓬蒂利亚前往瓜亚基尔时，预留通勤时间。搭公共交通可先在地图核对当日线路和步行接驳。", localTransit: "从历史公园出发，请导航至桑博龙东大道的剧院入口。观看晚间演出时，可先核对公共交通接驳或安排出租车。", route: "建议步行路线", photo: "拍摄机位", faq: "常见问题", reviews: "游客评分与评价", reviewLink: "到 Google 地图查看当前评分和评价", source: "访客资料来源", photoSource: "照片来源", map: "在 Google 地图查看本景点", back: "瓜亚基尔历史公园" },
} satisfies Record<Locale, Record<string, string>>;

const admission = {
  en: {
    tuesSat: "Tuesday–Saturday, 10:00–17:00. Free admission.",
    municipal: "Tuesday–Saturday, 09:00–17:30. Free admission.",
    cacao: "Tuesday–Sunday, 10:00–17:00. Free admission.",
    nahim: "Tuesday–Saturday, 09:00–17:00. Free admission.",
    events: "See the theatre’s programme for performance times and ticket prices.",
    lighthouse: "Check the city’s latest notice for tower entry. The outdoor lookout and tower may have different access conditions.",
  },
  es: {
    tuesSat: "Martes a sábado, de 10:00 a 17:00. Entrada libre.",
    municipal: "Martes a sábado, de 09:00 a 17:30. Entrada libre.",
    cacao: "Martes a domingo, de 10:00 a 17:00. Entrada libre.",
    nahim: "Martes a sábado, de 09:00 a 17:00. Entrada libre.",
    events: "Consulta la cartelera del teatro para horarios y precios de cada función.",
    lighthouse: "Consulta el último aviso municipal para entrar en la torre. El mirador exterior puede tener condiciones distintas.",
  },
  zh: {
    tuesSat: "周二至周六 10:00–17:00，免费入场。",
    municipal: "周二至周六 09:00–17:30，免费入场。",
    cacao: "周二至周日 10:00–17:00，免费入场。",
    nahim: "周二至周六 09:00–17:00，免费入场。",
    events: "演出时间和门票价格请按场次查询剧院节目单。",
    lighthouse: "登塔前请查阅市政府最新公告，公共观景区与灯塔内部的开放安排可能不同。",
  },
} as const;

const publishedAdmission: Record<string, keyof typeof admission.en> = {
  "museo-bomberos": "tuesSat",
  "museo-julio-jaramillo": "tuesSat",
  "museo-municipal": "municipal",
  "museo-cacao": "cacao",
  "museo-nahim-isaias": "nahim",
  maac: "cacao",
  "teatro-sanchez-aguilar": "events",
  "faro-santa-ana": "lighthouse",
};

export function placeAdmission(locale: Locale, slug: string) {
  const kind = publishedAdmission[slug];
  return kind ? admission[locale][kind] : undefined;
}

const santayTransit = {
  en: "From La Puntilla, head toward the Guayaquil bridge entrance by Calle El Oro. Verify whether the bridge is open. For a boat alternative, check Guayas river departures with the protected-area administration before travelling to a pier.",
  es: "Desde La Puntilla, dirígete al acceso del puente en el sector de la calle El Oro. Confirma que el paso esté abierto. Si prefieres ir en lancha, consulta las salidas con la administración del área protegida antes de ir al muelle.",
  zh: "从拉蓬蒂利亚出发，可先前往瓜亚基尔埃尔奥罗街一带的跨河步行桥入口，出发前核实通行情况。若考虑乘船，先向保护区管理方询问班次，再前往码头。",
};

export function placeTransit(locale: Locale, place: NearbyPlace) {
  if (place.slug === "isla-santay") return santayTransit[locale];
  return place.manager === "theatre" ? nearbyLabels[locale].localTransit : nearbyLabels[locale].cityTransit;
}
