"use client";

import { useForm } from "react-hook-form";

const CalmTechniques = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data: any) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Merci ! Vérifiez votre email pour recevoir le PDF.");
    } else {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nom</label>
        <input
          {...register("name", { required: "Ce champ est requis" })}
          placeholder='Nom'
        />
      </div>
      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Ce champ est requis",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Adresse email invalide",
            },
          })}
          placeholder='Email'
        />
      </div>
      <button type='submit'>Recevoir le Freebie</button>
    </form>
  );
};
export default CalmTechniques;
