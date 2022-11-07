

/**
 * 
 * Bai tập thêm
 * 
 * 
 */
 // Đầu tiên tạo 1 mãng rỗng nằm bên ngoài thành 1 biến global
 var listNumber = [];
function addNumber (){
   
    //dom tới thẻ input để lấy giá trị user nhập
    var number = document.getElementById("txtNumber").value * 1; 
        //đẩy các giá trị user nhập vào mảng 
        listNumber.push(number);
        document.getElementById("infoListNumber").innerHTML = listNumber;
    
};


/**
 * b1 Tổng các số dương
 */
function tinhTongSoDuong (){
    var tong = 0;
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            tong += listNumber[i];
        }
    }
    var rs = "Tổng các số dương là : " + tong;
   document.getElementById("TongSoDuong").innerHTML = rs;
};

/**
 * Đếm số Dương
 */

function demSoDuong (){
    var dem = 0;
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] >= 0){
            dem++;
        }
    }
    var rs = "Có " + dem + " Số Dương";
    document.getElementById("infoSoDuong").innerHTML = rs;
};

//Số nhỏ nhất

function soNhoNhat (){
    var min = listNumber[0];
    for(var i = 1; i < listNumber.length; i++){
        
            if(i > listNumber[i]){
                min = listNumber[i]
            }
    }
    var rs = " Số nhỏ nhất trong mảng là: "  + min;
    document.getElementById("infoMin").innerHTML = rs;

    
};

/**
 * Tìm số dưƠng nhỏ nhất trong mảng
 */
function soDuongNhoNhat (){
    var min = listNumber[0];
    for(var i = 0; i < listNumber.length; i++){
        
            if(i > listNumber[i] && listNumber[i] > 0){
                min = listNumber[i]
            }
    }
    var rs = " Số dương nhỏ nhất trong mảng là: "  + min;
    document.getElementById("minSoDuong").innerHTML = rs;

    
};

/** 
 * Tìm số chẳn cuối cùng
 */


/*Tạo hàm kiểm tra số chẵn lẻ*/
function check_odd_even(n){
    //even = 1 => số lẻ 
    //even= 0 => số chẵn

    var even = 1;
    if( n % 2 == 0 ) even = 0;
    return even;  
};


/*Tạo hàm tìm số chẵn cuối cùng trong mảng */
function find_last_even(){
    var content = "";
    for (var i = listNumber.length-1; i >=0; i--){
        if (check_odd_even(listNumber[i])=== 0){
            break;
            
        
        }

       

      
    }

   document.getElementById("check_even").innerHTML = listNumber[i];
    
};


/**
 * Sắp xếp theo thứ tự tăng dần
 */
 function upNumber (){
    for (var i = 0; i < listNumber.length -1; i++  ){
        for(j= i +1; j < listNumber.length; j++){
            if(listNumber[i] > listNumber[j]){
                    var temp = listNumber[i];
                    listNumber[i] = listNumber[j]
                    listNumber[j] = temp;
                
            }
        }
       
    }
    document.getElementById('number++').innerHTML = listNumber;
 };

 /**
  * Số nguyên tố đầu  tiên
  */
  function kiemTraSoNguyenTo(number){
    var checkSNT = true;
    for ( var i = 2; i<= Math.sqrt(number); i++){
        if(number % i === 0){
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
    
};
function SNTdautien (){
    var snt = "";
    
}