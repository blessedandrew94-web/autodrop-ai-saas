import subprocess
import json

def get_stats():
    leads = subprocess.run("team-db \"SELECT COUNT(*) as count FROM leads\"", shell=True, capture_output=True, text=True)
    orders = subprocess.run("team-db \"SELECT COUNT(*) as count FROM orders\"", shell=True, capture_output=True, text=True)
    revenue = subprocess.run("team-db \"SELECT SUM(CASE WHEN product_id='flame-humidifier' THEN 39.99 WHEN product_id='soap-dispenser' THEN 24.99 WHEN product_id='galaxy-projector' THEN 44.99 END) as total FROM orders\"", shell=True, capture_output=True, text=True)

    print("--- GlowHome Analytics ---")
    print(f"Total Leads: {json.loads(leads.stdout)[0]['count']}")
    print(f"Total Orders: {json.loads(orders.stdout)[0]['count']}")
    rev = json.loads(revenue.stdout)[0]['total']
    print(f"Estimated Revenue: ${rev if rev else 0.0}")

if __name__ == "__main__":
    get_stats()
