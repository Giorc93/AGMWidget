import * as yup from "yup";

export const plateNumber = yup
  .string()
  .matches(
    /^[a-z-A-Z]{3}[0-9]{2}[a-z-A-Z-0-9]{1}$/,
    "Formato de placa inválido"
  )
  .required("Ingresa un número de placa");

export const brand = yup.string().required("Selecciona una marca");
export const occupation = yup.string().required("Selecciona una ocupación");
export const model = yup.string().required("Selecciona un modelo");
export const line = yup.string().required("Selecciona una referencia");
export const inAgency = yup.string().notRequired();

export const contactName = yup.string().when("contactInfo", {
  is: "false",
  then: yup
    .string()
    .required("Ingresa el nombre del contacto")
    .matches(
      /^[a-zA-Z]*$|^[a-zA-Z]*[ ][a-zA-Z]*\S$/,
      "No puede contener carácteres especiales ni espacios duplicados"
    ),
});
export const name = yup
  .string()
  .required("Ingresa tu nombre")
  .matches(
    /^[a-zA-Z]*$|^[a-zA-Z]*[ ][a-zA-Z]*\S$/,
    "No puede contener carácteres especiales ni espacios duplicados"
  );
export const companyName = yup
  .string()
  .required("Ingresa el nombre de la empresa");
export const surname = yup
  .string()
  .required("Ingresa tu apellido")
  .matches(
    /^[a-zA-Z]*$|^[a-zA-Z]*[ ][a-zA-Z]*\S$/,
    "No puede contener carácteres especiales ni espacios duplicados"
  );
export const idType = yup.string().required("Selecciona un tipo de documento");
export const idNumber = yup.string().when("idType", {
  is: "NIT",
  then: yup
    .string()
    .required("Ingresa el NIT")
    .matches(/^(^[0-9]*-[0-9])$/, "NIT inválido (i.e: xxxx-x)"),
  otherwise: yup
    .string()
    .required("Ingresa el número de documento")
    .matches(/^(^[0-9]*)$/, "Número de documento inválido"),
});
export const legRepIdNumber = yup
  .string()
  .required("Ingresa el número de documento")
  .matches(/^(^[0-9]*)$/, "Número de documento inválido");
export const phoneNumber = yup
  .string()
  .required("Ingresa tu número telefónico")
  .matches(/^3[\d]{8}[\d]$|^03[\d]{7}[\d]$/, "Número de teléfono inválido");
export const email = yup
  .string()
  .required("Ingresa tu email")
  .email("Ingresa un email válido");

export const birthdate = yup
  .string()
  .required("Ingresa tu fecha de nacimiento");

export const vehiclePrice = yup.string().when("inAgency", {
  is: "true",
  then: yup
    .string()
    .required("Ingresa el precio del vehículo")
    .matches(/^(^[0-9]*)$/, "Precio inválido"),
  otherwise: yup.string().notRequired(),
});

export const accesoriesPrice = yup
  .string()
  .required("Ingresa 0 si el vehículo no tiene accesorios")
  .matches(/^(^[0-9]*)$/, "Precio inválido");

export const placeData = yup
  .string()
  .required("Selecciona la ciudad de circulación del vehículo");


