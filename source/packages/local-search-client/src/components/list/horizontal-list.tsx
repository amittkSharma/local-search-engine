import { Card, List } from 'antd'
import React from 'react'

interface DataSource {
  id: string
  what: string
  where: string
}

interface Props {
  dataSource: DataSource[]
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
            title={item.what}
            onClick={() => onItemSelected(item.id)}
            style={{ cursor: 'pointer' }}
          >
            {item.where}
          </Card>
        </List.Item>
      )}
    />
  )
}
