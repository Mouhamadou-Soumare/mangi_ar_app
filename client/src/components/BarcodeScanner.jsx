import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import axios from "axios";
import "aframe"; // Importez A-Frame

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState("");
  const [productInfo, setProductInfo] = useState(null);
  const [scanSuccess, setScanSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Ajout de l'état de chargement
  const [error, setError] = useState(""); // Ajout de l'état d'erreur
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0, z: -5 });

  useEffect(() => {
    const handleDetected = (data) => {
      console.log("Detected barcode:", data.codeResult.code); // Affichez le code-barres détecté

      setBarcode(data.codeResult.code);
      setProductInfo(null); // Réinitialiser les informations du produit
      setError(""); // Réinitialiser l'erreur
      setLoading(true); // Début du chargement

      Quagga.offDetected(); // Désactiver l'écoute de la détection pendant le traitement

      // Appel à l'API pour récupérer les informations du produit
      axios
        .post("https://mangi-server.vercel.app/product/search-by-barcode", {
          barcode: 3274080005003,
        })
        .then((response) => {
          setProductInfo(response.data);
          setScanSuccess(true);
        })
        .catch((error) => {
          console.error("Error fetching product data from the back-end:", error);
          setProductInfo(null);
          setError("Aucun produit trouvé pour ce code-barres.");
        })
        .finally(() => {
          setLoading(false); // Fin du chargement
        });
    };

    // Initialisation de Quagga avec configuration pour la lecture de code-barres
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          },
          // Optimisation pour lecture fréquente des données d'image
          willReadFrequently: true,
        },
        decoder: {
          readers: ["code_128_reader", "ean_reader"], // Types de code-barres à décoder
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start(); // Démarre la détection du code-barres
      }
    );

    Quagga.onDetected(handleDetected); // Appel de la fonction lors de la détection du code-barres

    return () => {
      Quagga.offDetected(handleDetected); // Nettoyage lors de la suppression du composant
      Quagga.stop();
    };
  }, []);

  useEffect(() => {
    if (productInfo) {
      setTextPosition({ x: 0, y: 0, z: -5 }); // Positionnement du texte en 3D
    }
  }, [productInfo]);

  return (
    <div className="scanner-big-container">
      <div
        id="scanner-container"
        className="w-full aspect-video bg-white rounded-md overflow-hidden"
      />
      
      {/* Affichage du code-barres scanné */}
      {barcode && <p style={{ color: "black", fontWeight: "bold", paddingTop: "2rem", paddingBottom: "2rem" }}>Code-Barres: {barcode}</p>}

      {/* Affichage des informations produit */}
      {productInfo && !loading && (
        <div style={{ padding: "20px", marginTop: "3rem", background: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{productInfo.name}</h3>
          <p><strong>Description:</strong> {productInfo.description}</p>
          <p><strong>Catégorie:</strong> {productInfo.category}</p>
          <p><strong>Ingrédients:</strong> {productInfo.ingredients}</p>
          {/* Si l'image est disponible dans la réponse API */}
          {productInfo.image_url && <img src={productInfo.image_url} alt={productInfo.name} style={{ width: "100%", borderRadius: "10px", marginTop: "15px" }} />}
        </div>
      )}

      {/* Affichage de l'état de chargement */}
      {loading && !productInfo && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p style={{ color: "black" }}>Chargement des informations du produit...</p>
          <div className="spinner"></div> {/* Vous pouvez ajouter un spinner ici */}
        </div>
      )}

      {/* Affichage du message d'erreur ou de produit non trouvé */}
      {error && !loading && (
        <div style={{ padding: "20px", background: "#ffcccc", borderRadius: "10px" }}>
          <p style={{ color: "black" }}>{error}</p>
          <p style={{ color: "black" }}>Essayez un autre code-barres ou vérifiez le code.</p>
        </div>
      )}

      {/* Affichage du message si aucun produit n'est trouvé */}
      {!productInfo && barcode && !loading && !error && (
        <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
          <p style={{ color: "black" }}>Aucune information trouvée pour ce produit. Essayez un autre code-barres.</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeScanner;
