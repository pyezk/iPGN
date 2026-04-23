* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #f8fafc;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

.site-header {
  background: #111827;
  padding: 20px 0;
  border-bottom: 1px solid #1f2937;
}

.site-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

nav a {
  padding: 8px 12px;
  border-radius: 8px;
  background: #1f2937;
}

.hero {
  padding: 60px 0 30px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding-bottom: 40px;
}

.card {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #334155;
}

.bracket-container,
.stream-embed,
.standings-table {
  margin-top: 20px;
}

.standings-table {
  width: 100%;
  border-collapse: collapse;
  background: #1e293b;
}

.standings-table th,
.standings-table td {
  padding: 12px;
  border: 1px solid #334155;
  text-align: left;
}
