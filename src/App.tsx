import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/sidebar/sideBarContainer"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {/* Conteúdo principal do app aqui */}
      </main>
    </SidebarProvider>
  )
}