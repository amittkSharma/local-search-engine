import * as React from 'react'
import './header.css'

export interface HeaderProps {
  appName: string
  name?: string
}

export const Header: React.FC<HeaderProps> = ({ appName, name }: HeaderProps) => (
  <header className="main-header">
    <h1 className="app-name">
      {appName} {name ? <em> ({name})</em> : null}
    </h1>
  </header>
)
