# RecyConnect
# ♻️ RecyConnect

RecyConnect is a smart digital platform that connects companies with leftover materials and surplus to recyclers, upcyclers, NGOs, and creators. Our mission is to turn industrial waste into opportunity, enabling a circular economy through AI-powered matchmaking and real-time coordination.

---

## 🧩 Problem

Every year, Algeria generates 13.5 million tons of waste.

- Only 7% is recycled — the rest ends up in landfills or pollutes the environment.
- Valuable leftover materials are wasted due to lack of coordination and reuse networks.
- Businesses face high disposal costs and limited access to sustainable waste channels.

---

## ✅ Our Solution

RecyConnect is designed to solve this by:

- Connecting businesses with recyclers, upcyclers, NGOs, and creators.
- Enabling waste from one company to become raw material for another.
- Using AI to recommend reuse partners and optimize coordination.
- Providing dashboards to track impact and progress.

---

## 🛠️ Tech Stack

Frontend:
- React.js
- Tailwind CSS

Backend:
- Laravel (PHP)
- MySQL

AI Engine:
- Python (Flask)
- Scikit-learn
- Pandas
- NumPy

---

## ⚙️ Setup & Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/recyconnect.git
cd recyconnect



cd frontend
npm install
npm run dev



cp .env.example .env

DB_DATABASE=recyconnect_db
DB_USERNAME=your_mysql_user
DB_PASSWORD=your_mysql_password


php artisan migrate
php artisan serve
