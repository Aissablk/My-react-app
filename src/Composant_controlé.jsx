import { useState } from "react";

function StringOnlyInput() {
  const [value, setValue] = useState(""); // État pour la valeur de l'input
  const [error, setError] = useState(""); // État pour le message d'erreur

  const handleChange = (event) => {
    const inputValue = event.target.value;

    // Vérifier si l'entrée contient des chiffres
    if (/\d/.test(inputValue)) {
      setError("Les chiffres ne sont pas autorisés."); // Afficher un message d'erreur
    } else {
      setError(""); // Réinitialiser le message d'erreur
      setValue(inputValue); // Mettre à jour la valeur si tout est correct
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Entrez une chaîne de caractères"
      />
      {/* Afficher un message d'erreur si nécessaire */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default StringOnlyInput;
