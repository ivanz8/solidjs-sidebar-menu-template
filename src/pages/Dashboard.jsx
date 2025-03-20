import "../assets/dashboard.css"; // Import CSS styles

function Dashboard() {
    return (
        <div class="dashboard-container">
            <h1 class="dashboard-title">Dashboard</h1>
            <div class="widget-container">
                <div class="widget">
                    <h2>Total Users</h2>
                    <p class="value blue">1,245</p>
                </div>
                <div class="widget">
                    <h2>Sales</h2>
                    <p class="value green">$12,340</p>
                </div>
                <div class="widget">
                    <h2>Messages</h2>
                    <p class="value purple">342</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;