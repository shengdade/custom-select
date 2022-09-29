import './App.css'
import Select from './components/select/Select'

const options = [
  { name: 'Ocean', value: 'ocean' },
  { name: 'Orange', value: 'orange' },
  { name: 'Yellow', value: 'yellow' },
  { name: 'Forest', value: 'forest' },
]

function App() {
  return (
    <div className="App">
      <Select
        placeholder="Select..."
        options={options}
        value="ocean"
        clearable
      />
    </div>
  )
}

export default App
