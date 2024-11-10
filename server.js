const http = require('http');

const port = 3000;

const menestrel = {
  rota1: "Depois de algum tempo você aprende a diferença, a sutil diferença entre dar a mão e acorrentar uma alma. E você aprende que amar não significa apoiar-se, e que companhia nem sempre significa segurança. E começa a aprender que beijos não são contratos e presentes não são promessas.",
  rota2: "Começa a aceitar suas derrotas com a cabeça erguida e olhos adiante, com a graça de um adulto e não com a tristeza de uma criança. E aprende a construir todas as suas estradas no hoje, porque o terreno do amanhã é incerto demais para os planos, e o futuro tem o costume de cair em meio ao vão.",
  rota3: "Depois de um tempo você aprende que o sol queima se ficar exposto por muito tempo. E aprende que não importa o quanto você se importe, algumas pessoas simplesmente não se importam. E aceita que não importa o quão boa seja uma pessoa, ela vai feri-lo de vez em quando e você precisa perdoá-la por isso.",
  rota4: "Aprende que falar pode aliviar dores emocionais. Descobre que se leva anos para construir confiança e apenas segundos para destruí-la, e que você pode fazer coisas em um instante, das quais se arrependerá pelo resto da vida.",
  rota5: "Aprende que verdadeiras amizades continuam a crescer mesmo a longas distâncias. E o que importa não é o que você tem na vida, mas quem você tem na vida. E que bons amigos são a família que nos permitiram escolher.",
  rota6: "Aprende que não temos que mudar de amigos, se compreendermos que os amigos mudam. Percebe que seu melhor amigo e você podem fazer qualquer coisa, ou nada, e terem bons momentos juntos.",
  rota7: "Descobre que as pessoas com quem você mais se importa na vida são tomadas de você muito depressa, por isso sempre devemos deixar as pessoas que amamos com palavras amorosas; pode ser a última vez que as vejamos.",
  rota8: "Aprende que as circunstâncias e os ambientes têm influência sobre nós, mas nós somos responsáveis por nós mesmos. Começa a aprender que não se deve comparar com os outros, mas com o melhor que pode ser.",
  rota9: "Descobre que leva muito tempo para se tornar a pessoa que quer ser, e que o tempo é curto. Aprende que não importa onde já chegou, mas onde está indo; mas se você não sabe para onde está indo, qualquer lugar serve.",
  rota10: "Aprende que, ou você controla seus atos ou eles o controlarão, e que ser flexível não significa ser fraco ou não ter personalidade, pois não importa quão delicada e frágil seja uma situação, sempre existem dois lados.",
  rota11: "Aprende que heróis são pessoas que fizeram o que era necessário fazer, enfrentando as consequências. Aprende que paciência requer muita prática.",
  rota12: "Descobre que algumas vezes, a pessoa que você espera que o chute quando você cai é uma das poucas que o ajudam a se levantar.",
  rota13: "Aprende que maturidade tem mais a ver com os tipos de experiência que se teve e o que você aprendeu com elas do que com quantos aniversários você celebrou. Aprende que há mais dos seus pais em você do que você supunha.",
  rota14: "Aprende que nunca se deve dizer a uma criança que sonhos são bobagens, poucas coisas são tão humilhantes e seria uma tragédia se ela acreditasse nisso.",
  rota15: "Aprende que quando está com raiva tem o direito de estar com raiva, mas isso não lhe dá o direito de ser cruel.",
  rota16: "Descobre que só porque alguém não o ama do jeito que você quer não significa que esse alguém não o ame com tudo o que pode, pois existem pessoas que nos amam, mas simplesmente não sabem como demonstrar ou viver isso.",
  rota17: "Aprende que nem sempre é suficiente ser perdoado por alguém, algumas vezes você tem que aprender a perdoar a si mesmo.",
  rota18: "Aprende que com a mesma severidade com que julga, você será em algum momento condenado.",
  rota19: "Aprende que não importa em quantos pedaços seu coração foi partido, o mundo não pára para que você o conserte.",
  rota20: "Aprende que o tempo não é algo que possa voltar para trás. Portanto, plante seu jardim e decore sua alma, ao invés de esperar que alguém lhe traga flores.",
  rota21: "E você aprende que realmente pode suportar… que realmente é forte, e que pode ir muito mais longe depois de pensar que não pode mais.",
  rota22: "E que realmente a vida tem valor e que você tem valor diante da vida!",
  rota23: "Nossas dúvidas são traidoras e nos fazem perder o bem que poderíamos conquistar, se não fosse o medo de tentar."
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const route = req.url.slice(1); // Remove the leading slash

  if (menestrel[route]) {
    res.end(menestrel[route]);
  } else if (route === '') {
    res.end('Bem-vindo ao servidor do Menestrel!\n');
  } else {
    res.statusCode = 404;
    res.end('Rota não encontrada\n');
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
