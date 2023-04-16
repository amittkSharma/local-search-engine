import { Layout as AntdLayout } from 'antd'
import * as React from 'react'
import { MinimalComponentProps } from '../../models'
import { Header } from './header'
import './layout.css'
const { Footer } = AntdLayout

export interface LayoutProps extends MinimalComponentProps {
  children?: React.ReactNode
  name?: string
  appName: string
}

export const Layout: React.FC<LayoutProps> = ({ name, children, appName }: LayoutProps) => (
  <div className="viewport">
    <Header appName={appName} name={name} />
    <div className="flex-row">
      <div className="content-scroll-container">{children}</div>
    </div>
    <Footer style={{ textAlign: 'center' }}>
      Local Search Engine ©2023 Created by Amitt K Sharma, Version: (only for demo purposes),
      HostName:
      {window.location.hostname}
    </Footer>
  </div>
)
