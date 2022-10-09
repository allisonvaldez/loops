/*
Nested For loop example
*/
for (let i = 1; i <= 10; i++) {
    console.log("OUTERLOOP:", i);

    for (let j = 10; j > 0; j--) {
        console.log("   INNERLOOP:", j);
    }
}