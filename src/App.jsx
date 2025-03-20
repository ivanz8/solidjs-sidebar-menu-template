import { createSignal } from "solid-js";
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
    const [isDarkMode, setIsDarkMode] = createSignal(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode());
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div class={styles.App}>
            {/* Sidebar Component */}
            <Sidebar />

            {/* Main Content Container */}
            <div class="main-content">
                {/* Dark Mode Toggle Button */}
                <button 
                    onClick={toggleDarkMode} 
                    style={{
                        position: "fixed",
                        top: "20px",
                        right: "20px",
                        padding: "10px",
                        background: "transparent", // Neutral background
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* Icon changes based on mode */}
                    <i class={`bx ${isDarkMode() ? 'bx-moon' : 'bxs-sun bx-rotate-90'}`} 
                       style={{ fontSize: "2233px", color: "#fff" }}> {/* Icon color */}
                    </i>
                </button>

                {/* Dashboard Component */}
                <Dashboard />
            </div>
        </div>
    );
}

export default App;