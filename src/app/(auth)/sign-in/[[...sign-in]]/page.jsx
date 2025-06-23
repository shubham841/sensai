import DummyAlert from "@/components/alert-box";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="flex flex-row items-start gap-8">
        {/* Dummy Email/Password Box */}
        <DummyAlert disabled/>

        {/* Clerk Sign-In Box */}
        <SignIn />
      </div>
    </div>
  );
};

export default Page;
