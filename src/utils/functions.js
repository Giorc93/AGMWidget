//funciones generales

//casteo de la información recolectada en el formulario a la estructura definida en la API
//para la generación de la cotización
export const CastPersonData = (data) => {
  const { personData, riskData, placeData, vehicleData } = data;
  const quotationData = {
    version: "1",
    data: {
      insurable_objects: [
        {
          identification:
            vehicleData.plate.toUpperCase() + "-" + vehicleData.code, //"mor190-01601216"
          price_sugested: riskData.vehiclePrice, //"21500000"
          tag: vehicleData.plate.toUpperCase(),
          vehicle: {
            brand: vehicleData.brand, //"CHEVROLET"
            codification: {
              code: vehicleData.code, //"01601216"
              fuel: "*",
              nationality: "*",
            },
            cylinder: vehicleData.cylinder, //"0"
            line: vehicleData.type, //"AUTOMOVIL"
            model: vehicleData.model, //2010
            number_passengers: vehicleData.number_passengers, //0
            plate: vehicleData.plate, //"mor190"
            type: vehicleData.type, //"AUTOMOVIL"
            vehicle_risk: {
              accesories_price: +riskData.accesoriesPrice, //0
              in_agency:
                riskData.inAgency && riskData.inAgency === "true"
                  ? true
                  : false, //false
              plate_type: riskData.plateType, //"particular"
              protection_type: "alarma",
              reference_price: vehicleData.vehicle_risk.reference_price, //21500000
              use_type: riskData.useType,
            },
            weight: 0,
          },
        },
      ],
      parties: [
        {
          party_rol: "Asegurado",
          person: {
            birht_date: new Date(personData.birthdate)
              .toISOString()
              .split("T")[0], //"1987-03-09"
            contact_data: [
              {
                contact_info: {
                  email: personData.email, //"seguro@agentemotor.com"
                  ubication: {
                    address_line1: "Calle 1",
                    place: {
                      city_code: placeData.city_code, //"01"
                      city_name: placeData.city_name, //"Cali"
                      country_code: placeData.country_code, //"57"
                      country_name: placeData.country_name, //"Colombia"
                      state_code: placeData.state_code, //"05"
                      state_name: placeData.state_name, //"Valle del cauca"
                    },
                    postal_code: placeData.code, // "05001"
                  },
                },
                contact_tag: "Email",
              },
            ],
            educational_level: "primary",
            firstname: personData.name, //"Nataly "
            gender: personData.gender, //"F"
            identification_number: personData.idNumber, //"1128444818"
            identification_type: personData.idType, //CC"
            lastname: personData.surname, //"Zapata Ospina"
            marital_status: "single",
            profession: personData.occupation, //"Comerciante"
          },
        },
      ],
      type: "all_risk_vehicle",
      ubication: {
        address_line1: "Calle 1",
        place: {
          city_code: placeData.city_code, //"01"
          city_name: placeData.city_name, //"Cali"
          country_code: placeData.country_code, //"57"
          country_name: placeData.country_name, //"Colombia"
          state_code: placeData.state_code, //"05"
          state_name: placeData.state_name, //"Valle del cauca"
        },
        postal_code: placeData.code, // "05001"
      },
    },
    name: "event-create-quote",
    origin: "api.consume",
  };
  return quotationData;
};

//formatear valores a formato de divisa (Peso colombiano)
export const formatValue = (value) => {
  const formatedValue = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value);
  return formatedValue;
};

//validación de campo. Para valores vacíos o === a no cubre retornará false
export const validField = (value) => {
  return value.trim() === "" || value.toLowerCase() === "no_cubre" ? false : true;
};

//formatear fechas dd-mm-aaaa
export const formatDate = (value) => {
  return new Date(value)
  .toISOString()
  .split("T")[0];
}

//transformar texto a 'capitalize'
export const capitalizeStr = (str) => {
  str = str.toLowerCase();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}
