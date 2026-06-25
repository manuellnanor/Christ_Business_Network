import { useState } from "react";
import { Check, Copy, HelpCircle, Award, Landmark } from "lucide-react";
import mtnMobileMoney from "../../assets/mtn-mobile-money.jpg";

export default function DonationWidget() {
  const [copiedBankAccount, setCopiedBankAccount] = useState(false);
  const [copiedMomoNumber, setCopiedMomoNumber] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyBankAccount = () => {
    navigator.clipboard.writeText("201110231110");
    setCopiedBankAccount(true);
    setTimeout(() => setCopiedBankAccount(false), 2000);
  };

  const handleCopyMomoNumber = () => {
    navigator.clipboard.writeText("0599004586");
    setCopiedMomoNumber(true);
    setTimeout(() => setCopiedMomoNumber(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("cbnprof.gh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="membership" className="py-24 bg-brand-navy text-white overflow-hidden relative">
      {/* Background Decorative Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge & Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-red font-sans font-bold text-xs uppercase tracking-wider mb-4">
            Join Christ Business Network
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Membership Registration &amp; Subscription Portal
          </h2>
          <p className="text-gray-300 font-sans text-sm sm:text-base mt-4">
            Become part of a global community of faith-driven professionals. Follow the simple steps below to secure your verified membership.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Guides */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Guide 1: How do I register as a member? */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-brand-red/30 transition-all duration-300">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  How do I register as a member?
                </h3>
              </div>

              <div className="space-y-6">
                
                {/* Step 1 */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white font-display font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-200 font-sans text-sm sm:text-base font-semibold">
                      Request a registration link by emailing{" "}
                      <button
                        onClick={handleCopyEmail}
                        className="text-brand-red hover:underline font-bold focus:outline-none transition-colors inline-flex items-center gap-1"
                      >
                        cbnprof.gh@gmail.com
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </p>
                    {copiedEmail && (
                      <span className="text-xs text-green-400 font-semibold block animate-pulse">
                        Email copied to clipboard!
                      </span>
                    )}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white font-display font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="text-gray-200 font-sans text-sm sm:text-base leading-relaxed">
                      After reviewing your application, CBN will send you a copy of the Constitution and a temporary CBN Registration Number.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white font-display font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="text-gray-200 font-sans text-sm sm:text-base leading-relaxed">
                      Use the temporary registration number to pay your Membership Subscription Fee.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white font-display font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <p className="text-gray-200 font-sans text-sm sm:text-base leading-relaxed">
                      Make payments through any of the following channels highlighted in the payment section.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Guide 2: How can I confirm my membership? */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  How can I confirm my membership?
                </h3>
              </div>

              <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p>
                    After payment confirmation, CBN will issue you a permanent Registration Number, subject to annual renewal.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p>
                    After completing the application and registration process successfully, you will receive an official notification letter signed by the President of the Association. The letter will contain your CBN Membership Registration Number.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Payment Details */}
          <div className="lg:col-span-5 space-y-8 w-full max-w-md mx-auto">
            
            {/* Payment Options Card */}
            <div className="bg-white text-brand-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="w-5 h-5 text-[#ED343D]" />
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#ED343D]">
                  Payment Options
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl text-brand-dark mb-1">
                Bank Details
              </h3>
              <p className="text-gray-500 font-sans text-xs mb-6">
                Christ Business Network is registered globally. Kindly use the GTBank details below for subscription payments.
              </p>

              {/* Bank Acc Box */}
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Bank Name</span>
                  <span className="font-display font-extrabold text-[#ED343D] text-lg">GTBank</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Acc. Name</span>
                  <span className="font-sans font-bold text-brand-navy text-sm text-right">Christ Business Network</span>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Acc No.</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-extrabold text-brand-navy text-base tracking-wider">201110231110</span>
                    <button
                      onClick={handleCopyBankAccount}
                      className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-500 hover:text-brand-red hover:border-brand-red/35 transition-all"
                      title="Copy Account Number"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Branch</span>
                  <span className="font-sans font-semibold text-brand-navy text-sm">Head Office</span>
                </div>
              </div>

              {copiedBankAccount && (
                <p className="text-center text-xs text-green-600 font-bold mt-3 animate-pulse">
                  Account number copied successfully!
                </p>
              )}
            </div>

            {/* Mobile Money Payment Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={mtnMobileMoney}
                  alt="MTN Mobile Money"
                  className="h-11 w-11 rounded-xl object-cover border border-yellow-300 shadow-sm"
                />
                <h4 className="font-display font-bold text-lg text-white">
                  Pay with MTN Mobile Money
                </h4>
              </div>
              <p className="text-gray-300 font-sans text-xs">
                Use the mobile money details below for quick membership subscription payment.
              </p>

              <div className="bg-white/10 rounded-2xl p-5 border border-white/10 space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Network</span>
                  <span className="font-display font-extrabold text-yellow-300 text-base text-right">MTN Mobile Money</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Name</span>
                  <span className="font-sans font-bold text-white text-sm text-right">Christ Business Network</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Number</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-extrabold text-white text-base tracking-wider">0599004586</span>
                    <button
                      onClick={handleCopyMomoNumber}
                      className="p-1.5 rounded-lg bg-white/10 border border-white/15 text-gray-200 hover:text-yellow-300 hover:border-yellow-300/50 transition-all"
                      title="Copy Mobile Money Number"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-sans font-bold text-gray-400 uppercase">Reference</span>
                  <span className="font-sans font-semibold text-white text-sm text-right">Your CBN Registration No.</span>
                </div>
              </div>

              {copiedMomoNumber && (
                <p className="text-center text-xs text-green-400 font-bold animate-pulse">
                  Mobile money number copied successfully!
                </p>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
