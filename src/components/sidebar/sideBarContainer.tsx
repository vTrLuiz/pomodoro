import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Settings, Timer, Clock, History } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="text-center">
        <p className="text-2xl font-bold truncate">Pomodoro</p>
      </SidebarHeader>
      <SidebarContent className="mt-8">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Timer"
                isActive={location.pathname === "/timer"}
                asChild
              >
                <Link to="/timer" className="flex items-center gap-2 w-full">
                  <Timer className="w-5 h-5" />
                  <span>Timer</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Relógio"
                isActive={location.pathname === "/clock"}
                asChild
              >
                <Link to="/clock" className="flex items-center gap-2 w-full">
                  <Clock className="w-5 h-5" />
                  <span>Relógio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Histórico"
                isActive={location.pathname === "/history"}
                asChild
              >
                <Link to="/history" className="flex items-center gap-2 w-full">
                  <History className="w-5 h-5" />
                  <span>Histórico</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton
                tooltip="Configurações"
                isActive={location.pathname === "/settings"}
                asChild
              >
                <Link to="/settings" className="flex items-center gap-2 w-full">
                  <Settings className="w-5 h-5" />
                  <span>Configurações</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-center items-center p-2">
        <div className="w-full flex justify-start">
          <SidebarTrigger />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
