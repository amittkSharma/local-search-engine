import { Card, List } from 'antd'
import React from 'react'
import { SearchResult } from '../../models'

interface Props {
  dataSource: SearchResult[]
  onItemSelected: (value: string) => void
}

export const HorizontalList: React.FC<Props> = ({ dataSource, onItemSelected }: Props) => {
  return (
    <List
      grid={{
        gutter: 32,
        column: 2,
      }}
      dataSource={dataSource}
      renderItem={item => (
        <List.Item>
          <Card
            title={item.name}
            onClick={() => onItemSelected(item.id)}
            style={{ cursor: 'pointer' }}
          >
            {item.location}
          </Card>
        </List.Item>
      )}
    />
  )
}
