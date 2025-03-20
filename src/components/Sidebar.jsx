import { createSignal } from "solid-js";
import profile from "../assets/images/profile.png";
function Sidebar({ setIsOpen }) {
    const [isOpen, setOpen] = createSignal(false);

    return (
        <div className={`sidebar ${isOpen() ? "open" : ""}`}>
            {/* Logo Section */}
            <div className="logo-details">
                <div className="logo_name">YOW</div>
                <i 
                    class="bx bx-menu" 
                    id="btn" 
                    onClick={() => setOpen(!isOpen())}
                ></i>
            </div>

            {/* Navigation List */}
            <ul className="nav-list">
                <li>
                    <a href="#">
                        <i class="bx bx-package"></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-package"></i>
                        <span className="links_name">User</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-chat"></i>
                        <span className="links_name">Messages</span>
                    </a>
                    <span className="tooltip">Messages</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-pie-chart-alt-2"></i>
                        <span className="links_name">Analytics</span>
                    </a>
                    <span className="tooltip">Analytics</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-folder"></i>
                        <span className="links_name">Files</span>
                    </a>
                    <span className="tooltip">Files</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-cart-alt"></i>
                        <span className="links_name">Order</span>
                    </a>
                    <span className="tooltip">Order</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-heart"></i>
                        <span className="links_name">Saved</span>
                    </a>
                    <span className="tooltip">Saved</span>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bx-cog"></i>
                        <span className="links_name">Settings</span>
                    </a>
                    <span className="tooltip">Settings</span>
                </li>
                <li className="profile">
                    <div className="profile-details">
                        <img src={profile} alt="profileImg" />
                        <div className="name_job">
                            <div className="name">User</div>
                            <div className="job">Collector</div>
                        </div>
                    </div>
                    <i class="bx bx-log-out" id="log_out"></i>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;