import { fireEvent, render, screen } from '@testing-library/react'
import Select from './Select'

const options = [
  { name: 'Ocean', value: 'ocean' },
  { name: 'Orange', value: 'orange' },
  { name: 'Yellow', value: 'yellow' },
  { name: 'Forest', value: 'forest' },
]

describe('Select', () => {
  it('should render dropdown options', async () => {
    render(<Select options={options} placeholder="" value="" />)
    expect(screen.getByText('Ocean')).toBeInTheDocument()
    expect(screen.getByText('Orange')).toBeInTheDocument()
    expect(screen.getByText('Yellow')).toBeInTheDocument()
    expect(screen.getByText('Forest')).toBeInTheDocument()
  })

  it('should render an input with placeholder', async () => {
    render(<Select placeholder="Select..." options={[]} value="" />)
    expect(screen.getByPlaceholderText('Select...')).toBeInTheDocument()
  })

  it('should render default selected option if value matches one of the option values', async () => {
    render(<Select value="ocean" options={options} placeholder="" />)
    expect(screen.getByDisplayValue('Ocean')).toBeInTheDocument()
  })

  it('should render filter dropdown options based on user input', async () => {
    render(<Select options={options} value="" placeholder="" />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'an' } })
    expect(screen.getByText('Ocean')).toBeInTheDocument()
    expect(screen.getByText('Orange')).toBeInTheDocument()
    expect(screen.queryByText('Yellow')).not.toBeInTheDocument()
    expect(screen.queryByText('Forest')).not.toBeInTheDocument()
  })

  it('should clear current selection when it is clearable and user clicks it', async () => {
    render(<Select clearable options={options} value="ocean" placeholder="" />)
    expect(screen.getByDisplayValue('Ocean')).toBeInTheDocument()
    fireEvent.click(screen.getByText('close.svg'))
    expect(screen.queryByDisplayValue('Ocean')).not.toBeInTheDocument()
  })

  it('should render multiple options when the mode is multiple and user selects them', async () => {
    render(<Select multiple options={options} value="" placeholder="" />)
    fireEvent.click(screen.getByText('Yellow'))
    fireEvent.click(screen.getByText('Forest'))
    expect(screen.getByText('Yellow')).toBeInTheDocument()
    expect(screen.getByText('Forest')).toBeInTheDocument()
  })

  it('should allow custom styling on some part of the component', async () => {
    render(
      <Select
        styles={{ actionIcon: { color: 'red' } }}
        options={[]}
        value=""
        placeholder=""
      />
    )
    expect(screen.getByText('down.svg')).toHaveStyle('color: red')
  })
})
