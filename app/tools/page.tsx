import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ToolsPage() {
  const tools = {
    Languages: [
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "TypeScript", icon: "/icons/js.svg" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "HTML/CSS", icon: "/icons/html5.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "Dart", icon: "/icons/dart.png" },
      { name: "Java", icon: "/icons/java.png" },
    ],
    Frameworks: [
      { name: "Node.js", icon: "/icons/node.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      { name: "Bootstrap", icon: "/icons/bootstrap.png" },
      { name: "Flutter", icon: "/icons/flutter.png" },
    ],
    Tools: [
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
      { name: "VS Code", icon: "/icons/vs-code.png" },
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Postman", icon: "/icons/postman.png" },
      { name: "JetBrains", icon: "/icons/jet-brains.png" },
      { name: "Copilot", icon: "/icons/copilot.png" },
      { name: "Gemini", icon: "/icons/gemini.png" },
      { name: "Adobe Illustrator", icon: "/icons/adobe illustrator.png" },
    ],
    Databases: [
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "PostgreSQL", icon: "/icons/postgres.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "Firebase", icon: "/icons/firebase.png" },
    ],
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {Object.entries(tools).map(([category, items]) => (
          <Card
            key={category}
            className="p-4 sm:p-6 border border-border bg-card"
          >
            <h3 className="text-base font-semibold text-foreground mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((tool) => {
                return (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-3 py-2 bg-accent/50 text-accent-foreground rounded-md"
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                    <span className="text-sm">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
