import { getPageData } from '@/lib/getPageData'
import { NextResponse } from 'next/server'

/**
 * Returns page content from content/pageData.json for the homepage.
 */
export async function GET() {
  try {
    const data = await getPageData()
    return NextResponse.json(data)
  } catch (e) {
    console.error('page-data API:', e)
    return NextResponse.json({ error: 'Failed to load page data' }, { status: 500 })
  }
}
