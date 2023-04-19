import { Divider, notification } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HorizontalList, Layout, Search } from '../components'
import { serverUrl } from '../connection'
import { SearchResult } from '../models'

export const SearchPage: React.FC = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<SearchResult[] | undefined>(undefined)

  const onSearch = async (searchText: string) => {
    if (searchText !== '') {
      const result = await fetch(`${serverUrl}searchResults?searchText=${searchText}`)
      const jsonData = await result.json()

      setData(jsonData.response)
    } else {
      notification.error({
        message: 'Search with empty string is not possible, please enter some text in search box',
      })
    }
  }
  const onItemSelected = (value: string) => {
    navigate(`/detail/${value}`)
  }

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

        {data && <HorizontalList dataSource={data} onItemSelected={onItemSelected} />}
      </div>
    </Layout>
  )
}
