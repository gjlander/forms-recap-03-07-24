import './App.css';
import SignUpForm from './components/SignUpForm';
import SearchForm from './components/SearchForm';

function App() {
    return (
        <div className='p-4'>
            <h1 className='text-6xl text-center mb-8'>Forms! In React!</h1>
            <SignUpForm />
            <SearchForm />
        </div>
    );
}

export default App;
