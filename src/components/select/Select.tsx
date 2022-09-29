import { useEffect, useState } from 'react'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { ReactComponent as DownIcon } from '../../assets/icons/down.svg'
import useVisible from '../../hooks/useVisible'
import { Option, SelectProps } from '../../types'
import './Select.css'

function Select({
  options,
  placeholder,
  value,
  clearable = false,
  multiple = false,
  styles = {},
}: SelectProps) {
  const { ref, isVisible: isOpen, setVisible: setIsOpen } = useVisible(false)
  const defaultOption = options.find((option) => option.value === value)
  const defaultSelected = defaultOption ? [defaultOption] : []
  const [selected, setSelected] = useState<Option[]>(defaultSelected)
  const [input, setInput] = useState<string>('')
  const selectedValues = selected.map((option) => option.value)

  useEffect(() => {
    if (!multiple && selected.length === 1) {
      setInput(selected[0]?.name || '')
    } else {
      setInput('')
    }
  }, [multiple, selected])

  const onClear = () => {
    setSelected([])
    setInput('')
  }

  const onItemClick = (option: Option) => {
    if (multiple) {
      setSelected((previous) => [...previous, option])
    } else {
      setSelected([option])
    }
    setIsOpen(false)
  }

  const onDeselect = (option: Option) => {
    setSelected((previous) =>
      previous.filter((selected) => selected.value !== option.value)
    )
  }

  return (
    <div style={styles.root}>
      <div className="wrapper" style={styles.wrapper}>
        {multiple && (
          <div className="values" style={styles.values}>
            {selected.map((option) => (
              <div className="value" style={styles.value} key={option.value}>
                <span>{option.name}</span>
                <CloseIcon
                  className="valueIcon"
                  style={styles.valueIcon}
                  onClick={() => onDeselect(option)}
                />
              </div>
            ))}
          </div>
        )}
        <input
          className="input"
          style={styles.input}
          value={input || ''}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          placeholder={multiple ? '' : placeholder}
          onClick={() => setIsOpen(true)}
        />
        <div className="actions" style={styles.actions}>
          {clearable && (
            <CloseIcon
              className="actionIcon"
              style={styles.actionIcon}
              onClick={onClear}
            />
          )}
          <div className="separator" style={styles.separator} />
          <DownIcon
            className="actionIcon"
            style={styles.actionIcon}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <div
        ref={ref}
        className={`dropdown ${isOpen ? 'show' : ''}`}
        style={styles.dropdown}
      >
        <ul className="itemsWrapper" style={styles.itemsWrapper}>
          {options
            .filter(
              (option) =>
                option.name.toLowerCase().includes(input.toLowerCase()) &&
                (!multiple || !selectedValues.includes(option.value))
            )
            .map((option) => (
              <li
                className="item"
                style={styles.item}
                key={option.value}
                onClick={() => onItemClick(option)}
              >
                {option.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Select
