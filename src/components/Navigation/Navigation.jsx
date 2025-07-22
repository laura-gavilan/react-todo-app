import { Tabs } from "./Tabs";
import "./Navigation.css"

export const Navigation = ({ activeTab,  setActiveTab}) => {
    return (
        <nav className="nav">
            {Object.entries(Tabs).map(([property, value]) => {
                return (
                <button 
                key={property} 
                className={`tab ${activeTab === value ? "active" : ""}`} 
                onClick={() => setActiveTab(value)}>
                    {value}
                </button>
            );
            })}
        </nav>
    );
};