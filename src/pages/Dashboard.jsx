import '../css/Dashboard.css'

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || 'null')
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to your Dashboard, {user?.name}!</h1>
      <p className="dashboard-text">This is where your notes will be displayed.</p>
      {/* Placeholder for notes functionality */}
    </div>
  )
}