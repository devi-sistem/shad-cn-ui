import React from 'react';
import { Briefcase, BarChart2, PieChart, Search, Share2, Calendar, Heart, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SidebarItem: React.FC<{ icon: React.ReactNode; text: string; active?: boolean }> = ({ icon, text, active }) => (
  <Button variant={active ? "secondary" : "ghost"} className="w-full flex flex-col items-center py-2 px-1">
    {icon}
    <span className="text-xs mt-1">{text}</span>
  </Button>
);

const LeftSidebar: React.FC = () => {
  return (
    <aside className="bg-[#0D1A23] text-white w-20 flex flex-col items-center py-4 space-y-4">
      <Button variant="default" className="bg-[#FBA997] hover:bg-[#FBA997]/90 text-[#0D1A23]">
        <Briefcase className="w-6 h-6" />
      </Button>
      <SidebarItem icon={<BarChart2 className="w-6 h-6" />} text="Travel Summary" active />
      <SidebarItem icon={<PieChart className="w-6 h-6" />} text="Analytics Summary" />
      <SidebarItem icon={<Search className="w-6 h-6" />} text="Predictive Analysis" />
      <SidebarItem icon={<Share2 className="w-6 h-6" />} text="Self Service" />
      <SidebarItem icon={<Calendar className="w-6 h-6" />} text="Future Travel" />
      <SidebarItem icon={<Heart className="w-6 h-6" />} text="Traveller Wellbeing" />
      <SidebarItem icon={<MapPin className="w-6 h-6" />} text="Risk Assessment" />
    </aside>
  );
};

export default LeftSidebar;