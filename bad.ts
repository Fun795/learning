class Calculation {
  connectDb(): boolean {
    const dbConnect: boolean = true;
    return dbConnect;
  }

  getItemsFromDb(): number[] {
    if (this.connectDb()) {
      return [1, 2];
    }
    throw Error("not connected to data base");
  }

  getSum(): number {
    const dbItemsArr: number[] = this.getItemsFromDb();
    return dbItemsArr.reduce((prev, current) => prev + current, 0);
  }
}

class Writer {
  calculation: Calculation = new Calculation();

  writeGetSum(): void {
    console.log(this.calculation.getSum());
  }
}

const writer = new Writer();
writer.writeGetSum(); // 3
