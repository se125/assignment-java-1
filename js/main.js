var Quotes = [

    {
        'quote': '“Be yourself; everyone else is already taken.” ',
        'author': 'Oscar Wilde',

    },
    {
        'quote': '“A room without books is like a body without a soul.” ',
        'author': 'EMarcus Tullius Cicero ',

    },
    {
        'quote': '“You only live once, but if you do it right, once is enough.” ',
        'author': ' Mae West ',

    },
    {
        'quote': '“Be the change that you wish to see in the world.” ',
        'author': ' Mahatma Gandhi ',

    },
    {
        'quote': '“In three words I can sum up everything Ive learned about life: it goes on.”',
        'author': 'Nelson Mandela',

    },
    {
        'author': ' Mahatma Gandhi ',
        'quote': '“Do not take life too seriously. You will not get out alive.”'
    },
];

function Quote() {
    var qoute = Math.floor((Math.random() * Quotes.length));
    document.getElementById("demo").innerHTML = Quotes[qoute].quote;
    document.getElementById("demoo").innerHTML = Quotes[qoute].author;
}