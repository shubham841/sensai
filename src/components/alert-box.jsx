// app/components/DummyCredentialsCard.js
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DummyCredentialsCard() {
  const dummyEmail = "dummy1234@gmail.com";
  const dummyPassword = "Dummy0801";


  return (
    <Card className="max-w-md mx-auto mt-6 shadow-xl">
      <CardHeader>
        <CardTitle>🧪 Dummy Login Credentials</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-mono">{dummyEmail}</p>
          </div>
          
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Password</p>
            <p className="font-mono">{dummyPassword}</p>
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
}
