

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const names = ['Edoardo', 'Simone', 'Francesco'];

for(let i = 0; i < names.lenght; i++) {
  // console.log(names[i]); 
}

names.forEach((elm) => {
   console.log(elm)
})

/* 
names.forEach(function(elm) {
    console.log(elm)
})
     */