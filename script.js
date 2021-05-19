let counter = 0;
let Aval[] = 0;
for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
        if (i % j == 0) {
            counter++;
        }  
        if (counter == 2) {
            Aval[i] = i ;
            console.log(Aval[i]);
            counter == 0;
            j++;
        }   
    }
}
