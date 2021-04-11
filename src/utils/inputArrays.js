//arrays de opciones establecidos por las estructuras indicadas en la API. Se generan objetos con 
//claves 'value', 'label' para estandarizar el paso de parámetros a los componentes de los formularios (select)

//INSURABLE OBJECT INFO

export const insurableObjectType = [
  { value: "vehicle", label: "Vehículo" },
  { value: "manufactured_object", label: "Objecto Manufacturado" },
  { value: "transportation_class", label: "Transportation Class?" },
  { value: "worker", label: "Trabajador" },
  { value: "body_object", label: "Body Object?" },
  { value: "farm_equipment", label: "Equipo Agrícola" },
  { value: "other", label: "Otro" },
];

//RISK

export const riskTypeArr = [
  { value: "all_risk_vehicle", label: "Todo Riesgo - Vehículo" },
  { value: "soat_risk_vehicle", label: "SOAT" },
];

//VEHICLE RISK

export const plateTypeArr = [
  { value: "particular", label: "Particular" },
  { value: "publico", label: "Público" }, //TODO: Conditional fields
  { value: "diplomatico", label: "Diplomático" },
];

//TODO: Check label values
export const vehicleUseTypeArr = {
  groupBus: [
    {value: "transporte_pasajeros_escolar", label: "Transporte pasajeros escolar"},
    {value: "transporte_pasajeros_tripulaciones", label: "Transporte pasajeros tripulaciones"},
    {value: "transporte_pasajeros_urbano", label: "Transporte pasajeros urbano"},
    {value: "transporte_pasajeros_intermunicipal", label: "Transporte pasajeros intermunicipal"},
    {value: "transporte_pasajeros_interdepartamental", label: "Transporte pasajeros interdepartamental"},
  ],
  groupTruck: [
    {value: "carga_transporte_mercancia_propia", label: "Transporte mercancia propia"},
    {value: "carga_transporte_mercancia_terceros", label: "Transporte mercancia de terceros"},
    {value: "carga_carroceria_especial", label: "Carrocería especial"},
    {value: "carga_transporte_combustible", label: "Transporte de combustible"},
  ],
  groupCar: [
    {value: "particular", label: "Particular"},
    {value: "taxi_hotelero", label: "Taxi Hotelero"},
    {value: "taxi_urbano", label: "Taxi urbano"},
    {value: "utilitario_alquiler_empresas_pasajeros_mercancia", label: "Alquiler empresas: pasajeros, mercancía"},
    {value: "utilitario_transporte_urbana_mercancia_propia", label: "Transporte urbano de mercancía propia"},
    {value: "utilitario_transporte_urbana_mercancia_terceros", label: "Transporte urbano de mercancía de terceros"},
  ],
  groupPassTruck: [
    {value: "particular", label: "Particular"},
    {value: "taxi_hotelero", label: "Taxi Hotelero"},
    {value: "taxi_urbano", label: "Taxi urbano"},
    {value: "utilitario_alquiler_empresas_pasajeros_mercancia", label: "Alquiler empresas: pasajeros, mercancía"},
    {value: "utilitario_transporte_urbana_mercancia_propia", label: "Transporte urbano de mercancía propia"},
    {value: "utilitario_transporte_urbana_mercancia_terceros", label: "Transporte urbano de mercancía de terceros"},
    {value: "transporte_pasajeros_escolar", label: "Transporte pasajeros escolar"},
    {value: "transporte_pasajeros_tripulaciones", label: "Transporte pasajeros tripulaciones"},
    {value: "transporte_pasajeros_urbano", label: "Transporte pasajeros urbano"},
    {value: "transporte_pasajeros_intermunicipal", label: "Transporte pasajeros intermunicipal"},
    {value: "transporte_pasajeros_interdepartamental", label: "Transporte pasajeros interdepartamental"},
  ],
  groupBikes: [
    {value: "particular", label: "Particular"},
    {value: "trabajo", label: "Trabajo"},
  ],
  groupRep: [
    {value: "utilitario_alquiler_empresas_pasajeros_mercancia", label: "Alquiler empresas: pasajeros, mercancía"},
    {value: "utilitario_transporte_urbana_mercancia_propia", label: "Transporte urbano de mercancía propia"},
    {value: "utilitario_transporte_urbana_mercancia_terceros", label: "Transporte urbano de mercancía de terceros"},
  ],
  groupTow: [
    {value: "trailer_remolque", label: "Trailer - Remolque"},
  ]
};

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
  { value: "CC", label: "Cédula de ciudadanía" },
  { value: "TI", label: "Tarjeta de identidad" },
  { value: "CE", label: "Cédula de extranjería" },
  { value: "RC", label: "Registro civil" },
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
  { value: "new", label: "Buscando póliza para comprar vehículo" },
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
}