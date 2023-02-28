const messages = {
  req: "Este campo es obligatorio",
  isAlpha: "El campo debe contener solo letras",
  email: "El campo debe ser una dirección de email valida",
  passwordLength: "El campo debe tener minimo 8 caracteres",
  password: "El campo debe tener 1 letra en mayuscula, 1 letra en minuscula, 1 numero, 1 simbolo",
};

const patterns = {
  isAlpha: /^[A-Za-z]+$/i,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  password: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"·$%&(/)=?¿*_:><-])(?!\s)(?=.{8,})/igm,
};

const name = {
  required: messages.req,
  pattern: { value: patterns.isAlpha, message: messages.isAlpha },
};

const lastname = {
  required: messages.req,
  pattern: { value: patterns.isAlpha, message: messages.isAlpha },
};

const email = {
  required: messages.req,
  pattern: { value: patterns.email, message: messages.email },
};

const password = {
  required: messages.req,
  minLength: {value: 8, message: messages.passwordLength},
  pattern: { value: patterns.password, message: messages.password },
};

const validation = { name, lastname, email, password };

export default validation;
