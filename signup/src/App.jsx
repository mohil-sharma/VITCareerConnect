import { useState } from "react";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";
import { Card, CardContent } from "./components/ui/card.jsx";
import { cn } from "@/lib/utils";
import { FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SignupForm() {
  const [workStatus, setWorkStatus] = useState(null);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-black to-purple-900 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg"
      >
        <Card className="bg-gray-900 text-white shadow-xl p-6 rounded-2xl">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Create your Job Profile</h2>
            <p className="text-gray-400 text-center">Search & apply to jobs from VIT's only Job Portal</p>
            
            <Input placeholder="Full Name" className="bg-gray-800 border-gray-700" />
            <Input placeholder="Email ID" className="bg-gray-800 border-gray-700" />
            <Input type="password" placeholder="Password (Min 6 characters)" className="bg-gray-800 border-gray-700" />
            <Input placeholder="+91 Enter your mobile number" className="bg-gray-800 border-gray-700" />
            
            <div>
              <p className="text-gray-400 mb-2">Work Status</p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className={cn(
                    "w-1/2 bg-gray-800 border-gray-700",
                    workStatus === "experienced" && "border-purple-500 bg-purple-900"
                  )}
                  onClick={() => setWorkStatus("experienced")}
                >
                  I'm Experienced
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    "w-1/2 bg-gray-800 border-gray-700",
                    workStatus === "fresher" && "border-purple-500 bg-purple-900"
                  )}
                  onClick={() => setWorkStatus("fresher")}
                >
                  I'm a Fresher
                </Button>
              </div>
            </div>
            
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Register Now</Button>
            
            <div className="text-center text-gray-400">OR</div>
            
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-gray-800 border-gray-700">
              <FaGoogle className="text-red-500" /> Continue with Google
            </Button>
            
            <p className="text-center text-gray-400 text-sm">
              By clicking Register, you agree to the
              <span className="text-purple-400"> Terms and Conditions </span>&
              <span className="text-purple-400"> Privacy Policy</span> of CareerConnect
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
