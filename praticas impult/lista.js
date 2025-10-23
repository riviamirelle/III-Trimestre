let listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];

console.log("Lista completa:", listaDeAfazeres);
console.log("Primeiro item:", listaDeAfazeres[0]);
console.log("Quantidade de itens:", listaDeAfazeres.length);

listaDeAfazeres.push("Fazer exercícios");
listaDeAfazeres.unshift("Agendar médico");

console.log("Lista após adições:", listaDeAfazeres);

let removidoFinal = listaDeAfazeres.pop();
console.log("Afazer removido do final:", removidoFinal);

let removidoInicio = listaDeAfazeres.shift();
console.log("Afazer removido do início:", removidoInicio);

console.log("Lista após remoções:", listaDeAfazeres);

let listaOrganizada = [...listaDeAfazeres];

listaOrganizada.sort();
console.log("Lista organizada (ordem alfabética):", listaOrganizada);

listaOrganizada.reverse();
console.log("Lista organizada invertida:", listaOrganizada);

console.log("Lista original (sem alterações):", listaDeAfazeres);