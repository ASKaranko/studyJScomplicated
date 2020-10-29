'use strict';

const calculate = document.getElementById('start'),
    cancelBtn = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheckbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-items .income-title'),
    expensesTitle = document.querySelector('.expenses-items .expenses-title'),
    additionalExpensesItem = document.querySelectorAll('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

let expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items');

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {

  constructor() {
    this.budget = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
  }

  start () {
    this.budget = +salaryAmount.value;

    this.getExpInc();
    this.getExpensesMonth();
    this.getAddExpInc();
    this.getBudget();

    this.showResult();
  }

  reset () {
    this.budget = 0;
    this.expenses = {};
    this.income = {};
    this.incomeMonth = 0;
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.addIncome = [];
    this.budgetMonth = 0;
    this.budgetDay = 0;

    this.showResult();
    targetMonthValue.value = null;
  }

  showResult () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(", ");
    additionalIncomeValue.value = this.addIncome.join(", ");
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSavedMoney();
    periodSelect.addEventListener('input', () => {
      incomePeriodValue.value = this.calcSavedMoney();
    });
  }

  addExpIncBlock () {
    const blockStr = this.className.split(' ')[1].split('_')[0];
    let tempElem = eval(`${blockStr}Items`);
    const itemPlus = eval(`${blockStr}Plus`);
    const cloneItem = tempElem[0].cloneNode(true);
    cloneItem.querySelector(`.${blockStr}-title`).value = null;
    cloneItem.querySelector(`.${blockStr}-amount`).value = null;
    tempElem[0].parentNode.insertBefore(cloneItem, itemPlus);
    tempElem = document.querySelectorAll(`.${blockStr}-items`);
    if (tempElem.length === 3) {
      itemPlus.style.display = 'none';
    }
  }

  deleteExpensesBlock () {
    expensesItems = document.querySelectorAll('.expenses-items');
    expensesItems.forEach(function (item, i, arr) {
      if (i >= 1) {
        item.remove();
      }
    });
    expensesItems = document.querySelectorAll('.expenses-items');
  }

  deleteIncomeBlock () {
    incomeItems = document.querySelectorAll('.income-items');
    incomeItems.forEach(function (item, i, arr) {
      if (i >= 1) {
        item.remove();
      }
    });
    incomeItems = document.querySelectorAll('.income-items');
  }

  getExpInc () {

    const count = item => {
      const startStr = item.className.split('-')[0];  
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;

      if (itemTitle.trim() !== '' && itemAmount.trim() !== '') {
        this[startStr][itemTitle] = itemAmount;
      }
    };

    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }

  getAddExpInc () {
    const count = item => {
      let startStr = item.className.split('_')[1].split('-')[0];
          startStr = startStr[0].toUpperCase() + startStr.substring(1);
      const add = eval(`this.add${startStr}`);
      item.value.split(',').forEach( (elem) => {
        elem = elem.trim();
        if (elem !== '') {
          console.log(elem.substring(1));
          add.push(elem[0].toUpperCase() + elem.substring(1));
        }
      });
    };

    additionalExpensesItem.forEach(count);
    additionalIncomeItem.forEach(count);
  }

  getExpensesMonth () {
  
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  
  }

  getBudget () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  getTargetMonth () {
    return Math.ceil(targetAmount.value / this.budgetMonth);
  }

  getStatusIncome () {
    if (this.budgetDay >= 1200) {
      return "У вас высокий уровень дохода";
    } else if(this.budgetDay < 1200 && this.budgetDay >=600) {
      return "У вас средний уровень дохода";
    } else if(this.budgetDay < 600 && this.budgetDay >=0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    }
  }

  getInfoDeposit () {
    if (this.deposit) {
      
      do {
        this.percentDeposit = prompt("Какой годовой процент?", "10");
      }
      while (!isNumber(this.percentDeposit));
      do {
        this.moneyDeposit = prompt("Какая сумма депозита?", "1000");
      }
      while (!isNumber(this.moneyDeposit));
    }
  }

  calcSavedMoney () {
    periodAmount.innerHTML = periodSelect.value; 
    return this.budgetMonth * periodSelect.value;
  }

  eventsListeners () {
    
    calculate.addEventListener('click', () => {
      if (salaryAmount.value.trim() === '' || !isNumber(salaryAmount.value)) {
        calculate.disabled = true;
        return;
      }
      this.start();
      const inputTextData = document.querySelector('.data').querySelectorAll('input[type="text"]');
      inputTextData.forEach(function (item) {
        item.disabled = true;
      });
      calculate.style.display = 'none';
      cancelBtn.style.display = 'inline-block';
    });
    
    salaryAmount.addEventListener('input', function () {
      if (salaryAmount.value.trim() !== '' && isNumber(salaryAmount.value)) {
        calculate.disabled = false;
      }
    });
    
    expensesPlus.addEventListener('click', this.addExpIncBlock);
    incomePlus.addEventListener('click', this.addExpIncBlock);
    periodSelect.addEventListener('input', this.calcSavedMoney);
    cancelBtn.addEventListener('click', () => {
      this.reset();
      incomePlus.style.display = '';
      expensesPlus.style.display = '';
      const inputTextData = document.querySelector('.data').querySelectorAll('input[type="text"]');
      inputTextData.forEach( (item) => {
        item.disabled = false;
        item.value = null;
      });
      calculate.style.display = 'inline-block';
      cancelBtn.style.display = 'none';
      this.deleteExpensesBlock();
      this.deleteIncomeBlock();
    });
  }

}

const appData = new AppData ();
appData.eventsListeners();

console.log(appData);


