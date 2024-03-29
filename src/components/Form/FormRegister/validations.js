import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Por favor, insira um e-mail válido")
      .required("Endereço de e-mail é obrigatório"),
    password: yup
      .string()
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
      .required("Senha é obrigatória"),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      )
      .required("Confirmar senha é obrigatório"),
    bio: yup.string().required("Bio é obrigatória"),
    contact: yup.number().typeError("Contato é obrigatório").required(),
    course_module: yup
      .string()
      .oneOf(
        ["", "Primeiro módulo (Introdução ao Frontend)", "Segundo módulo (Frontend Avançado)", "Terceiro módulo (Introdução ao Backend)", "Quarto módulo (Backend Avançado)"],
        "Por favor, selecione um módulo"
      )
      .required("Por favor, selecione um módulo")
      .test(
        "is-selected",
        "Por favor, selecione um módulo",
        (value) => value !== "Selecione um módulo"
      ),
  })
  .required();

const validData = { email: "user@example.com" };
const invalidData = { email: "user" };

schema
  .validate(validData)
  .then(() => console.log("Dados válidos"))
  .catch((error) => {});

schema
  .validate(invalidData)
  .then(() => console.log("Dados válidos"))
  .catch((error) => {});
