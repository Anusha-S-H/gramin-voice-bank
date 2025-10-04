import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Download, Upload, FileText } from "lucide-react";

const actions = [
  { icon: Send, label: "Send Money", color: "bg-primary" },
  { icon: Download, label: "Deposit", color: "bg-success" },
  { icon: Upload, label: "Withdraw", color: "bg-warning" },
  { icon: FileText, label: "Cheque", color: "bg-accent" },
];

export const QuickActions = () => {
  return (
    <Card className="glass-card">
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="ghost"
              className="h-auto flex-col gap-2 p-4 hover:bg-muted/50 hover-scale"
            >
              <div className={`w-12 h-12 rounded-full ${action.color} bg-opacity-10 flex items-center justify-center`}>
                <action.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
