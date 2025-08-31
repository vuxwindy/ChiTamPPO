"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaCoins, FaGamepad, FaSignInAlt, FaUserPlus, FaUsers } from "react-icons/fa";

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  const signUp = async (email: string, password: string, displayName: string) => {
    setIsLoading(true);
    try {
      // TODO: replace with real firebase logic
      await new Promise((res) => setTimeout(res, 1000));
      return { success: true };
    } catch (err: any) {
      setFirebaseError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: replace with real firebase logic
      await new Promise((res) => setTimeout(res, 1000));
      return { success: true };
    } catch (err: any) {
      setFirebaseError(err.message);
      return { success: false, error: err.message };
    } finally {
      setIsLoading(false);
    }
  };

  const addReferral = async (code: string) => {
    console.log("Referral code submitted:", code);
  };

  return { signUp, signIn, addReferral, isLoading, firebaseError };
};

export default function SignupPage() {
  const router = useRouter();
  const { signUp, signIn, addReferral, isLoading, firebaseError } = useFirebase();

  const [activeTab, setActiveTab] = useState<"signup" | "signin">("signup");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [signupForm, setSignupForm] = useState({
    displayName: "",
    email: "",
    password: "",
    referralCode: "",
    agreeTerms: false,
  });

  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // --- HANDLERS ---
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    const result = await signUp(signupForm.email, signupForm.password, signupForm.displayName);

    if (result.success) {
      if (signupForm.referralCode) {
        try {
          await addReferral(signupForm.referralCode);
        } catch (referralError) {
          console.warn("Referral error:", referralError);
        }
      }
      setSuccessMessage("Account created successfully! Welcome to PixelPayot!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      setError(result.error || "Failed to create account");
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    const result = await signIn(signinForm.email, signinForm.password);

    if (result.success) {
      setSuccessMessage("Welcome back!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      setError(result.error || "Failed to sign in");
    }
  };

  const showTerms = () => alert("Terms of Service will be displayed here");
  const showPrivacy = () => alert("Privacy Policy will be displayed here");
  const showForgotPassword = () => alert("Forgot password functionality will be implemented here");

  // --- REFERRAL FROM URL ---
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refCode = params.get("ref");
    if (refCode) {
      setSignupForm((prev) => ({ ...prev, referralCode: refCode }));
      console.log("Referral code detected:", refCode);
    }
  }, []);

  // --- WATCH FIREBASE ERROR ---
  useEffect(() => {
    if (firebaseError) setError(firebaseError);
  }, [firebaseError]);

  return (
    <div className='signup-page bg-gradient-to-br from-indigo-400 to-purple-700 min-h-screen'>
      <Header />

      {/* Auth Hero Section */}
      <section className='auth-hero py-20'>
        <div className='container mx-auto flex justify-center'>
          <div className='w-full max-w-lg'>
            <div className='auth-container bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20'>
              {/* Tabs */}
              <div className='auth-tabs flex mb-6 bg-white/10 rounded-xl p-1'>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`tab-btn flex-1 px-4 py-3 rounded-lg font-semibold mb-0 flex items-center justify-center gap-2 transition ${
                    activeTab === "signup" ? "bg-white/20 text-pink-400" : "text-white"
                  }`}
                >
                  <FaUserPlus /> Sign Up
                </button>
                <button
                  onClick={() => setActiveTab("signin")}
                  className={`tab-btn flex-1 px-4 py-3 rounded-lg font-semibold mb-0 flex items-center justify-center gap-2 transition ${
                    activeTab === "signin" ? "bg-white/20 text-pink-400" : "text-white"
                  }`}
                >
                  <FaSignInAlt /> Sign In
                </button>
              </div>

              {/* SIGNUP FORM */}
              {activeTab === "signup" && (
                <form onSubmit={handleSignUp} className='auth-form text-white space-y-4'>
                  <h2 className='text-2xl font-bold text-center'>Create Your Account</h2>
                  <p className='text-center opacity-80 mb-4'>Join PixelPayot and start earning $PPO tokens!</p>

                  <div>
                    <label className='block mb-1 font-semibold'>Display Name</label>
                    <input
                      type='text'
                      required
                      value={signupForm.displayName}
                      onChange={(e) => setSignupForm({ ...signupForm, displayName: e.target.value })}
                      className='form-control w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white'
                      placeholder='Enter your display name'
                    />
                  </div>

                  <div>
                    <label className='block mb-1 font-semibold'>Email Address</label>
                    <input
                      type='email'
                      required
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                      className='form-control w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white'
                      placeholder='Enter your email'
                    />
                  </div>

                  <div>
                    <label className='block mb-1 font-semibold'>Password</label>
                    <input
                      type='password'
                      minLength={6}
                      required
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                      className='form-control w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white'
                      placeholder='Create a password (min 6 characters)'
                    />
                  </div>

                  <div>
                    <label className='block mb-1 font-semibold'>Referral Code (Optional)</label>
                    <input
                      type='text'
                      value={signupForm.referralCode}
                      onChange={(e) => setSignupForm({ ...signupForm, referralCode: e.target.value })}
                      className='form-control w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white'
                      placeholder='Enter referral code'
                    />
                  </div>

                  <label className='flex items-center gap-2 text-sm'>
                    <input
                      type='checkbox'
                      required
                      checked={signupForm.agreeTerms}
                      onChange={(e) => setSignupForm({ ...signupForm, agreeTerms: e.target.checked })}
                    />
                    I agree to the{" "}
                    <a href='#' onClick={showTerms} className='text-pink-400 underline'>
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href='#' onClick={showPrivacy} className='text-pink-400 underline'>
                      Privacy Policy
                    </a>
                  </label>

                  <button
                    type='submit'
                    disabled={isLoading}
                    className='btn-linear w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 font-semibold'
                  >
                    {isLoading ? <i className='fas fa-spinner fa-spin mr-2'></i> : <i className='fas fa-user-plus mr-2'></i>}
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </button>
                </form>
              )}

              {/* SIGNIN FORM */}
              {activeTab === "signin" && (
                <form onSubmit={handleSignIn} className='auth-form text-white space-y-4'>
                  <h2 className='text-2xl font-bold text-center'>Welcome Back!</h2>
                  <p className='text-center opacity-80 mb-4'>Sign in to your PixelPayot account</p>

                  <div>
                    <label className='block mb-1 font-semibold'>Email Address</label>
                    <input
                      type='email'
                      required
                      value={signinForm.email}
                      onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}
                      className='form-control w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white'
                      placeholder='Enter your email'
                    />
                  </div>

                  <div>
                    <label className='block mb-1 font-semibold'>Password</label>
                    <input
                      type='password'
                      required
                      value={signinForm.password}
                      onChange={(e) => setSigninForm({ ...signinForm, password: e.target.value })}
                      className='form-control w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white'
                      placeholder='Enter your password'
                    />
                  </div>

                  <label className='flex items-center gap-2 text-sm'>
                    <input
                      type='checkbox'
                      checked={signinForm.rememberMe}
                      onChange={(e) => setSigninForm({ ...signinForm, rememberMe: e.target.checked })}
                    />
                    Remember me
                  </label>

                  <button
                    type='submit'
                    disabled={isLoading}
                    className='btn-linear w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 font-semibold'
                  >
                    {isLoading ? <i className='fas fa-spinner fa-spin mr-2'></i> : <i className='fas fa-sign-in-alt mr-2'></i>}
                    {isLoading ? "Signing In..." : "Sign In"}
                  </button>

                  <div className='form-footer text-center mt-3'>
                    <a href='#' onClick={showForgotPassword} className='text-pink-400 underline'>
                      Forgot Password?
                    </a>
                  </div>
                </form>
              )}

              {/* ERROR / SUCCESS */}
              {error && (
                <div className='alert mt-4 p-3 rounded-lg bg-red-500/20 border border-red-500 text-red-300'>
                  <i className='fas fa-exclamation-circle mr-2'></i> {error}
                </div>
              )}
              {successMessage && (
                <div className='alert mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500 text-green-300'>
                  <i className='fas fa-check-circle mr-2'></i> {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='benefits-section py-20 bg-black/30'>
        <div className='container mx-auto'>
          <h2 className='text-center text-white text-3xl font-bold mb-10'>Why Join PixelPayot?</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='benefit-card text-center p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur'>
              <div className='benefit-icon w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-2xl text-white'>
                <FaCoins />
              </div>
              <h4 className='text-white font-semibold mb-2'>Earn $PPO Tokens</h4>
              <p className='text-white/80'>Complete tasks, play games, and earn $PPO tokens.</p>
            </div>
            <div className='benefit-card text-center p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur'>
              <div className='benefit-icon w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-2xl text-white'>
                <FaUsers />
              </div>
              <h4 className='text-white font-semibold mb-2'>Referral Rewards</h4>
              <p className='text-white/80'>Invite friends and earn 5 $PPO for each successful referral.</p>
            </div>
            <div className='benefit-card text-center p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur'>
              <div className='benefit-icon w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-2xl text-white'>
                <FaGamepad />
              </div>
              <h4 className='text-white font-semibold mb-2'>Play & Earn</h4>
              <p className='text-white/80'>Enjoy exciting games while earning rewards.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
