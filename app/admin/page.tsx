'use client'

import { TinaAdmin } from 'tinacms'
import tinaConfig from '../../tina/config'

export default function TinaAdminPage() {
  return <TinaAdmin config={tinaConfig} />
}
