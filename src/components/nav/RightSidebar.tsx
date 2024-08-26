import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RightSidebar: React.FC = () => {
  return (
    <Card className="w-64 border-l border-gray-200 rounded-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Invoice</CardTitle>
        <Button variant="ghost" size="sm"><ChevronDown className="h-4 w-4" /></Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1">
            <Button variant="default" size="sm" className="bg-[#FBA997] hover:bg-[#FBA997]/90 rounded-full text-xs">2023</Button>
            <Button variant="default" size="sm" className="bg-[#56D8D8] hover:bg-[#56D8D8]/90 rounded-full text-xs">Apr</Button>
            <Button variant="default" size="sm" className="bg-[#56D8D8] hover:bg-[#56D8D8]/90 rounded-full text-xs">May</Button>
            <Button variant="default" size="sm" className="bg-[#56D8D8] hover:bg-[#56D8D8]/90 rounded-full text-xs">Jun</Button>
          </div>
          <div className="grid grid-cols-3 gap-1 text-xs">
            <span className="text-gray-500">2022</span>
            <span className="text-gray-500">Jul</span>
            <span className="text-gray-500">Aug</span>
            <span className="text-gray-500">2021</span>
            <span className="text-gray-500">Sep</span>
            <span className="text-gray-500">Oct</span>
            <span className="text-gray-500">2020</span>
            <span className="text-gray-500">Nov</span>
            <span className="text-gray-500">Dec</span>
          </div>
          <Separator />
          <div>
            <span className="text-xs text-gray-600 block mb-1">Current selections</span>
            <div className="flex gap-1">
              <Button variant="default" size="sm" className="bg-[#56D8D8] hover:bg-[#56D8D8]/90 rounded-full text-xs">Global name</Button>
              <Button variant="default" size="sm" className="bg-[#FBA997] hover:bg-[#FBA997]/90 rounded-full text-xs">TripGain</Button>
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-600 block mb-1">Currency</span>
            <Button variant="default" size="sm" className="bg-[#56D8D8] hover:bg-[#56D8D8]/90 rounded-full text-xs">USD($)</Button>
          </div>
          <div>
            <span className="text-xs text-gray-600 block mb-1">Invoice year</span>
            <div className="flex gap-1">
              <Button variant="default" size="sm" className="bg-[#56D8D8] hover:bg-[#56D8D8]/90 rounded-full text-xs">2022</Button>
              <Button variant="default" size="sm" className="bg-[#56D8D8] hover:bg-[#56D8D8]/90 rounded-full text-xs">2023</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RightSidebar;