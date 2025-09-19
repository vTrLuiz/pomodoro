import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/sideBarContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Settings from "@/pages/Settings";
import Timer from "@/pages/Timer";
import Clock from "@/pages/Clock";
import History from "@/pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/timer" />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </SidebarProvider>
    </BrowserRouter>
  );
}
