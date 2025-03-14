import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import {
  ArrowRight,
  Stethoscope,
  Search,
  FileText,
  Clock,
  Brain,
  ClipboardList,
  UserRound,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e5f3ff_1px,transparent_1px),linear-gradient(to_bottom,#e5f3ff_1px,transparent_1px)] bg-[size:6rem_4rem]" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-transparent opacity-80" />

        <div className="container px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-10 text-center">
          {/* Floating elements for visual interest */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse hidden lg:block" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse hidden lg:block" />

          {/* Hero content */}
          <div className="relative space-y-8 max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-2">
              <Stethoscope className="h-4 w-4 mr-2 text-blue-600" />
              <span>
                Transforming EHR Interactions for Healthcare Professionals
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              MediQuery AI Assistant
            </h1>

            <p className="max-w-[800px] mx-auto text-lg text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed">
              Stop searching through endless menus. Simply
              <span className="font-semibold text-blue-600"> ask</span> for the
              patient information you need.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Access EHR Assistant
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </Link>
              </SignedIn>

              <SignedOut>
                <SignInButton
                  mode="modal"
                  fallbackRedirectUrl={"/dashboard"}
                  forceRedirectUrl={"/dashboard"}
                >
                  <Button
                    size="lg"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </SignInButton>
              </SignedOut>

              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Preview Image */}
          <div className="relative w-full max-w-4xl mt-16 rounded-xl shadow-2xl shadow-blue-100 border border-blue-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-50" />
            <div className="bg-white p-4 rounded-t-xl border-b border-blue-100 flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-4"></div>
              <div className="text-sm text-gray-500 font-medium">
                MediQuery EHR Assistant
              </div>
            </div>
            <div className="relative z-10 bg-white p-6">
              <div className="flex">
                <div className="w-1/3 border-r border-blue-100 pr-4">
                  <div className="text-sm font-medium text-blue-800 mb-3">
                    Patient List
                  </div>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg mb-2 flex items-center ${i === 2 ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"}`}
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <div className="text-sm font-medium">Patient {i}</div>
                        <div className="text-xs text-gray-500">
                          ID: {100000 + i}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-2/3 pl-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <UserRound className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">
                        Female, 42 years • ID: 100002
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-blue-800 mb-2">Query</div>
                    <div className="font-medium">
                      <p>{`What are Sarah's latest lab results and medication history?`}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                        <Stethoscope className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-blue-800 mb-1">
                          MediQuery AI
                        </div>
                        <div className="text-sm">
                          <p className="mb-2">
                            <span className="font-medium">
                              Latest Lab Results (March 15, 2025):
                            </span>
                          </p>
                          <ul className="list-disc pl-5 mb-3 space-y-1">
                            <li>
                              Hemoglobin A1c: 5.7% (Normal range: &lt;5.7%)
                            </li>
                            <li>
                              Cholesterol: 185 mg/dL (Normal range: &lt;200
                              mg/dL)
                            </li>
                            <li>Blood Pressure: 122/78 mmHg</li>
                          </ul>
                          <p className="mb-2">
                            <span className="font-medium">
                              Current Medications:
                            </span>
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Lisinopril 10mg - Once daily</li>
                            <li>Metformin 500mg - Twice daily</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-blue-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900">
              Streamline Your Clinical Workflow
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-700">
              Our AI assistant helps healthcare professionals access patient
              information quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Search className="h-6 w-6" />,
                title: "Instant Information Retrieval",
                description:
                  "Find patient data in seconds with natural language queries instead of navigating complex EHR menus.",
              },
              {
                icon: <HeartPulse className="h-6 w-6" />,
                title: "Clinical Context Awareness",
                description:
                  "Our AI understands medical terminology and the relationships between different health data points.",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Time-Saving Efficiency",
                description:
                  "Reduce documentation time by up to 40%, allowing more meaningful patient interactions.",
              },
              {
                icon: <FileText className="h-6 w-6" />,
                title: "Comprehensive EHR Integration",
                description:
                  "Seamlessly connects with major EHR systems including Epic, Cerner, and Allscripts.",
              },
              {
                icon: <ClipboardList className="h-6 w-6" />,
                title: "Structured Data Summaries",
                description:
                  "Get organized summaries of patient histories, lab results, medications, and treatment plans.",
              },
              {
                icon: <Brain className="h-6 w-6" />,
                title: "Intelligent Learning",
                description:
                  "Adapts to your query patterns and clinical focus to provide increasingly relevant information.",
              },
            ].map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-5">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900">
              How MediQuery Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Designed for healthcare professionals with security and efficiency
              in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Secure Authentication",
                description:
                  "Log in securely with your hospital credentials through our HIPAA-compliant authentication system.",
              },
              {
                step: "02",
                title: "Select Patient",
                description:
                  "Choose a patient from your roster or search by name, ID, or other identifiers.",
              },
              {
                step: "03",
                title: "Ask Naturally",
                description:
                  "Simply type or speak your question about the patient's health information in plain language.",
              },
            ].map(({ step, title, description }, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-blue-100">{step}</div>
                <h3 className="text-xl font-semibold text-blue-900 mt-2">
                  {title}
                </h3>
                <p className="text-gray-600 mt-2">{description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 right-0 transform translate-x-1/2 w-16 h-[2px] bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900">
              Trusted by Healthcare Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "MediQuery has revolutionized how I access patient information during rounds. I can quickly get the data I need without interrupting my workflow.",
                author: "Dr. Emily Chen",
                role: "Cardiologist, Memorial Hospital",
              },
              {
                quote:
                  "As a nurse practitioner managing multiple patients, this tool has been invaluable. I can quickly pull up medication histories and lab trends with a simple question.",
                author: "James Wilson, NP",
                role: "Primary Care, Lakeside Clinic",
              },
              {
                quote:
                  "The time savings are remarkable. What used to take minutes of clicking through menus now takes seconds with a simple query. This means more time with patients.",
                author: "Dr. Sarah Patel",
                role: "Pediatrician, Children's Medical Center",
              },
            ].map(({ author, role }, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">{`"{quote}"`}</p>
                <div>
                  <p className="font-semibold text-blue-900">{author}</p>
                  <p className="text-gray-500 text-sm">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-900 mb-6">
              Ready to transform your EHR experience?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join healthcare professionals who are saving hours each week and
              improving patient care with MediQuery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Access EHR Assistant
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </Link>
              </SignedIn>

              <SignedOut>
                <SignInButton
                  mode="modal"
                  fallbackRedirectUrl={"/dashboard"}
                  forceRedirectUrl={"/dashboard"}
                >
                  <Button
                    size="lg"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Start 14-Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </SignInButton>
              </SignedOut>

              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-blue-700 bg-white border border-blue-200 rounded-full hover:bg-blue-50 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
              <div className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 mr-1 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center mr-4">
                <svg
                  className="w-5 h-5 mr-1 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-900 text-white">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Stethoscope className="h-6 w-6 mr-2 text-yellow-400" />
                <span className="text-xl font-bold">MediQuery</span>
              </div>
              <p className="text-sm text-blue-200 mt-2">
                Transforming EHR interactions for healthcare professionals
              </p>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                HIPAA
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-blue-300">
            © {new Date().getFullYear()} MediQuery Health Technologies. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
