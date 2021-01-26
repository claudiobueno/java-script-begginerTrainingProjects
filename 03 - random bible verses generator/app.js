
const arrayOfQuotes = [
    {"bible":"Jó cap1 vers 20 - 22",
    "verse": "- Então, Jó se levantou, rasgou o seu manto, rapou a cabeça e lançou-se em terra e adorou  - e disse: Nu saí do ventre de minha mãe e nu voltarei; o Senhor o deu e o Senhor o tomou; bendito seja o nome do Senhor!    - Em tudo isto Jó não pecou, nem atribuiu a Deus falta alguma"
    
    },
    
    {"bible":"[[Jó]] #cap23 vers 10",
    "verse":"Porém ele sabe o meu caminho; provando-me ele, sairei como o ouro."
    },

    {"bible":"[[Provérbios]] #cap1 vers 23",
    "verse":"Atentai para a minha repreensão; eis que derramarei copiosamente para vós outros o meu espírito e vos farei saber as minhas palavras."
    },

    {"bible":"[[Eclesiastes]] #cap11 vers 5",
    "verse":"Assim como você não conhece o caminho do vento, nem como o corpo é formado no ventre de uma mulher, também não pode compreender as obras de Deus, o Criador de todas as coisas."
    },

    {"bible":"[[Isaías]] #cap5 vers 12",
    "verse":"Liras e harpas, tamboris e flautas e vinho há nos seus banquetes; porém não consideram os feitos do Senhor, nem olham para as obras das suas mãos."
    },

];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector("#quoteOutput").textContent = `\"${arrayOfQuotes[random].verse}\"`;
    document.querySelector("#authorOutput").textContent = `${arrayOfQuotes[random].bible}`;
}