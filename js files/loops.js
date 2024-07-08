//for-loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while-loop
let x = 7;
while (x >= 0) {
    console.log("Umair");
    x--;
}

//do-while loop
let y = 0;
do {
    console.log("Ali");
    y++;
}
while (y <= 7);

//loop breaking
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

//loop skipping
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
