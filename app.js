const cardBtnAreya = document.getElementsByClassName('cardBtn');

let count = 0;
let sum = 0;
for (const num of cardBtnAreya) {
  num.addEventListener('click', function () {
    //product  name --------
    const clickName = num.parentNode.childNodes[1].innerText;
    //product  price ---------
    const ccardPrice = num.parentNode.childNodes[3].childNodes[1].innerText;
    //crid product name + product price---
    const cardNameValue = clickName + ': $' + ccardPrice;

    // push product name + price with contner
    const contnerValue = document.getElementById('Contner');

    const p = document.createElement('p');
    p.innerText = cardNameValue;
    contnerValue.appendChild(p);
    count++;
    //----- parches product count --------

    setInnerTaxtValue('clickCount', count);

    //------- product parches total price ------

    const totalValued = innerTextSet('ProductTotalPriced');
    document.getElementById('ProductTotalPriced').innerText =
      totalValued + parseInt(ccardPrice);

    // garnd total price add -------
    const grandTotalPrice = innerTextSet('grandTotal');
    const grandTotals = grandTotalPrice + parseInt(ccardPrice);
    setInnerTaxtValue('grandTotal', grandTotals);

    //gren total price discareg ----------
    const budget = innerTextSet('budgetValue');
    document.getElementById('budgetValue').innerText =
      budget - parseInt(ccardPrice);

    if (budget <= 0) {
      alert('Taka nai vahi taka kamai koren');
    }
  });
}
//gren total price updet ----------

function grenTotal(element) {
  const granPrice = innerTextSet('ProductTotalPriced');

  if (element === 'bus') {
    setInnerTaxtValue('grandTotal', granPrice + 100);
  } else if (element === 'trin') {
    setInnerTaxtValue('grandTotal', granPrice - 200);
  } else if (element === 'flight') {
    setInnerTaxtValue('grandTotal', granPrice + 500);
  } else {
    setInnerTaxtValue('grandTotal', granPrice);
  }
}

//----------all section used function ------------

function innerTextSet(element) {
  const elements = document.getElementById(element).innerText;
  const elementVlaue = parseInt(elements);
  return elementVlaue;
}

function setInnerTaxtValue(element, value) {
  const elementd = document.getElementById(element);
  const elementInnerText = (elementd.innerText = value);
  const elemenValue = parseInt(elementInnerText);
  return elemenValue;
}
