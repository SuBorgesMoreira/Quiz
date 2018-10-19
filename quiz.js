function populate() {
	if(quiz.isEnded()) {
	   showScores();
	}
	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		
		 showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function(){
	quiz.guess(guess);
	populate();
	}
};

function showprogress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores(){
	var gameOverHTML = "<h1>Resultado</h1>";
		gameOverHTML += "<h2 id = 'score'> Você acertou:" + quiz.score + "</h2>";
		var element = document.getElementById("quiz");
		element.innerHTML = gameOverHTML;
};

var questions = [
	new Question("Na internet existem vários âncoras, mas qual sua finalidade nas páginas?", ["Usadas para direcionar o usuário para determinada parte da página do site, ou de outro site" , "Indicam os locais onde os menus que ficam fixos devem permanecer", "Colocam a página como pagina inicial do Browser do usuário", "Fazem o usuário permanecer mais tempo visitando o site"], "Usadas para direcionar o usuário para determinada parte da página do site, ou de outro site"),
	new Question("Qual das alternativas abaixo não vai colocar em risco de pegar um vírus no computador?",["Baixar arquivos na internet", "Usar antivírus com a liscença vencida", "Using WIFI gratuito", "Esquecer de esvaziar a lixeira"], "Esquecer de esvaziar a lixeira"),
	new Question("O que é hardware?",["Parte física do computador", "Parte lógica do computador", "É um sistema operacional", "É um aplicativo"], "Parte física do computador"),
	new Question("São opções no painel de controle, exceto:",["Vídeo", "Adicionar ou remover hardware", "Adicionar ou remover programas", "Mouse"], "Adicionar ou remover hardware"),
	new Question("Um conjunto de variaveis com o mesmo nome, diferenciada apenas pelo indice, é denominado:",["Método", "Classe", "Arrays", "Objeto"], "Arrays"),
	new Question("Qual é o principal componente de um computador?",["Monitor", "Memoria", "Placa Mãe", "Processador"], "Placa Mãe"),
	new Question("Na falta de quais componentes, não é possivel utilizar  o computador?",["Mouse", "Teclado", "Processador", "Caixa de som"], "Processador"),
	new Question("Conjunto de funções fundamentais que controlam o funcionamento basico do computador?",["Reset", "Boot", "Sistema operacional", "UCP"], "Sistema operacional"),
	new Question("Cada página WWW possui um endereço único, denominado:",["HTTP", "IP", "URL", "Location"], "URL"),
	new Question("É vantagem do computador de grande porte em relação ao microcomputador?",["Maior capacidade de processamento", "Menor custo de manutenção", "Menor custo de aquisição", "Maior disponibilidade de software de baixo custo"], "Maior capacidade de processamento"),
	new Question("Multiprocessamento é:",["Execução de várias tarefas ao mesmo tempo", "Execução de vários programas ao mesmo tempo", "Execução de vários programas em um computador com vários processadores", "Execução com pouca ou nenhuma interação do usuário"], "Execução de varios programas em um computador com varios processadores")
]
//create quiz
var quiz = new Quiz(questions);

//display quiz
populate();

