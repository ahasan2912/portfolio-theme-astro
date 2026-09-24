import profilePic from '../assect/IMG_20260820_152842.jpg'

export function LogoMark({ className = 'h-9 w-9 rounded-full object-fill' }: { className?: string }) {
  return (
    <div>
      <img src={profilePic} alt="Logo" className={className} />
    </div>
  )
}
