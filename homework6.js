//1.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);
function myBlend(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var x = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[x]] = [arr[x], arr[i]];
  }
};
//2.
 const company = {
  name: 'Велика Компанія',
  type:'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};

function findValueByKey(companyName) {
  var result = null;

  for (const key in company) {
    const obj = company[key];

    if (obj.name === companyName && obj.type === 'subCompany') {
      result = obj;
      break;
    }

    if (obj.clients) {
      for (const clientKey in obj.clients) {
        const client = obj.clients[clientKey];
        
        if (client.name === companyName && client.type === 'subCompany') {
          result = client;
          break;
        }
      }
    }
  }

  return result;
}

const result = findValueByKey('Клієнт 1'); 
console.log(result);





