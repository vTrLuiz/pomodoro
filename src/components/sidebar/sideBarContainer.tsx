import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Settings, Timer, Clock, History } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
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
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
