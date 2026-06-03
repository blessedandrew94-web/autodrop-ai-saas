import { execSync } from 'child_process';

export async function queryDb<T>(sql: string): Promise<T[]> {
  try {
    const output = execSync(`team-db "${sql.replace(/"/g, '\\"')}"`).toString();
    return JSON.parse(output);
  } catch (error) {
    console.error('Database query error:', error);
    return [];
  }
}
