// ============================================================
// CONFIGURAÇÃO
// ============================================================

// Troque pelo seu número: código do país + DDD + número, só dígitos
const WA = '5511934424010'; // Número do WhatsApp que recebe as mensagens do formulário

// Atalho: $('#id') equivale a document.querySelector('#id')
const $ = s => document.querySelector(s); // Recebe um seletor CSS e devolve o primeiro elemento encontrado


// ============================================================
// MENU DO CELULAR
// ============================================================

// Ao clicar no botão ☰ (id "mb"), abre/fecha o menu (adiciona/remove a classe "open" na tag <nav>)
$('#mb').onclick = () => {
  $('nav').classList.toggle('open'); // toggle: se a classe existe, remove; se não existe, adiciona
};

// Percorre todos os links do menu para fechá-lo depois que um deles for clicado
document.querySelectorAll('nav a').forEach(a => { // Para cada link <a> dentro do <nav>...
  a.addEventListener('click', () => { // ...fica "escutando" o clique nesse link
    $('nav').classList.remove('open'); // Fecha o menu (remove a classe "open")
  });
});


// ============================================================
// FORMULÁRIO DE CHAMADO (envia para o WhatsApp)
// ============================================================

// Quando o formulário (id "f") for enviado, executa a função abaixo
$('#f').onsubmit = e => { // "e" é o evento de envio

  e.preventDefault(); // Impede o comportamento padrão (recarregar a página)

  const d = new FormData(e.target); // Lê todos os campos preenchidos (n, c, t, m) do formulário

  // Monta o texto da mensagem que será enviada ao WhatsApp
  const t =
    'Olá, Nexdori TI! Quero abrir um chamado.\n\n' + // Saudação + linha em branco
    'Nome: ' + d.get('n') + '\n' + // Campo "Nome" (name="n")
    'Contato: ' + d.get('c') + '\n' + // Campo "WhatsApp ou e-mail" (name="c")
    'Tipo: ' + d.get('t') + '\n\n' + // Campo "Tipo de problema" (name="t") + linha em branco
    d.get('m'); // Campo "O que está acontecendo?" (name="m")

  // Abre o WhatsApp em nova aba com a mensagem já escrita
  window.open(
    'https://wa.me/' + WA + '?text=' + encodeURIComponent(t), // Link do WhatsApp; encodeURIComponent converte o texto para formato seguro de link
    '_blank', // Abre em nova aba
    'noopener' // Segurança: a nova aba não controla a atual
  );

  $('#ok').hidden = false; // Mostra a mensagem "Abrindo o WhatsApp..." (o parágrafo id "ok")
};