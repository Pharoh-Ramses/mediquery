import { FileText, Search, Database, Zap } from "lucide-react";

export default function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
        <FileText className="h-8 w-8 text-blue-600" />
      </div>

      <h2 className="text-2xl font-bold text-blue-900 mb-3">
        MediQuery EHR Assistant
      </h2>

      <p className="text-gray-600 max-w-md mb-6">
        Ask questions about patient data in natural language. No need to
        navigate complex menus or remember specific commands.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
        {[
          {
            icon: <Search className="h-5 w-5 text-blue-600" />,
            title: "Natural Language Queries",
            description: "Ask questions as you would to a colleague",
          },
          {
            icon: <Database className="h-5 w-5 text-blue-600" />,
            title: "Complete EHR Access",
            description: "Search across all patient records and data",
          },
          {
            icon: <Zap className="h-5 w-5 text-blue-600" />,
            title: "Instant Results",
            description: "Get immediate, accurate information",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 mx-auto">
              {feature.icon}
            </div>
            <h3 className="font-medium text-blue-900 mb-1">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
        <p>{`Try asking: "What are John Smith's most recent blood pressure readings?"`}</p>
      </div>
    </div>
  );
}
