export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`${className} inline-flex shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 font-display font-semibold text-white`}
    >
      A
    </span>
  )
}
