import { Input } from 'antd'
import React from 'react'

interface Props {
  placeholder?: string
  onSearch: (value: string) => void
}

export const Search: React.FC<Props> = ({ placeholder, onSearch }: Props) => {
  return (
    <Input.Search
      placeholder={placeholder}
      allowClear={true}
      onSearch={onSearch}
      style={{ marginTop: 8, width: 800 }}
    />
  )
}
