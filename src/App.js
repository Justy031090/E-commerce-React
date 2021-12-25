import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Products from './components/Products';
import Category from './components/Category';
import Cart from './components/Cart';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="routes">
                    <Header />
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/shopping-cart" component={Cart} />
                    <Route exact path="/categories" component={Category} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
