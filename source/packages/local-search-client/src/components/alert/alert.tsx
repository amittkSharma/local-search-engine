import { Alert as AntAlert } from 'antd'
import React from 'react'

type AlertType = 'error' | 'success' | 'info' | 'warning' | undefined

interface Props {
  message: string
  alertType: AlertType
}

export const Alert: React.FC<Props> = ({ message, alertType }: Props) => {
  return <AntAlert message={message} type={alertType} />
}
