class Aluno{
    constructor(primeiroNome,sobrenome,nota1,nota2){
        this.primeiroNome=primeiroNome;
        this.sobrenome=sobrenome;
        this.nota1=nota1;
        this.nota2=nota2;
    }
    nomeCompleto(primeiroNome,sobrenome){
        return this.primeiroNome+" "+this.sobrenome;
    }
    media(nota1, nota2){
        return (this.nota1*0.6)+(this.nota2*0.4);
    }
}
var aluno1=new Aluno("João ", "Silva", 8, 7);
var aluno2=new Aluno("Vinicius ", "Ruza", 9, 8);
var aluno3=new Aluno("Maria ", "Oliveira", 7, 6);
var aluno4=new Aluno("Gustavo ", "Santos", 6, 6);
var aluno5=new Aluno("Ana ", "Costa", 10, 9);
var alunos=new Array();
alunos[0]=aluno1;
alunos[1]=aluno2;
alunos[2]=aluno3;
alunos[3]=aluno4;
alunos[4]=aluno5;

function mostrarAlunos(alunos){
    alunos.forEach(aluno => {
        alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}`);
    });
}
mostrarAlunos(alunos);
