function Init() {
  console.clear();

  // Header vermelho
  console.log(
    "%c       🏆 MARCO HISTÓRICO ETERNO 🏆       ",
    "background: #e74c3c; color: white; font-size: 18px; font-weight: bold; padding: 12px; text-align: center; border-left: 4px solid #e74c3c; border-right: 4px solid #e74c3c;"
  );

  // Corpo branco
  console.log(
    "%c📅 DATA HISTÓRICA: 30 de Maio de 2025                  ",
    "background: white; color: #e74c3c; font-size: 14px; font-weight: bold; padding: 10px; border-left: 4px solid #e74c3c; border-right: 4px solid #e74c3c;"
  );

  console.log(
    "%c🚀 PRIMEIRA HOSPEDAGEM NA VERCEL REALIZADA COM SUCESSO!     ",
    "background: white; color: #e74c3c; font-size: 13px; font-weight: bold; padding: 8px; border-left: 4px solid #e74c3c; border-right: 4px solid #e74c3c;"
  );

  console.log(
    "%c💝 DEDICAÇÃO ETERNA                                     ",
    "background: white; color: #e74c3c; font-size: 14px; font-weight: bold; padding: 8px; border-left: 4px solid #e74c3c; border-right: 4px solid #e74c3c;"
  );

  console.log(
    "%c✨ Este momento ficará para sempre registrado na história ✨     ",
    "background: white; color: #e74c3c; font-size: 12px; font-weight: bold; padding: 6px; border-left: 4px solid #e74c3c; border-right: 4px solid #e74c3c;"
  );

  console.log(
    "%c🕒 Timestamp: " +
      new Date().toLocaleString("pt-BR") +
      "                                     ",
    "background: white; color: #999; font-size: 11px; font-style: italic; padding: 6px; border-left: 4px solid #e74c3c; border-right: 4px solid #e74c3c;"
  );

  // Footer vermelho
  console.log(
    "%c🌟 ESTE LOG PERMANECERÁ IMUTÁVEL PARA A ETERNIDADE 🌟          ",
    "background: #e74c3c; color: white; font-size: 12px; font-weight: bold; padding: 10px; text-align: center; border-left: 4px solid #e74c3c; border-right: 4px solid #e74c3c;"
  );

  return <h1>Eu te amo muuuito, amo você e a família que criamos juntos ❤️</h1>;
}

export default Init;
