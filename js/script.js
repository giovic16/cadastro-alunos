// Maks
$('#inputTel').mask('(00) 0000-0000');

// aluno
var alunos = [
    {
        id: 1,
        nome: 'Pedro Antônio',
        email: 'pedro.antonio@abutua.com',
        telefone: '(15) 9999-9999',
        curso: 'Angular',
        turno: 'Tarde'
    }
]

// turno
var turno = [
    {
        id: 1,
        periodo: 'Manhã'
    },
    {
        id: 2,
        periodo: 'Tarde'
    },
    {
        id: 3,
        periodo: 'Noite'
    }
]

carregaAluno();

function carregaAluno(){
    for(let aluno of novosAlunos){
        adicionaAluno(aluno);
    }
}

function adicionaAluno(aluno){
    var tabela = document.getElementById('tabelaAlunos');

    var novoAluno = tabela.insertRow();

    // id
    var addId = document.createTextNode(alunos.id);
    novoAluno.insertCell.appendChild(addId);

    // nome
    var addNome = document.createTextNode(alunos.nome);
    novoAluno.insertCell.appendChild(addNome);

    // email
    var addEmail = document.createTextNode(alunos.email);
    novoAluno.insertCell.appendChild(addEmail);

    // telefone
    var addTelefone = document.createTextNode(alunos.telefone);
    novoAluno.insertCell.appendChild(addTelefone);

    // curso
    var addCurso = document.createTextNode(alunos.curso);
    novoAluno.insertCell.appendChild(addCurso);

    // turno
    var periodos = '';
    if(!aluno.periodo){
        periodos = '<span class="badge text-bg-success me-1">P</span>'
    }

    if(aluno.periodo){
        periodos += 
    }

    if(aluno.periodo){
        periodos += '<span class="badge text-bg-success me-1">P</span>'
    }

    function save(){
        var novoAluno = {
            id: alunos.length + 1,
            nome: document.getElementById('inputName').value,
            email: document.getElementById('inputEmail').value,
            telefone: document.getElementById('inputTel').value,
            curso: document.getElementById('inputCourse').value,
            manha: document.getElementById('gridRadios1').checked,
            tarde: document.getElementById('gridRadios2').checked,
            noite: document.getElementById('gridRadios3').checked,
        };
    }
}