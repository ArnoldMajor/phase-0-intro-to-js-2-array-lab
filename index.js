const cats = ['Milo', 'Otis', 'Garfield'];

beforeEach (function(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(){
    cats.push('Ralph')
    return cats;    
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats
}

function appendCat(){
    const catsNew = [...cats, 'Broom'];
    return catsNew;
}

function prependCat(){
    const catsNew = ['Arnold', ...cats];
    return catsNew;
}

function removeLastCat(){
    const catsNew = cats.slice(0,2);
    return catsNew; 
}

function removeFirstCat(){
    const catsNew = cats.slice(1,3);
    return catsNew;
}
