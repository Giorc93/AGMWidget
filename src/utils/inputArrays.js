//INSURABLE OBJECT INFO

export const insurableObjectType = [
  { value: "vehicle", label: "Vehiculo" },
  { value: "manufactured_object", label: "Objecto Manufacturado" },
  { value: "transportation_class", label: "Transportation Class?" },
  { value: "worker", label: "Trabajador" },
  { value: "body_object", label: "Body Object?" },
  { value: "farm_equipment", label: "Equipo Agrícola" },
  { value: "other", label: "Otro" },
];

//RISK

export const riskTypeArr = [
  { value: "all_risk_vehicle", label: "Todo Riesgo - Vehiculo" },
  { value: "soat_risk_vehicle", label: "SOAT" },
];

//VEHICLE RISK

export const plateTypeArr = [
  { value: "particular", label: "Particular" },
  { value: "publico", label: "Público" }, //TODO: Conditional fields
  { value: "diplomatico", label: "Diplomático" },
];

//TODO: Check label values
export const vehicleUseTypeArr = [
  { value: "particular", label: "Particular" },
  { value: "bus_escolar", label: "Bus Escolar" },
  { value: "bus_interdepartamental", label: "Bus Interdepartamental" },
  { value: "bus_intermunicipal", label: "Bus Intermunicipal" },
  { value: "bus_tripulaciones", label: "Bus Tripulaciones" },
  { value: "bus_urbano", label: "Bus Urbano" },
  { value: "carga_carroceria_especial", label: "Carga - Carrocería Especial" },
  { value: "carga_mercancia_propia", label: "Carga - Mercancía Propia" },
  { value: "carga_mercancia_terceros", label: "Carga - Mercancía de Terceros" },
  { value: "carga_trailer_remolque", label: "Carga - Trailer Remolque" },
  {
    value: "carga_transporte_combustible",
    label: "Carga - Transporte de Combustible",
  },
  { value: "taxi_hotelero", label: "Taxi Hotelero" },
  { value: "taxi_urbano", label: "Taxi Urbano" },
  {
    value: "utilitario_alquiler_empresa_pasajeros_mercancia",
    label: "Utilitario - Alquiler Empresa Pasajeros Mercancía",
  },
  {
    value: "utilitario_transporte_urbana_mercancia_propia",
    label: "Utilitario - Transporte Urbano Mercancía Propia",
  },
  {
    value: "utilitario_transporte_urbana_mercancia_terceros",
    label: "Utilitario - Transporte Urbano Mercancía de Terceros",
  },
];

export const protectionTypeArr = [
  { value: "alarma", label: "Alarma" }, //TODO: Alarma by default
  { value: "gps", label: "GPS" },
  { value: "ninguno", label: "Ninguno" },
];

//STRUCTURE RISK

export const buildingTypeArr = [
  { value: "Casa", label: "Casa" },
  { value: "Apartamento", label: "Apartamento" },
  { value: "Finca", label: "Finca" },
];

export const buildSocEconLevelArr = ["1", "2", "3", "4", "5", "6"];

export const buildUseTypeArr = [
  { value: "Residencial", label: "Residencial" },
  { value: "Comercial", label: "Comercial" },
  { value: "Combination", label: "Combinación" },
];

export const buildIsInArr = [
  { value: "None", label: "Ninguno" },
  { value: "Horizontal", label: "Horizontal" },
  { value: "Vertical", label: "Vertical" },
];

export const insuredTypeArr = [
  { value: "dueno_habita", label: "Dueño Habita" },
  { value: "dueno_no_habita", label: "Dueño No Habita" },
  { value: "Arrendatario", label: "Arrendatario" },
];

//PERSONAL/CORPORATE INFO

export const idTypeArr = [
  //TODO: Check "PA" API Schema value
  { value: "CC", label: "Cédula de Ciudadanía" },
  { value: "TI", label: "Tarjeta de Identidad" },
  { value: "CE", label: "Cédula de Extranjería" },
  { value: "RC", label: "Registro Civil" },
  { value: "NIT", label: "NIT" },
];

export const genderArr = [
  { value: "M", label: "Masculino" },
  { value: "F", label: "Femenino" },
];

export const socEconLevelArr = ["1", "2", "3", "4", "5", "6"];

export const educationLevelArr = [
  { value: "none", label: "Ninguno" },
  { value: "primary", label: "Primaria" },
  { value: "secondary", label: "Secundaria" },
  { value: "intermediate", label: "Técnico/Tecnólogo" },
  { value: "professional", label: "Profesional" },
  { value: "master", label: "Maestría" },
  { value: "doctorate", label: "Doctorado" },
];

export const occupationArr = [
  { value: "Independiente", label: "Independiente" },
  { value: "Comerciante", label: "Comerciante" },
  { value: "Estudiante", label: "Estudiante" },
  { value: "Pensionado", label: "Pensionado" },
  { value: "Ama de Casa", label: "Ama de Casa" },
  { value: "Profesional Dependiente", label: "Profesional Dependiente" },
  { value: "Profesional Independiente", label: "Profesional Independiente" },
];

export const maritalStatusArr = [
  { value: "single", label: "Soltero/a" }, //TODO: "single" by default
  { value: "married", label: "Casado/a" },
  { value: "separated", label: "Separado/a" },
  { value: "widowed", label: "Viudo/a" },
  { value: "union", label: "Unión Libre" },
];

export const partyTypeArr = [
  { value: "person", label: "Persona" },
  { value: "organization", label: "Organización" },
];

export const partyRolArr = [
  "Asegurado",
  "Tomador",
  "Beneficiario",
  "Titular Cartera Colectiva",
  "Afianzado",
  "Apoderado",
  "Conductor",
];

export const actualSituation = [
  { value: "new", label: "Buscando póliza para comprar vehiculo" },
  { value: "renovate", label: "Buscando ofertas para renovar mi póliza" },
  { value: "quote", label: "Probando cotizaciones en linea" },
];

export const reqDate = [
  { value: "today", label: "Hoy mismo" },
  { value: "week", label: "En una semana o menos" },
  { value: "month", label: "Este mes" },
  { value: "year", label: "Mas de un mes" },
];

export const defaultData = {
  plate: "SDU998",
  placeData: {
    "id": 1006,
    "country_name": "CO-VAL-CAL1",
    "country_code": "CO-VAL-CAL1",
    "state_name": "Valle del Cauca",
    "state_code": "76",
    "city_name": "Cali",
    "city_code": "1",
    "code": "76001"
  },
}