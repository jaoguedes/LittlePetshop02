var logado = false;

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Hamster", Math.random() * 10],
    ["Canarinho", Math.random() * 10],
    ["Cachorros", Math.random() * 10],
    ["Gatos", Math.random() * 10],
    ["Capivara", Math.random() * 10],
  ]);

  var options = {
    backgroundColor: "#FAF9BF",
    legend: {
      position: "bottom",
      textStyle: { color: "#141414", fontSize: 16 },
    },
    slices: {
      0: { color: "#b87333" },
      1: { color: "#955a17" },
      2: { color: "#d6af4d" },
      3: { color: "#955a17" },
      4: { color: "#cbae64" },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawGrafico);
function drawGrafico() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "visitas", { role: "style" }],
    ["Segunda", Math.random() * 10, "#b87333"],
    ["Terça", Math.random() * 10, "#955a17"],
    ["Quarta", Math.random() * 10, "#d6af4d"],
    ["Quinta", Math.random() * 10, "color: #cbae64"],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",

      role: "annotation",
    },
    2,
  ]);

  var options = {
    backgroundColor: "#FAF9BF",
    title: "",

    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("barchart_values")
  );
  chart.draw(view, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPet);
function drawPet() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "cadastros", { role: "style" }],
    ["Janeiro", Math.random() * 10, "#b87333"],
    ["Fevereiro", Math.random() * 10, "#955a17"],
    ["Março", Math.random() * 10, "#d6af4d"],
    ["Abril", Math.random() * 10, "color: #cbae64"],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation",
    },
    2,
  ]);

  var options = {
    backgroundColor: "#FAF9BF",
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  var chart = new google.visualization.ColumnChart(
    document.getElementById("columnchart_values")
  );
  chart.draw(view, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawAgen);

function drawAgen() {
  var data = google.visualization.arrayToDataTable([
    ["Mes", "Vendas", "Compras"],
    ["Janeiro", Math.random() * 10, Math.random() * 10],
    ["Fevereiro", Math.random() * 10, Math.random() * 10],
    ["Março", Math.random() * 10, Math.random() * 10],
    ["Abril", Math.random() * 10, Math.random() * 10],
  ]);

  var options = {
    backgroundColor: "#FAF9BF",

    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}

function hanburguer() {
  let plus = document.getElementById("cont");
  let menu = document.getElementById("men");

  if ((cont.style.display == "block") & (menu.innerHTML == "close")) {
    cont.style.display = "none";
    menu.innerHTML = "menu";
  } else {
    cont.style.display = "block";
    menu.innerHTML = "close";
  }
}
function logOUT() {
  let adm = document.getElementById("adm");
  let logout = document.getElementById("a");
  if (
    adm.innerHTML == '<img id="vacaAd" src="img/vaca-680x438-1.jpg" alt="">'
  ) {
    adm.innerHTML = '<a href="#" class="der">account_circle</a>';
    logout.style.display = "none";
    logado = false;
  }
}
function login() {
  let mod = document.getElementById("sumir");
  let adm = document.getElementById("adm");
  if (!logado) {
    if (mod.style.display == "block") {
      mod.style.display = "none";
    } else {
      mod.style.display = "block";
    }
  }
}
function desaparecer() {
  let mod = document.getElementById("sumir");

  if (mod.style.display == "none") {
    mod.style.display = "block";
  } else {
    mod.style.display = "none";
  }
}
function verificar() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pas").value;
  let adm = document.getElementById("adm");
  let mod = document.getElementById("sumir");
  let logout = document.getElementById("a");
  logado = name == "admin@teste.com.br" && pass == "!@#ABC123def";

  if (logado) {
    adm.innerHTML = '<img id="vacaAd" src="img/vaca-680x438-1.jpg" alt="">';
    mod.style.display = "none";
    logout.style.display = "block";
  }
}
function fazerid() {
  let id = document.getElementById("id");
  id.value = parseInt(Math.random() * 1000000000);
}
function cadastro() {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;
  let endereco = document.getElementById("endereco").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;
  let email = document.getElementById("email").value;
  let data = document.getElementById("data").value;
  let numero = document.getElementById("numero").value;
  var erro = document.getElementById("erro");
  let padraoEmail =
    /^[\w-\.]+@(gmail\.com|sesisp\.org\.br|hotmail\.com|[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}\.br)$/;
  let emailValido = padraoEmail.test(email);
  let padraoData = /^(\d{4})-(\d{2})-(\d{2})$/;
  let dataValida = padraoData.test(data);
  let padraoTel = /\((\d{2})\)\s(\d{4,5})-(\d{4})/;
  let telValido = padraoTel.test(numero);

  let padraoUf = /^[A-Z][A-Z]/;
  let ufValido = padraoUf.test(estado);
  erro.style.display = "none";

  if (ufValido == false) {
    erro.style.display = "block";
    erro.innerHTML = "<p>o campo Estado deve ter 2 letra Maiusculas</p>";
    sumirErro();
    return false;
  }
  if (telValido == false) {
    erro.style.display = "block";
    erro.innerHTML = "<p>o campo Telefone deve seguir (99) 9999-9999</p>";
    sumirErro();
    return false;
  }
  if (dataValida == false) {
    erro.style.display = "block";
    erro.innerHTML = "<p>o campo Data deve seguir o 00/00/0000</p>";
    sumirErro();
    return false;
  }

  if (nome.length < 3 || nome.length > 100) {
    erro.style.display = "block";
    erro.innerHTML =
      "<p>o campo Usario deve coter entre 3 a 100 caracteres</p>";
    sumirErro();
    return false;
  }

  if (endereco.length < 3 || endereco.length > 100) {
    erro.style.display = "block";
    erro.innerHTML =
      "<p>o campo Endereço deve coter entre 3 a 100 caracteres</p>";
    sumirErro();
    return false;
  }
  if (cidade.length < 3 || cidade.length > 50) {
    erro.style.display = "block";
    erro.innerHTML = "<p>o campo Cidade deve coter entre 3 a 50 caracteres</p>";
    sumirErro();
    return false;
  }
  if (emailValido == false) {
    erro.style.display = "block";
    erro.innerHTML = "<p>o campo Email deve seguir o padrão nome@gmail.com</p>";
    sumirErro();
    return false;
  }

  if (senha.length < 8) {
    erro.style.display = "block";
    erro.innerHTML =
      "<p>o campo Senha tem que conter no minimo 8 caracteres</p>";
    sumirErro();
    return false;
  }
}

function apaCad() {
  var desp = document.getElementById("desp");
  var sum = document.getElementById("sumir");
  if (desp.style.display == "block") {
    desp.style.display = "none";
    sum.style.display = "block";
  } else {
    desp.style.display = "block";
    sum.style.display = "none";
  }
}
function desaparecerCad() {
  var desp = document.getElementById("desp");
  if (desp.style.display == "block") {
    desp.style.display = "none";
  } else {
    desp.style.display = "block";
  }
}
window.addEventListener("resize", function () {
  var modal = document.querySelector("#desp");
  var modalContent = document.querySelector("#modalCad");
  modal.style.height = window.innerHeight + "px";
  modalContent.style.maxHeight = window.innerHeight * 0.8 + "px";
  modalContent.style.maxWidth = window.innerWidth * 0.8 + "px";
});
window.addEventListener("resize", function () {
  var modal = document.querySelector("#sumir");
  var modalContent = document.querySelector("#fundomodal");
  modal.style.height = window.innerHeight + "px";
  modalContent.style.maxHeight = window.innerHeight * 0.8 + "px";
  modalContent.style.maxWidth = window.innerWidth * 0.8 + "px";
});

function sumirErro() {
  if (erro.style.display == "block" || erro.style.display == "");
  setTimeout(function () {
    erro.style.display = "none";
  }, 2000);
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function seuPet() {
  let nome = document.getElementById("pet-name").value;
  let petNome = document.getElementById("petN");

  petNome.innerHTML = nome;
  // raça
  let raca1 = document.getElementById("pet-type").value;
  let out = document.getElementById("outros").value;
  let r1 = document.querySelector(".raca");

  if (r1.innerHTML == out) {
    r1.innerHTML = out;
  } else {
    r1.innerHTML = raca1;
  }

  // caucular data
  let dataNascimento = new Date(document.getElementById("pet-age").value);
  let dataAtual = new Date();
  let diferencaTempo = dataAtual.getTime() - dataNascimento.getTime();

  let anos = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 365));
  let meses = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24 * 30));
  let dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
  let anos1 = document.querySelector(".anos");
  let meses1 = document.querySelector(".meses");
  let dias1 = document.querySelector(".dias");

  anos1.innerHTML = anos;
  meses1.innerHTML = meses;
  dias1.innerHTML = dias;
}


// começo do slide
let slideIndexx = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.querySelector(".chupetinha");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) { slideIndexx = 1 }
  slides[slideIndexx - 1].style.display = "block";
  setTimeout(showSlides, 7000);
}
function adicionarLinha() {
  // Obtem os valores dos campos
  let nome1 = document.getElementById("nome1").value;
  let idade1 = document.getElementById("idade1").value;
  let data1 = document.getElementById('data1').value;
  let hora = document.getElementById("hora1").value;
  let erro1 = document.getElementById('erro1');

  let tabela = document
    .getElementById("tabela")
    .getElementsByTagName("tbody")[0];
  let novaLinha = tabela.insertRow();

  let colunaNome = novaLinha.insertCell(0);
  let colunaIdade = novaLinha.insertCell(1);
  let colunaData = novaLinha.insertCell(2);
  let colunaHora = novaLinha.insertCell(3);

  colunaNome.innerHTML = nome1;
  colunaIdade.innerHTML = idade1;
  colunaData.innerHTML = data1;
  colunaHora.innerHTML = hora;

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("data").value = "";
  document.getElementById("hora").value = "";
}