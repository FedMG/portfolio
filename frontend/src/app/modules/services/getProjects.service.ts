import { adapter } from '../adapters'
import type { EndpointProject, Project } from '../models'

export async function getProjects(): Promise<Project[] | []> {
  const url = 'https://portfolio-api-9toi.onrender.com/'
  const endpoint = 'api/v1/projects'
  const res = await fetch(url + endpoint)

  if (!res.ok) throw new Error('Failed to fetch data')

  const contentType = res.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) {
    const projects: EndpointProject[] = await res.json()
    return adapter.adaptAll(projects)
  } else {
    // console.log(await res.text())
    console.error('Response is not in JSON format')
    return []
  }
}
