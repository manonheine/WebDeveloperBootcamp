// all -10 to 19

for(var i = -10; i < 20; i++) {
  console.log(i)
}

// even 10 - 40

for(var i = 10; i <= 40; i+=2) {
  console.log(i)
}

// odd 300 - 333

for(var i = 300; i <= 333; i++){
  if(i % 2 !== 0) {
    console.log(i)
  }
}

// all divisible by 5 AND 3 between 5 - 50

for(var i = 5; i <= 50; i++) {
  if( i % 3 === 0 && i % 5 === 0) {
    console.log(i)
  }
}
