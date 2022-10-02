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
      <h4>options</h4>
      <Select options={options} placeholder="" value="" />

      <h4>placeholder</h4>
      <Select options={options} placeholder="Select..." value="" />

      <h4>value</h4>
      <Select options={options} placeholder="" value="orange" />

      <h4>clearable</h4>
      <Select options={options} placeholder="" value="forest" clearable />

      <h4>multiple</h4>
      <Select options={options} placeholder="" value="" clearable multiple />

      <h4>styles</h4>
      <Select
        styles={{
          actionIcon: { color: 'orange' },
          value: { color: 'green' },
        }}
        options={options}
        clearable
        multiple
        value=""
        placeholder=""
      />
    </div>
  )
}

export default App
