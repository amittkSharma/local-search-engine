import { Card, Col, Descriptions, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SearchResponse } from 'src/models'
import { Alert, Layout } from '../components'

const descriptionContentStyle: React.CSSProperties = {
  marginLeft: 16,
}

export const DetailPage = () => {
  const { searchId } = useParams()
  const [data, setData] = useState<SearchResponse | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8081/api/details?searchId=${searchId}`)
      const jsonData = await result.json()
      console.log(`Result status: ${result.status}`)
      console.log(`Result: ${JSON.stringify(jsonData)}`)
      if (result.status === 200) {
        setData(jsonData.response)
      }
    }

    fetchData()
  }, [searchId])

  return (
    <Layout appName={'Local Search Engine'}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {data ? (
          <Card title={data.name} bordered={false} style={{ width: '90%', margin: 8 }}>
            <Row>
              <Col span={12}>
                <Descriptions layout="vertical" column={1}>
                  <Descriptions.Item label="Address" contentStyle={descriptionContentStyle}>
                    {data.location}
                  </Descriptions.Item>
                  {data.contactDetails && data.contactDetails.websiteUrls && (
                    <Descriptions.Item label="Website" contentStyle={descriptionContentStyle}>
                      {data.contactDetails.websiteUrls.map(url => {
                        return (
                          <a key={url} href={url}>
                            {url}
                          </a>
                        )
                      })}
                    </Descriptions.Item>
                  )}
                  {data.contactDetails && data.contactDetails.phones && (
                    <Descriptions.Item label="Phone(s)" contentStyle={descriptionContentStyle}>
                      {data.contactDetails.phones.join(', ')}
                    </Descriptions.Item>
                  )}
                </Descriptions>
              </Col>
              <Col span={12}>
                <Descriptions layout="vertical">
                  <Descriptions.Item label="Opening Hours" contentStyle={descriptionContentStyle}>
                    empty
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Card>
        ) : (
          <Alert message={`Details is not available for id: ${searchId}`} alertType="error" />
        )}
      </div>
    </Layout>
  )
}
