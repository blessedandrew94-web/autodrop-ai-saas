import fs from 'fs';
import path from 'path';

export interface SupplierData {
  product_name: string;
  supplier: string;
  price: number;
  inventory: number;
  shipping_time_days: number;
  rating: number;
}

export class SourcingService {
  private mockDataPath = path.join(process.cwd(), 'src/data/mock_suppliers.json');

  async fetchAllSourcingData(): Promise<SupplierData[]> {
    try {
      const data = fs.readFileSync(this.mockDataPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching sourcing data:', error);
      return [];
    }
  }

  async findBestSupplier(productName: string): Promise<SupplierData | null> {
    const allData = await this.fetchAllSourcingData();
    const productSuppliers = allData.filter(
      (s) => s.product_name.toLowerCase() === productName.toLowerCase()
    );

    if (productSuppliers.length === 0) return null;

    // Simple logic: Best is lowest price, then highest rating if prices are similar
    return productSuppliers.sort((a, b) => {
      if (a.price !== b.price) {
        return a.price - b.price;
      }
      return b.rating - a.rating;
    })[0];
  }

  async getBestSuppliersForAll(): Promise<Record<string, SupplierData>> {
    const allData = await this.fetchAllSourcingData();
    const uniqueProducts = Array.from(new Set(allData.map((s) => s.product_name)));
    
    const results: Record<string, SupplierData> = {};
    for (const product of uniqueProducts) {
      const best = await this.findBestSupplier(product);
      if (best) {
        results[product] = best;
      }
    }
    return results;
  }
}
