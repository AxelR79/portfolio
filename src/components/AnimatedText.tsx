import { useState, useEffect } from "react";
import texts from "../data/texts";

const AnimatedText = () => {
  const [index, setIndex] = useState(0); // Index de la phrase actuelle
  const [text, setText] = useState(""); // Texte affiché
  const [isDeleting, setIsDeleting] = useState(false); // Si on est en train d'effacer
  const [isPaused, setIsPaused] = useState(false); // Si le curseur doit clignoter
  const [speed] = useState(50); // Vitesse d'écriture

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      if (!isDeleting && !isPaused) {
        // Écriture
        setText(currentText.substring(0, text.length + 1));
        if (text.length + 1 === currentText.length) {
          setIsPaused(true); // Pause avant suppression
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 5000); // Temps d'attente de 5 secondes
        }
      } else if (isDeleting) {
        // Suppression
        setText(currentText.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIsPaused(true); // Pause avant réécriture
          setTimeout(() => {
            setIsPaused(false);
            setIndex((prev) => (prev + 1) % texts.length); // Passer au texte suivant
          }, 1000); // Temps d'attente de 1 seconde
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isPaused ? 500 : isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, isPaused, index, speed]);

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond sombre
        padding: "10px 20px",
        borderRadius: "8px",
        display: "inline-block",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)", // Ombre autour du texte
      }}
    >
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          color: "white",
          textAlign: "center",
          fontSize: "2.5rem",
          textShadow: "0 0 15px rgba(255, 255, 255, 1)", // Halo lumineux
        }}
      >
        {text}
        <span
          className="cursor"
          style={{
            display: "inline-block",
            width: "2px",
            height: "2.5rem",
            backgroundColor: "white",
            marginLeft: "4px",
            animation: isPaused ? "blink 1s step-end infinite" : "none",
          }}
        />
      </h1>
    </div>
  );
};

export default AnimatedText;
