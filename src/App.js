import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} className="h-10" alt="logo" />
          <nav>
            <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Home</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Upload PDF</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Book Contents</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
        <p className="mb-4">This is a basic layout using Tailwind CSS.</p>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; 2023 Your Company
        </div>
      </footer>
    </div>
  );
}

export default App;