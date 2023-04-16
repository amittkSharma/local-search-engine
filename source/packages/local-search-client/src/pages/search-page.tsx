import { Divider } from 'antd'
import React from 'react'
import { HorizontalList, Layout, Search } from '../components'

export const SearchPage: React.FC = () => {
  const onSearch = (value: string) => console.log(value)
  const onItemSelected = (value: string) => console.log(value)

  const data = [
    {
      id: 'GXvPAor1ifNfpF0U5PTG0w',
      what: 'Casa Ferlin',
      where: 'Stampfenbachstrasse 38, 8006 Zürich',
    },
    {
      id: 'ohGSnJtMIC5nPfYRi_HTAg',
      what: 'Le Café du Marché',
      where: 'Rue de Conthey 17, 1950 Sion',
    },
    {
      id: 'GXvPAor1ifNfpF0U5PTG0w',
      what: 'Casa Ferlin',
      where: 'Stampfenbachstrasse 38, 8006 Zürich',
    },
    {
      id: 'ohGSnJtMIC5nPfYRi_HTAg',
      what: 'Le Café du Marché',
      where: 'Rue de Conthey 17, 1950 Sion',
    },
  ]

  return (
    <Layout appName="Local Search Engine">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Search placeholder="Search by name or address" onSearch={onSearch} />
        <Divider />
        <HorizontalList dataSource={data} onItemSelected={onItemSelected} />
      </div>
    </Layout>
  )
}
