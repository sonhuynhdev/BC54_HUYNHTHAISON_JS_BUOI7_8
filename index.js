var numberArr = [];

function check_odd_even(n) {
  //flag = 1 => số lẻ
  //flag = 0 => số chẵn

  let flag = 1;
  if (n % 2 == 0) flag = 0;
  return flag;
}

function kiem_tra_snt(n) {
  //flag =1 là snt
  var flag = 1;
  //nếu n bé hơn 2 ko là snt
  if (n < 2) {
    flag = 0;
  } else {
    // lặp từ 2 tới n-1
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = 0;
        break;
      }
    }
  }
}

function themSo() {
  //
  var number = document.querySelector("#number").value * 1;
  //thêm giá trị user vừa nhập vào mảng
  numberArr.push(number);
  console.log("♣ ~ themSo ~ numberArr:", numberArr);
  //tổng số chẵn
  var tongSoDuong = 0;
  var demSoDuong = 0;
  var tongSoAm = 0;
  for (var i = 0; i < numberArr.length; i++) {
    var min = numberArr[0];
    var min_duong = numberArr[0];
    if (numberArr[i] > 0) {
      tongSoDuong = tongSoDuong + numberArr[i];
      demSoDuong++;
    }
    //tìm số nhỏ nhất
    if (min > numberArr[i]) {
      min = numberArr[i];
      return min;
    }
    //tìm số dương nhỏ nhất
    if (min_duong > 0 && min_duong > numberArr[i]) {
      min_duong = numberArr[i];
      return min_duong;
    }
    //sắp xếp thứ tự tăng dần
    var list_number = numberArr.sort(function (a, b) {
      return a - b;
    });

    //số nguyên tố
    var snt;
    if (kiem_tra_snt(numberArr[i] == 1)) {
      snt = numberArr[i];
    }
    console.log(snt);
  }

  var content = `
  <h3>${numberArr}</h3>
  <h3>Tổng số dương: ${tongSoDuong}</h3>
  <h3>Số dương có trong mảng: ${demSoDuong}</h3>
  <h3>Số nhỏ nhất: ${min}</h3>
  <h3>Số dương nhỏ nhất: ${min_duong}</h3>
  <h3>Số nguyên tố: ${snt}</h3>
  
  `;
  document.getElementById("result").innerHTML = content;
}
