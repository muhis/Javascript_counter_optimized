
var sum = 0;
for (var i = 3, j = 5;i < 1000; i+=3) {
sum += i;
if (j<1000){
	if (j%3 != 0){
		sum+=j
	};
	j+=5;
};
