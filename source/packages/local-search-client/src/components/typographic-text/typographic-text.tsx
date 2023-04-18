import { Typography } from 'antd'
import React from 'react'

interface Props {
  text: string
  italic?: boolean
}

export const Text: React.FC<Props> = ({ text, italic }: Props) => {
  return <Typography.Text italic={italic ?? false}>{text}</Typography.Text>
}
