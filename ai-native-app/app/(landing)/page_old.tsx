// import Footer from "@/app/(landing)/Footer";

// // import components ui  button  from shadcn ui
// import { Button } from "@/components/ui/button";

// export default function Homepage() {
//   const name = "Edge_Hub";
//   return (
//     <>
//       <h1 className="text-3xl font-bold   animate-bounce ">Hello {name}!</h1>
//       <p>Welcome to my website!</p>

//       <Button>Click me</Button>
//       {/* <Footer /> */}
//     </>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="[EMAIL_ADDRESS]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
}
