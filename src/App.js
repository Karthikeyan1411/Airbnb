import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from './components/data';

function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        // item = {item}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
