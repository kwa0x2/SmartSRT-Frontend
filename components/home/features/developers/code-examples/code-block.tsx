import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from "sonner";

const CodeBlock = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('python');

  const customStyle = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: 'transparent',
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: 'transparent',
    }
  };

  const codeSnippets = {
    python: `from autosrt import AutoSRT

client = AutoSRT(
    api_key="YOUR_API_KEY"
)

# Generate SRT file from video
response = client.generate_srt(
    video_url="https://example.com/video.mp4",
    language="en"
)

# Download SRT file
with open("subtitles.srt", "w") as f:
    f.write(response.text)`,

    javascript: `import { AutoSRT } from 'autosrt';

const client = new AutoSRT({
  apiKey: 'YOUR_API_KEY'
});

// Generate SRT file from video
const response = await client.generateSrt({
  videoUrl: 'https://example.com/video.mp4',
  language: 'en'
});

// Download SRT file
const srtContent = await response.text();
console.log(srtContent);`,

    curl: `curl -X POST "https://api.autosrt.com/v1/srt/generate" \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "video_url": "https://example.com/video.mp4",
  "language": "en"
}'`
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy code");
    }
  };

  return (
      <div className="w-full h-[350px] rounded-lg overflow-hidden border bg-[#0F1117]">
        <Tabs defaultValue="python" className="w-full h-full flex flex-col" onValueChange={(value) => setActiveTab(value)}>
          <div className="flex items-center justify-between px-4 py-2 bg-[#0F1117]">
            <TabsList className="bg-transparent border-none ">
              <TabsTrigger
                  value="python"
                  className="text-sm data-[state=active]:text-white uppercase tracking-wide font-bold data-[state=active]:bg-transparent text-zinc-400"
              >
                Python
              </TabsTrigger>
              <TabsTrigger
                  value="javascript"
                  className="text-sm data-[state=active]:text-white uppercase  tracking-wide font-bold data-[state=active]:bg-transparent text-zinc-400"
              >
                JavaScript
              </TabsTrigger>
              <TabsTrigger
                  value="curl"
                  className="text-sm data-[state=active]:text-white uppercase  tracking-wide font-bold data-[state=active]:bg-transparent text-zinc-400"
              >
                cURL
              </TabsTrigger>
            </TabsList>
            <button
                onClick={() => copyToClipboard(codeSnippets[activeTab as keyof typeof codeSnippets])}
                className="text-zinc-400 hover:text-zinc-200 p-2 rounded-md transition-colors"
                aria-label={copied ? "Code copied" : "Copy code"}
                title={copied ? "Copied!" : "Copy to clipboard"}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>

          <div className="flex-1 overflow-auto custom-scrollbar">
            {Object.entries(codeSnippets).map(([lang, code]) => (
                <TabsContent key={lang} value={lang} className="mt-0 h-full">
                  <div className="p-4 h-full">
                    <SyntaxHighlighter
                        language={lang === 'curl' ? 'bash' : lang}
                        style={customStyle}
                        customStyle={{
                          margin: 0,
                          padding: 0,
                          background: 'transparent',
                          height: '100%',
                          overflowX: 'auto',
                        }}
                        className="custom-scrollbar"
                        showLineNumbers
                        wrapLines={true}
                        lineProps={{style: {background: 'transparent'}}}
                    >
                      {code}
                    </SyntaxHighlighter>
                  </div>
                </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
  );
};

export default CodeBlock;