import * as yup from "yup";

export const schema = yup
.object({
    title: yup
    .string().required("Por favor, preencha o campo"),
    status: yup
    .string()
    .oneOf(
        ["", "Iniciante", "Intermediário", "Avançado"]
    )
    .required("Por favor, selecione uma opção")
    .test(
        "is-selected",
        "Por favor, selecione um status",
        (value) => value !== "Selecione um status"
    ),
})
.required();