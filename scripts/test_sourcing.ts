import { SourcingService } from '../src/services/sourcingService';

async function test() {
  const service = new SourcingService();
  
  console.log('--- All Sourcing Data ---');
  const allData = await service.fetchAllSourcingData();
  console.log(`Found ${allData.length} supplier entries.`);

  console.log('\n--- Best Suppliers Recommendation ---');
  const recommendations = await service.getBestSuppliersForAll();
  for (const [product, supplier] of Object.entries(recommendations)) {
    console.log(`Product: ${product}`);
    console.log(`  Best Supplier: ${supplier.supplier}`);
    console.log(`  Price: $${supplier.price}`);
    console.log(`  Inventory: ${supplier.inventory}`);
    console.log(`  Shipping: ${supplier.shipping_time_days} days`);
  }
}

test();
