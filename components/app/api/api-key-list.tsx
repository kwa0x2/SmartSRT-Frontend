import { Card } from "@/components/ui/card";
import { Info, Trash2 } from "lucide-react";
import {ApiKey} from "@/types";

interface ApiKeyListProps {
    apiKeys: ApiKey[];
    handleDeleteKey: (id: string) => void;
}

const ApiKeyList = ({ apiKeys, handleDeleteKey }: ApiKeyListProps) => {
    if (apiKeys.length === 0) {
        return (
            <Card className="flex items-center gap-3 text-black">
                <Info className="h-5 w-5 shrink-0" />
                <div className="space-y-1">
                    <p className="font-medium">API Keys Missing</p>
                    <p className="text-sm">No API keys have been created yet.</p>
                </div>
            </Card>
        );
    }

    return (
        <div className="space-y-4">
            {apiKeys.map((key) => (
                <Card key={key.id} className="flex items-center justify-between p-4">
                    <span className="font-medium">{key.name}</span>
                    <button
                        onClick={() => handleDeleteKey(key.id)}
                    >
                        <Trash2 className="h-5 w-5 text-destructive" />
                    </button>
                </Card>
            ))}
        </div>
    );
};

export default ApiKeyList; 