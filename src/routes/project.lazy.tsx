import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/project')({
  component: AllProject,
})

function AllProject() {
  return <div>UNDER CONSTRUCTION</div>
}
