import { useState } from "react";
import "./App.css"; // Stil dosyan varsa burada import edebilirsin

// Modal Bileşeni
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <p>This is the modal content</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

// Sidebar Bileşeni
const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.sidebar}>
      <p>This is the sidebar</p>
      <button onClick={onClose}>Close Sidebar</button>
    </div>
  );
};

// ComponentA: Modal'ı yönetir
const ComponentA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={styles.section}>
      <h2>Component A</h2>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

// ComponentB: Sidebar'ı yönetir
const ComponentB = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div style={styles.section}>
      <h2>Component B</h2>
      <button onClick={openSidebar}>Open Sidebar</button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
};

// Ana App Bileşeni
const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Modal & Sidebar Example</h1>
      <ComponentA />
      <ComponentB />
    </div>
  );
};

// Basit stiller
const styles = {
  section: {
    marginBottom: "2rem",
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    minWidth: "300px",
    textAlign: "center",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "250px",
    height: "100%",
    backgroundColor: "#eee",
    padding: "1rem",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
    zIndex: 999,
  },
};

export default App;
