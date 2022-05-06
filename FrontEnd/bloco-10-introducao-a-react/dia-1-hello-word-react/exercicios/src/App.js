import './App.css';

const tasks = ['fazer os exercicios', 'ir para academia', 'trabalhar'];

const Task = (array) => {
  return (
    array.map(task => <li>{task}</li>)
  );
};

function App() {
  return Task(tasks);
}

export default App;
