var cols = []
for (let i = 0; i < 15; i++) {
    // Diziye değer ekle
    cols[i] = document.getElementById('col' + i);
}

var dnm = document.getElementById('deneme');
var para = document.getElementById('para');
var credit = 100;

var button = document.getElementById('cevir');
button.addEventListener('click', function() {
  
  for (let i = 0; i < 15; i++)
    {
      var randomNumber = getRandomInt(0, 10);
      
      cols[i].textContent = randomNumber;
    }
  
  if (cols[6].textContent === cols[7].textContent || cols[7].textContent === cols[8].textContent || cols[6].textContent === cols[8].textContent){
    credit += 15;
    para.textContent = "paranız: " + credit + " TL";
    dnm.textContent = "15 TL kazandınız!"
  }
  else if (cols[6].textContent === cols[7].textContent && cols[7].textContent === cols[8].textContent){
    credit += 50;
    para.textContent = "paranız: " + credit + " TL";
    dnm.textContent = "50 TL kazandınız!"
  }
  else{
    credit -= 5;
    para.textContent = "paranız: " + credit + " TL";
    dnm.textContent = "5 TL kaybettiniz!"
  }
    
    
});
//cols[i] = randomNumber;



function getRandomInt(min, max) {
    // min ve max dahil olacak şekilde rastgele tam sayı döndür
    return Math.floor(Math.random() * (max - min + 1)) + min;
}