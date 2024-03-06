class PostOffice {
  constructor(balance, smsCode, parcelCost, parcelLockerCode) {
    this.balance = balance;
    this.smsCode = smsCode;
    this.parcelCost = parcelCost;
    this.parcelLockerCode = parcelLockerCode;
  }

  recieveParcel(balance, smsCode, parcelLockerCode, parcelCost) {
    for (let i = 0; i < parcelLockerCode.length; i++) {
      if (smsCode === parcelLockerCode[i]) {
        balance -= parcelCost;
        console.log(`Заберите посылку ${smsCode} из ячейки №${i + 1}. Ваш счет составляет: ${balance}ед.`);
        return;
      }
    }
    console.log("Такой код для получения посылки в почтамате не обнаружен.");
  }
}

let client = new PostOffice(500,"A001DFX0",100,(parcelLockerCode = [null, null, null, "1432HGF", null]));

client.recieveParcel(client.balance, client.smsCode, client.parcelLockerCode, client.parcelCost);
