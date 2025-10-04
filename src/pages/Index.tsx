import { Header } from "@/components/Header";
import { BalanceCard } from "@/components/BalanceCard";
import { QuickActions } from "@/components/QuickActions";
import { TransactionList } from "@/components/TransactionList";
import { SavingsCard } from "@/components/SavingsCard";
import { LoanRecommendations } from "@/components/LoanRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 animate-fade-in">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back, <span className="gradient-text">Ramesh Kumar</span>
          </h2>
          <p className="text-muted-foreground">
            Here's what's happening with your money today
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Main Account Info */}
          <div className="lg:col-span-2 space-y-6">
            <BalanceCard />
            <QuickActions />
            <TransactionList />
          </div>

          {/* Right Column - Savings & Loans */}
          <div className="space-y-6">
            <SavingsCard />
            <LoanRecommendations />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Your security is our priority. All transactions are encrypted and secure.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
