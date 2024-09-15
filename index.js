let arrNumber = [];

document.getElementById("btnAddNumber").onclick = function () {
  let number = document.getElementById("inputNumber").value;
  if (number !== "") {
    arrNumber.push(Number(number));
  }
  document.getElementById("arrayView").innerHTML = arrNumber;
  //clear input
  document.getElementById("inputNumber").value = "";
};
const question = document.querySelectorAll(".question");

for (let i = 0; i < question.length; i++) {
  const questionTitle = question[i].querySelector(".questionTitle");
  questionTitle.onclick = function () {
    questionTitle.classList.toggle("bg-blue-100");
    const questionContent = question[i].querySelector(".questionContent");
    handleCollapse(questionContent);
    questionContent.querySelector("#btn").onclick = function () {
      questionContent.querySelector("#arrayViewQuestion").innerHTML =
        answerShow(i);
    };
  };
}

function handleCollapse(questionContent) {
  questionContent.classList.toggle("hidden");
}

function answerShow(i) {
  //tính tổng số dương
  if (i === 0) {
    let tong = 0;
    for (const num of arrNumber) {
      if (num >= 0) {
        tong += Number(num);
      }
    }
    return `Tổng số dương là: ${tong}`;
  }
  //Đếm số dương
  else if (i === 1) {
    let tong = 0;
    for (const num of arrNumber) {
      if (num >= 0) {
        tong++;
      }
    }
    return `Số dương là: ${tong}`;
  }
  //Tìm số nhỏ nhất
  else if (i === 2) {
    let number = Number(arrNumber[0]);
    for (const num of arrNumber) {
      if (number > num) {
        number = num;
      }
    }
    return `Số nhỏ nhất là: ${number}`;
  }
  //Tìm số dương nhỏ nhất
  else if (i === 3) {
    let number = Number(arrNumber[0]);
    for (const num of arrNumber) {
      if (num >= 0) {
        if (number > num) {
          number = num;
        }
      }
    }
    return `Số nhỏ nhất là: ${number}`;
  }

  //tìm số chẵn cuối cùng
  else if (i === 4) {
    let number = 0;
    for (const num of arrNumber) {
      if (num % 2 === 0) {
        number = num;
      }
    }
    return `Số chẳn cuối cùng là: ${number}`;
  }
  //Đổi vị trí
  else if (i === 5) {
    let viTriDau = document.getElementById("viTriDau").value;
    let viTriHai = document.getElementById("viTriHai").value;
    let temp = arrNumber[viTriDau];
    arrNumber[viTriDau] = arrNumber[viTriHai];
    arrNumber[viTriHai] = temp;
    return `Mảng sau khi đổi: ${arrNumber}`;
  }
  //sắp xếp tăng dần
  else if (i === 6) {
    let arrCopy = arrNumber.slice();
    return `Mảng sau khi sắp xếp là: ${arrCopy.sort()}`;
  }
  //tìm số nguyên tố đầu tiên
  else if (i === 7) {
    for (const num of arrNumber) {
      if (timSoNguyenToDauTien(num)) {
        return `số nguyên tố đầu tiên trong mảng là : ${num}`;
      }
    }
    return "Không có số nguyên tố";
  } else if (i === 8) {
    count = 0;
    for (const num of arrNumber) {
      console.log("Number.isInteger(num) :::",Number.isInteger(num));
      
      if (Number.isInteger(num)) {
        count++;
    }
    }
    return `tổng số nguyên : ${count}`;
  }
  // so sánh tổng số âm và số dương
  else if (i === 9) {
    let tongSoDuong = 0;
    let tongSoAm = 0;
    for (const num of arrNumber) {
      if (num >= 0) {
        tongSoDuong++;
      } else {
        tongSoAm++;
      }
    }
    if (tongSoDuong > tongSoAm) {
      return `tổng số dương lớn hơn tổng số âm`;
    } else if (tongSoDuong < tongSoAm) {
      return `tổng số âm lớn hơn tổng số dương`;
    } else {
      return "tổng số âm bằng tổng số dương";
    }
  }
}

function timSoNguyenToDauTien(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
