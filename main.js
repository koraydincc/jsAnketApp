const newData = [];
let temp = '';
let eleman = '';
let counter = 0;
let partiler = document.getElementById('partiler');
let ad = document.getElementById('ad');
let soyad = document.getElementById('soyad');
let tc = document.getElementById('tc');
let veri = document.getElementById('veri');
let removeBtn = document.getElementById('removeBtn')
let anketSonuclari = document.getElementById('anketSonuclari')
let userCounter = document.getElementById('userCounter')

let showSettingsContainerItem = document.getElementById('settingsContainer')
let anketSonucBtn = document.getElementById('sonuc');

// Değişen elemanın indeks değerini tutar
let currentIndex = null;

let anketChart = false;


document.getElementById('kaydet').addEventListener('click', function() {
    let secilenParti = partiler.value;
   
    
   
    
    


    if (ad.value === '' || soyad.value === '' || tc.value === '') {
        alert('Lütfen bütün alanları doldurunuz!');
        return false;
    }

    if (newData.indexOf(tc.value) > -1) {
        alert('Sadece bir kez oy kullanabilirsiniz!');
        ad.value = '';
        soyad.value = '';
        tc.value = '';
        return false;
    }

    if (tc.value.length > 11) {
        alert('Geçersiz TC kimlik numarası');
        ad.value = '';
        soyad.value = '';
        tc.value = '';
        return false;
    }

    
   newData.push({
    ad: ad.value,
    soyad: soyad.value,
    tc: tc.value,
    secilenParti: secilenParti
    
   })
   
  

 


    counter++;
    

 
    //   temp += ` <li>${counter}.Kayıt : Sayın ${tc.value} kimlik numaralı ${ad.value.toUpperCase()} ${soyad.value.toUpperCase()}. Oyunuzu ${secilenParti}'den yana kullandınız.</li>
    //  <button type="button"
    //   onclick="removeBtn2()" id="removeBtn";>Sil</button>` ;


   


   readList();
    

    ad.value = '';
    soyad.value = '';
    tc.value = '';
    
    
    
});


//chart.js  
function readList() {


  let temp = '';
  for (let i = 0; i < newData.length; i++) {
    
    temp += `Toplam Üye ${counter}
          <li>${i + 1}.Kayıt : Sayın ${newData[i].tc} kimlik numaralı 
          ${newData[i].ad.toUpperCase()} ${newData[i].soyad.toUpperCase()}. Oyunuzu ${newData[i].secilenParti}'den yana kullandınız.</li>
     <button type="button"
      onclick="removeBtn2(${i})" id="removeBtn";>Sil</button>
          <button type="button"
      onclick="showSettingsContainer(${i})" id="removeBtn";>Düzenle</button>
      ` ;
  } 


  veri.innerHTML = temp;

}

  function removeBtn2(index) {
    counter--;
    newData.splice(index,1)
    readList();
  }



function showSettingsContainer(index) {
  showSettingsContainerItem.style.display = 'block'
  currentIndex = index;
}


function newDataUpdate() {
  let updatePartiValue = document.getElementById('u_partiler').value;
  newData[currentIndex].secilenParti = updatePartiValue
  readList();

}



function anketSonuclariShow() {
  anketSonuclari.style.display = 'block';

  let anket = {
    CHP: 0,
    AKP: 0,
    MHP: 0,
    HDP: 0,
    İYİ_PARTİ:0
  };
  
  const ctx = document.getElementById('myChart');

  for (let i = 0; i < newData.length; i++) {
        anket[newData[i].secilenParti] = anket[newData[i].secilenParti] + 1 
  }

  if (typeof anketChart == 'object') {
    anketChart.destroy(); 
  }

  anketChart =   new Chart(ctx, {
    type: 'bar',
    data: {
    
      labels: ['CHP', 'AKP', 'İYİ PARTİ', 'HDP', 'MHP'],
      datasets: [{
        label: 'Parti Oyları',
        data: [anket.CHP, anket.AKP, anket.İYİ_PARTİ, anket.HDP, anket.MHP],
        borderWidth: 1,
            backgroundColor: [
          'red',
          'blue',
          'yellow',
          'blue',
          'blue'
    ],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



}


