import {DashboardHeader} from "@/components/dashboard/header";
import {DashboardContent} from "@/components/dashboard/content";
import DataProvider from "@/components/data-provider";
import loadData from "@/lib/data-loader";

export default async function DashboardPage() {

    const data = await loadData();

  return (
      <div className="h-svh overflow-hidden lg:p-2 w-full">
        <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full bg-background">
          <DataProvider data={data}>
              <DashboardHeader />
              <DashboardContent />
          </DataProvider>
        </div>
      </div>
  );
}
