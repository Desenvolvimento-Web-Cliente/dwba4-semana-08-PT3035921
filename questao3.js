//Aluno 1
let nome1='Vinicius Ruza';
let primeiraNota1=7;
let segundaNota1=8.5;
let mediaFinal1=(primeiraNota1*0.6)+(segundaNota1*0.4);
//Aluno 2
let nome2='Maria Silva';
let primeiraNota2=6;
let segundaNota2=7.5;
let mediaFinal2=(primeiraNota2*0.6)+(segundaNota2*0.4);
//Aluno 3
let nome3='João Santos';
let primeiraNota3=8;
let segundaNota3=9.5;
let mediaFinal3=(primeiraNota3*0.6)+(segundaNota3*0.4);
function mostrarResultado(){
    alert(`Nome do aluno: ${nome1}\n Nota1: ${primeiraNota1}\n Nota2: ${segundaNota1}`);
    alert(`Nome do aluno: ${nome1}\n Média final: ${mediaFinal1}`);
    alert(`Nome do aluno: ${nome2}\n Nota1: ${primeiraNota2}\n Nota2: ${segundaNota2}`);
    alert(`Nome do aluno: ${nome2}\n Média final: ${mediaFinal2}`);
    alert(`Nome do aluno: ${nome3}\n Nota1: ${primeiraNota3}\n Nota2: ${segundaNota3}`);
    alert(`Nome do aluno: ${nome3}\n Média final: ${mediaFinal3}`);
}
mostrarResultado();