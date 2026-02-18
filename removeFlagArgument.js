function setDimension(name, value) {
  // Duas responsabilidades: validar o nome e atribuir o valor
  // Name cria uma dependência entre o nome e a ação, o que torna o código mais difícil de entender e manter
  // name atua como uma flag disfarçada, alterando o comportamento do método.
  // Problema: para chamar setDimension("height", 100), você precisa lembrar a string correta.
  // Violação do SRP (Single Responsibility Principle).
  if (name === "height") {
    this._height = value;
    return;
  }
  if (name === "width") {
    this._width = value;
    return;
  }
}

// -----

function setHeight(value) {
  this._height = value;
}

function setWidth(value) {
  this._width = value;
}

// Orquestador
const setters = {
  height: setHeight,
  width: setWidth,
};

setters.height(100);

// Cada método tem uma única responsabilidade.
// Sem strings confusas ou “flags”.
// Muito mais claro e legível: obj.setHeight(100) é autoexplicativo.
