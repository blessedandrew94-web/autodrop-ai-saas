const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const mockDataPath = path.join(__dirname, '../src/data/mock_suppliers.json');
const data = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));

function escapeSql(str) {
  return str.replace(/'/g, "''");
}

for (const item of data) {
  const pName = escapeSql(item.product_name);
  const sName = escapeSql(item.supplier);
  const sql = `INSERT INTO sourcing (product_name, supplier, price, inventory, shipping_time_days, rating) VALUES ('${pName}', '${sName}', ${item.price}, ${item.inventory}, ${item.shipping_time_days}, ${item.rating})`;
  console.log(`Executing: ${sql}`);
  try {
    // We pass the statement as a single argument to team-db
    execSync(`team-db "${sql}"`);
  } catch (error) {
    console.error(`Failed to insert: ${item.product_name} from ${item.supplier}`);
    console.error(error.message);
  }
}
console.log('Finished populating sourcing table.');
