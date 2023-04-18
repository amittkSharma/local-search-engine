import { Card, Col, Descriptions, List, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SearchResponse } from 'src/models'
import { Alert, Layout, Text } from '../components'

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
          <Card
            title={<Text text={data.name} italic={true} />}
            bordered={false}
            style={{ width: '90%', margin: 8 }}
          >
            <Row>
              <Col span={12}>
                <Descriptions layout="vertical" column={1}>
                  <Descriptions.Item
                    label={<Text text="Address" italic={true} />}
                    contentStyle={descriptionContentStyle}
                  >
                    {data.location}
                  </Descriptions.Item>
                  {data.contactDetails && data.contactDetails.websiteUrls && (
                    <Descriptions.Item
                      label={<Text text="Website" italic={true} />}
                      contentStyle={descriptionContentStyle}
                    >
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
                    <Descriptions.Item
                      label={<Text text="Phone(s)" italic={true} />}
                      contentStyle={descriptionContentStyle}
                    >
                      {data.contactDetails.phones.join(', ')}
                    </Descriptions.Item>
                  )}
                </Descriptions>
              </Col>
              <Col span={12}>
                <Descriptions layout="vertical" column={1}>
                  <Descriptions.Item
                    label={<Text text="Opening Hours" italic={true} />}
                    contentStyle={descriptionContentStyle}
                  >
                    <Descriptions layout="horizontal" column={1}>
                      {data &&
                        data !== undefined &&
                        data.openingHours !== undefined &&
                        data.openingHours.map(openHr => {
                          return (
                            <Descriptions.Item
                              key={openHr.days}
                              label={openHr.days}
                              contentStyle={{ marginLeft: 16, marginTop: -12 }}
                            >
                              <List
                                dataSource={openHr.openingTime}
                                split={false}
                                renderItem={item => (
                                  <List.Item>
                                    {item.type === 'closed' ? (
                                      <Text text={item.type} />
                                    ) : (
                                      <Text text={`${item.start} - ${item.end}`} />
                                    )}
                                  </List.Item>
                                )}
                              />
                            </Descriptions.Item>
                          )
                        })}
                    </Descriptions>
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
