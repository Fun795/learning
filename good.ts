class DataBaseOrm {
  connectDb(): boolean {
    const dbConnect: boolean = true;
    return dbConnect;
  }

  getItemsFromDb(): number[] {
    return [1, 2];
  }
}

class Calculation {
  getSum(items: number[]): number {
    return items.reduce((prev, current) => prev + current, 0);
  }
}

class Writer {
  writeValue(value): void {
    console.log(value);
  }
}

const db = new DataBaseOrm();
const dbConnect = db.connectDb();

if (!dbConnect) {
  throw Error("not connected to data base");
}
const items: number[] = db.getItemsFromDb();
const calculation = new Calculation();
const sumItems = calculation.getSum(items);

const writer = new Writer();

writer.writeValue(sumItems); // 3
