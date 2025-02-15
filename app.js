class bankAcountSystem {
  constructor(
    city,
    street,
    buildingNumber,
    apartmentNumber = null,
    clientName,
    balance
  ) {
    this.city = city;
    this.street = street;
    this.buildingNumber = buildingNumber;
    this.apartmentNumber = apartmentNumber;
    this.clientName = clientName;
    this.balance = balance;
  }
  accountInformation() {
    try {
      console.log(`Client Name: ${this.clientName}`);
      console.log(`Balance: $${this.balance}`);
    } catch (error) {
      console.log(error);
    }
  }
  async balanceCompare(amount) {
    const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
    await delay(1000);
    if (this.balance >= amount) {
      console.log(true);

      return true;
    } else {
      console.log(false);

      return false;
    }
  }
  deposit(name, value) {
        return new Promise((resolve, reject) => {
            if (typeof value !== 'number' || isNaN(value)) {
                reject("Invalid deposit value. Please enter a valid number.");
                return;
            }

            console.log("Processing deposit of", value);

            setTimeout(() => {
                name.balance += value;
                console.log('Successfully transferred', value);
                console.log('Current balance is', name.balance);
                resolve(name.balance);
            }, 2000);
            then(newBalance => {
            console.log('Deposit completed. New balance:', newBalance);
            })
            .catch(error => {
            console.error(error);
            });
        });
    }

  addAmount(amount) {
    try {
      this.balance += amount;
      console.log(`this is new amount : ${this.balance}`);
    } catch (error) {
      console.log(error);
    }
  }
}
let user = new bankAcountSystem("biba", "###", 2121, 2121, "user", 1000);
user.balanceCompare(500);
