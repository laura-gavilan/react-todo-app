import { Tabs } from "./Tabs";
import "./Navigation.css"

export const Navigation = ({ activeTab,  setActiveTab}) => {
    return (
        <nav className="nav">
            {Object.entries(Tabs).map(([property, value]) => {
                return (
                <button 
                key={property} 
                className={`tab ${activeTab === property ? "active" : ""}`} 
                onClick={() => setActiveTab(property)}>
                    {value}
                </button>
            );
            })}
        </nav>
    );
};