let income = prompt("Qual o valor das entradas?");
let costs = prompt("Qual o valor das saídas?");
let taxesPercentage = prompt ("Qual a porcentagem dos impostos?");
let grossProfit = income - costs;
let tax = grossProfit*taxesPercentage/100;
let netIncome = grossProfit - tax;
document.write("Sua renda líquida é de $" + netIncome);
