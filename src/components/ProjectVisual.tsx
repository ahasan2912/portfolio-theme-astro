import { useLocation } from 'react-router-dom';
import type { Project } from '../data/projects'

export function ProjectVisual({ project }: { project: Project; className?: string }) {
  const location = useLocation();
  console.log(location.pathname);
  // /projects/yeap-ads
  const l = location.pathname.split('/').filter(Boolean);
  console.log(l.length);
  return (
    <div>
      <img src={project.image} alt={project.title} className={`${l.length > 0 ? 'w-full h-100 object-cover' : 'h-56 w-full object-cover'}`} />
    </div>
  )
}