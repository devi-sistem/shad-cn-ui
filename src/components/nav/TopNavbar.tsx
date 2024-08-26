import React from 'react';
import { Search, BookmarkPlus, Heart, Bell, Share2, User, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TopNavbar: React.FC = () => {
  return (
    <nav className="bg-[#0D1A23] text-white p-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-[#56D8D8]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
        <span className="text-xl font-bold flex items-center">
          <span className="text-[#56D8D8] mr-1">X</span>Analytics
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <Button variant="ghost" size="icon"><Search className="w-5 h-5" /></Button>
        <Button variant="ghost" size="icon"><BookmarkPlus className="w-5 h-5" /></Button>
        <Button variant="ghost" size="icon"><Heart className="w-5 h-5 text-[#FBA997]" /></Button>
        <Button variant="ghost" size="icon"><Bell className="w-5 h-5" /></Button>
        <Button variant="ghost" size="icon"><Share2 className="w-5 h-5" /></Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="text-sm">David D'Souza</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default TopNavbar;