import TopNavbar from './components/nav/TopNavbar';
import LeftSidebar from './components/nav/LeftSidebar';
import RightSidebar from './components/nav/RightSidebar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <main className="flex-1 bg-gray-100 p-4 overflow-auto">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Travel Summary</CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Add your dashboard content here */}
              {/* You would need to create separate components for each section of the dashboard */}
            </CardContent>
          </Card>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;