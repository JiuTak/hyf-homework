const age = "12";

if (age >= 0 && age <= 12) {
    console.log(`Child`);
} else if (age > 12 && age <= 19) {
    console.log(`teen`);
} else if (age > 19 && age <= 65) {
    console.log(`adult`);
} else if (age > 65) {
    console.log(`Senior`);
} else {
    console.log("worng input");
}