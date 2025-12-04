import React, { useState } from "react";

export default function App() {
  const [treinamento, setTreinamento] = useState("");
  const [dias, setDias] = useState("");
  const [horarios, setHorarios] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [vagasTotais, setVagasTotais] = useState(10);
  const [vagasOcupadas, setVagasOcupadas] = useState(0);

  const linksPorTreinamento = {
    "Tráfego Pago": "https://mpago.li/1d3QXto",
    "Combo Completo": "https://mpago.li/1znSkFw",
    "Técnicas de Vendas": "https://mpago.li/1CDNWLb",
    "Gestão de Redes Sociais": "https://mpago.li/14otaJE",
  };

  const linkPagamento = linksPorTreinamento[treinamento] || "";
  const vagasDisponiveis = Math.max(vagasTotais - vagasOcupadas, 0);
  const esgotado = vagasDisponiveis === 0;

  function handlePagamento() {
    if (esgotado || !linkPagamento) return;

    setVagasOcupadas((prev) => prev + 1);

    setTimeout(() => {
      window.location.href = linkPagamento;
    }, 300);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000, #111)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "#000",
          }}
        >
          TREINAMENTOS PARCEIRO DIGITAL
        </h1>

        <p style={{ textAlign: "center", color: "#555", marginBottom: 16 }}>
          Sistema Profissional de Matrícula Online
        </p>

        <div
          style={{
            marginBottom: 16,
            padding: 12,
            borderRadius: 12,
            textAlign: "center",
            fontWeight: "bold",
            background: esgotado ? "#fee2e2" : "#dcfce7",
            color: esgotado ? "#991b1b" : "#166534",
          }}
        >
          {esgotado
            ? "VAGAS ESGOTADAS"
            : `Vagas disponíveis: ${vagasDisponiveis}`}
        </div>

        <input placeholder="Nome completo" style={inputStyle} />
        <input placeholder="WhatsApp" style={inputStyle} />
        <input placeholder="E-mail" style={inputStyle} />

        <select
          value={treinamento}
          onChange={(e) => setTreinamento(e.target.value)}
          style={inputStyle}
        >
          <option value="">Selecione o treinamento</option>
          <option>Tráfego Pago</option>
          <option>Gestão de Redes Sociais</option>
          <option>Técnicas de Vendas</option>
          <option>Combo Completo</option>
        </select>

        <input
          placeholder="Dias do treinamento"
          value={dias}
          onChange={(e) => setDias(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Horário"
          value={horarios}
          onChange={(e) => setHorarios(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Conteúdo do treinamento"
          rows={4}
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Total de vagas"
          value={vagasTotais}
          onChange={(e) => setVagasTotais(Number(e.target.value))}
          style={inputStyle}
        />

        <button
          onClick={handlePagamento}
          disabled={esgotado || !linkPagamento}
          style={{
            width: "100%",
            padding: 14,
            marginTop: 10,
            borderRadius: 12,
            background: esgotado ? "#aaa" : "#000",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          {esgotado ? "Turma Esgotada" : "Ir para Pagamento"}
        </button>

        <a
          href="https://wa.me/5592992973817"
          style={{
            display: "block",
            marginTop: 12,
            textAlign: "center",
            background: "#22c55e",
            color: "#fff",
            padding: 12,
            borderRadius: 12,
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Atendimento no WhatsApp
        </a>

        <p
          style={{
            fontSize: 12,
            textAlign: "center",
            marginTop: 18,
            color: "#999",
          }}
        >
          Pix: 41235207000122
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: 12,
  marginBottom: 10,
  borderRadius: 10,
  border: "1px solid #ccc",
  fontSize: 14,
};
