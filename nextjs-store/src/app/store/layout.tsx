export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Landing Categories</nav>
      {children}
    </main>
  )
}