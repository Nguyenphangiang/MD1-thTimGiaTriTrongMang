let value = prompt("Nhập số bất kỳ:");
let numbers = [1,2,-4,55,5,6];
for (let i = 0; i < numbers.length; i++) {
    if (value==numbers[i]){
        alert("Value:" +  numbers[i] + " được tìm thấy tại " + i )
    }

}