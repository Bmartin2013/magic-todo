import React, { useEffect, useState } from "react";
import "./Client.scss";
import { load } from "../core/infra/service/ITodoItemService";

const Client = () => {
  const [fileContent, setFileContent] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleTrainAI = async () => {
    setIsLoading(true);
    const aiResponse = await load(fileContent);
    setResponse(aiResponse);
  };

  useEffect(() => {
    if (response) setIsLoading(false);
  }, [response]);

  return (
    <div className="container">
      <h1>Cargar Prompt y Mostrar Resultado</h1>
      <div className="file-input">
        <label htmlFor="file">
          Selecciona un archivo en formato txt para ser leido como prompt:
        </label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div className="ai-trainer">
        <div className="result">
          <label htmlFor="result">Prompt Preview:</label>
          <textarea
            id="result"
            value={fileContent}
            disabled={true}
            readOnly
          ></textarea>
          {fileContent && <button onClick={handleTrainAI}>Enviar Prompt</button>}
        </div>
        {!isLoading ? (
          <div className="response">
            <label htmlFor="response">Resultado:</label>
            <textarea
              style={{ resize: "both" }}
              id="response"
              value={response}
              readOnly
            ></textarea>
          </div>
        ) : <p>Cargando respuesta de la IA...</p>}
      </div>
    </div>
  );
};

export default Client;
