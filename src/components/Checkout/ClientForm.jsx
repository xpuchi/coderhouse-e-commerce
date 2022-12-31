import { ButtonPrimary } from "../Button/ButtonPrimary";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function ClientForm({ handleCreateOrder }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <OrderForm onSubmit={handleSubmit(handleCreateOrder)}>
      <div classname="column1">
        <h3>Completá tus datos para terminar el pedido</h3>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          {...register("nombre", { required: true, maxLength: 10 })}
        />

        {errors.nombre?.type === "required" && <p>Debes ingresar tus datos</p>}
        {errors.nombre?.type === "maxLength" && <p>Maximo 10 caracteres</p>}

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          {...register("apellido", { required: true, maxLength: 15 })}
        />
        {errors.apellido?.type === "required" && (
          <p>Debes ingresar tus datos</p>
        )}
        {errors.apellido?.type === "maxLength" && <p>Maximo 15 caracteres</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && <p>Debes ingresar tus datos</p>}

        <input
          type="email"
          name="check-email"
          placeholder="Verifica tu email"
          {...register("check-email", {
            required: true,
            validate: (value) => value === getValues("email"),
          })}
        />
        {errors["check-email"]?.type === "required" && (
          <p>Debes ingresar tus datos</p>
        )}
        {errors["check-email"]?.type === "validate" && (
          <p>Email no compatible</p>
        )}

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          {...register("telefono", { required: true, maxLength: 15 })}
        />
        {errors.telefono?.type === "required" && (
          <p>Debes ingresar tus datos</p>
        )}
        {errors.telefono?.type === "maxLength" && <p>Maximo 15 caracteres</p>}

        <input
          type="text"
          name="direccion"
          placeholder="Direccion"
          {...register("direccion", { required: true })}
        />
        {errors.direccion?.type === "required" && (
          <p>Debes ingresar tus datos</p>
        )}

        <div>
          <select
            {...register("retiro", { required: true })}
            name="retiro"
            id="retiro"
          >
            <option hidden>Selecciona como recibir tu pedido</option>
            <option value="local">Retiro en local (gratis)</option>
            <option value="envio">Envío a domicilio ($500)</option>
          </select>
        </div>
      </div>

      <div className="column2">
        <img src="/images/checkout.png" alt="checkout-girl" />
      </div>

      <ButtonPrimary>Confirmar orden</ButtonPrimary>
    </OrderForm>
  );
}

const OrderForm = styled.form`
  width: 700px;
  display: grid;
  grid-template-columns: 700px 300px;
  gap: 0.5rem;
  padding: 40px;
  align-items: center;
  justify-content: center;

  h3 {
    color: #da6868;
    margin-left: 8px;
  }

  input,
  textarea {
    border: #cbc8c8 1px solid;
    width: 660px;
    border-radius: 10px;
    padding: 15px;
    font-family: "Quicksand", sans-serif;
    margin: 5px;
  }

  select {
    border: #cbc8c8 1px solid;
    width: 690px;
    border-radius: 10px;
    padding: 15px;
    font-family: "Quicksand", sans-serif;
    margin: 5px;
  }

  p {
    font-size: small;
    color: red;
    margin: 0px 8px;
  }
`;

export default ClientForm;
